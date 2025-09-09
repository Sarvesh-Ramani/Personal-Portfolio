from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Personal Information Models
class PersonalInfoBase(BaseModel):
    name: str
    title: str
    email: str
    phone: str
    linkedin: str
    location: str
    profileImage: str
    summary: str
    tagline: str

class PersonalInfo(PersonalInfoBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class PersonalInfoUpdate(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    linkedin: Optional[str] = None
    location: Optional[str] = None
    profileImage: Optional[str] = None
    summary: Optional[str] = None
    tagline: Optional[str] = None

# Experience Models
class ExperienceBase(BaseModel):
    company: str
    role: str
    period: str
    location: str
    type: str
    description: str
    achievements: List[str]
    technologies: List[str]
    isCurrentJob: bool = True

class Experience(ExperienceBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class ExperienceCreate(ExperienceBase):
    pass

class ExperienceUpdate(BaseModel):
    company: Optional[str] = None
    role: Optional[str] = None
    period: Optional[str] = None
    location: Optional[str] = None
    type: Optional[str] = None
    description: Optional[str] = None
    achievements: Optional[List[str]] = None
    technologies: Optional[List[str]] = None
    isCurrentJob: Optional[bool] = None

# Project Models
class ProjectBase(BaseModel):
    title: str
    description: str
    technologies: List[str]
    category: str
    highlights: Optional[List[str]] = []
    status: str  # "Completed", "In Progress", "Planned"
    type: str    # "Enterprise", "Personal", "Research"
    isFeatured: bool = False
    githubUrl: Optional[str] = None
    demoUrl: Optional[str] = None

class Project(ProjectBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    technologies: Optional[List[str]] = None
    category: Optional[str] = None
    highlights: Optional[List[str]] = None
    status: Optional[str] = None
    type: Optional[str] = None
    isFeatured: Optional[bool] = None
    githubUrl: Optional[str] = None
    demoUrl: Optional[str] = None

# Skill Models
class SkillBase(BaseModel):
    category: str
    name: str
    level: int = Field(ge=0, le=100)  # 0-100
    description: str

class Skill(SkillBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class SkillCreate(SkillBase):
    pass

class SkillUpdate(BaseModel):
    category: Optional[str] = None
    name: Optional[str] = None
    level: Optional[int] = Field(None, ge=0, le=100)
    description: Optional[str] = None

# Education Models
class EducationBase(BaseModel):
    degree: str
    institution: str
    period: str
    location: str
    description: str

class Education(EducationBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class EducationCreate(EducationBase):
    pass

class EducationUpdate(BaseModel):
    degree: Optional[str] = None
    institution: Optional[str] = None
    period: Optional[str] = None
    location: Optional[str] = None
    description: Optional[str] = None

# Achievement Models
class AchievementBase(BaseModel):
    title: str
    description: str
    year: str
    category: str = "Award"  # "Award", "Recognition", etc.

class Achievement(AchievementBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class AchievementCreate(AchievementBase):
    pass

class AchievementUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    year: Optional[str] = None
    category: Optional[str] = None