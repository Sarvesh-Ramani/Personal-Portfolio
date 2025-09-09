from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List, Optional
from datetime import datetime

# Import models
from models import (
    PersonalInfo, PersonalInfoUpdate,
    Experience, ExperienceCreate, ExperienceUpdate,
    Project, ProjectCreate, ProjectUpdate,
    Skill, SkillCreate, SkillUpdate,
    Education, EducationCreate, EducationUpdate,
    Achievement, AchievementCreate, AchievementUpdate
)

# Import database
from database import (
    personal_info_collection,
    experience_collection,
    projects_collection,
    skills_collection,
    education_collection,
    achievements_collection,
    close_database_connection
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Helper function to convert MongoDB document to dict
def document_to_dict(doc):
    if doc and "_id" in doc:
        doc["_id"] = str(doc["_id"])
    return doc

# Personal Information Endpoints
@api_router.get("/personal-info", response_model=PersonalInfo)
async def get_personal_info():
    personal_info = await personal_info_collection.find_one()
    if not personal_info:
        raise HTTPException(status_code=404, detail="Personal information not found")
    return document_to_dict(personal_info)

@api_router.put("/personal-info", response_model=PersonalInfo)
async def update_personal_info(personal_info: PersonalInfoUpdate):
    existing_info = await personal_info_collection.find_one()
    if not existing_info:
        raise HTTPException(status_code=404, detail="Personal information not found")
    
    update_data = {k: v for k, v in personal_info.dict().items() if v is not None}
    update_data["updatedAt"] = datetime.utcnow()
    
    await personal_info_collection.update_one(
        {"_id": existing_info["_id"]},
        {"$set": update_data}
    )
    
    updated_info = await personal_info_collection.find_one({"_id": existing_info["_id"]})
    return document_to_dict(updated_info)

# Experience Endpoints
@api_router.get("/experience", response_model=List[Experience])
async def get_all_experience():
    experiences = []
    async for experience in experience_collection.find().sort("createdAt", -1):
        experiences.append(document_to_dict(experience))
    return experiences

@api_router.post("/experience", response_model=Experience)
async def create_experience(experience: ExperienceCreate):
    experience_dict = experience.dict()
    experience_obj = Experience(**experience_dict)
    result = await experience_collection.insert_one(experience_obj.dict())
    created_experience = await experience_collection.find_one({"_id": result.inserted_id})
    return document_to_dict(created_experience)

@api_router.put("/experience/{experience_id}", response_model=Experience)
async def update_experience(experience_id: str, experience: ExperienceUpdate):
    existing_experience = await experience_collection.find_one({"id": experience_id})
    if not existing_experience:
        raise HTTPException(status_code=404, detail="Experience not found")
    
    update_data = {k: v for k, v in experience.dict().items() if v is not None}
    update_data["updatedAt"] = datetime.utcnow()
    
    await experience_collection.update_one(
        {"id": experience_id},
        {"$set": update_data}
    )
    
    updated_experience = await experience_collection.find_one({"id": experience_id})
    return document_to_dict(updated_experience)

@api_router.delete("/experience/{experience_id}")
async def delete_experience(experience_id: str):
    result = await experience_collection.delete_one({"id": experience_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Experience not found")
    return {"message": "Experience deleted successfully"}

# Project Endpoints
@api_router.get("/projects", response_model=List[Project])
async def get_all_projects():
    projects = []
    async for project in projects_collection.find().sort("createdAt", -1):
        projects.append(document_to_dict(project))
    return projects

@api_router.get("/projects/featured", response_model=List[Project])
async def get_featured_projects():
    projects = []
    async for project in projects_collection.find({"isFeatured": True}).sort("createdAt", -1):
        projects.append(document_to_dict(project))
    return projects

@api_router.post("/projects", response_model=Project)
async def create_project(project: ProjectCreate):
    project_dict = project.dict()
    project_obj = Project(**project_dict)
    result = await projects_collection.insert_one(project_obj.dict())
    created_project = await projects_collection.find_one({"_id": result.inserted_id})
    return document_to_dict(created_project)

@api_router.put("/projects/{project_id}", response_model=Project)
async def update_project(project_id: str, project: ProjectUpdate):
    existing_project = await projects_collection.find_one({"id": project_id})
    if not existing_project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    update_data = {k: v for k, v in project.dict().items() if v is not None}
    update_data["updatedAt"] = datetime.utcnow()
    
    await projects_collection.update_one(
        {"id": project_id},
        {"$set": update_data}
    )
    
    updated_project = await projects_collection.find_one({"id": project_id})
    return document_to_dict(updated_project)

@api_router.delete("/projects/{project_id}")
async def delete_project(project_id: str):
    result = await projects_collection.delete_one({"id": project_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"message": "Project deleted successfully"}

# Skills Endpoints
@api_router.get("/skills", response_model=List[Skill])
async def get_all_skills():
    skills = []
    async for skill in skills_collection.find().sort("category", 1):
        skills.append(document_to_dict(skill))
    return skills

@api_router.post("/skills", response_model=Skill)
async def create_skill(skill: SkillCreate):
    skill_dict = skill.dict()
    skill_obj = Skill(**skill_dict)
    result = await skills_collection.insert_one(skill_obj.dict())
    created_skill = await skills_collection.find_one({"_id": result.inserted_id})
    return document_to_dict(created_skill)

@api_router.put("/skills/{skill_id}", response_model=Skill)
async def update_skill(skill_id: str, skill: SkillUpdate):
    existing_skill = await skills_collection.find_one({"id": skill_id})
    if not existing_skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    
    update_data = {k: v for k, v in skill.dict().items() if v is not None}
    update_data["updatedAt"] = datetime.utcnow()
    
    await skills_collection.update_one(
        {"id": skill_id},
        {"$set": update_data}
    )
    
    updated_skill = await skills_collection.find_one({"id": skill_id})
    return document_to_dict(updated_skill)

@api_router.delete("/skills/{skill_id}")
async def delete_skill(skill_id: str):
    result = await skills_collection.delete_one({"id": skill_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Skill not found")
    return {"message": "Skill deleted successfully"}

# Education Endpoints
@api_router.get("/education", response_model=List[Education])
async def get_all_education():
    educations = []
    async for education in education_collection.find().sort("createdAt", -1):
        educations.append(document_to_dict(education))
    return educations

@api_router.post("/education", response_model=Education)
async def create_education(education: EducationCreate):
    education_dict = education.dict()
    education_obj = Education(**education_dict)
    result = await education_collection.insert_one(education_obj.dict())
    created_education = await education_collection.find_one({"_id": result.inserted_id})
    return document_to_dict(created_education)

# Achievement Endpoints
@api_router.get("/achievements", response_model=List[Achievement])
async def get_all_achievements():
    achievements = []
    async for achievement in achievements_collection.find().sort("year", -1):
        achievements.append(document_to_dict(achievement))
    return achievements

@api_router.post("/achievements", response_model=Achievement)
async def create_achievement(achievement: AchievementCreate):
    achievement_dict = achievement.dict()
    achievement_obj = Achievement(**achievement_dict)
    result = await achievements_collection.insert_one(achievement_obj.dict())
    created_achievement = await achievements_collection.find_one({"_id": result.inserted_id})
    return document_to_dict(created_achievement)

# Original test endpoint
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running!"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_database_connection()