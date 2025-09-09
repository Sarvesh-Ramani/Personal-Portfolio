#!/usr/bin/env python3
"""
Database seeding script to populate the portfolio database with initial data
"""
import asyncio
from datetime import datetime
from database import (
    personal_info_collection,
    experience_collection,
    projects_collection,
    skills_collection,
    education_collection,
    achievements_collection,
    close_database_connection
)
from models import (
    PersonalInfo, Experience, Project, Skill, Education, Achievement
)

# Mock data to seed
PERSONAL_INFO = {
    "name": "Sarvesh Ramani",
    "title": "Backend Developer",
    "email": "sarveshramani1004@gmail.com",
    "phone": "+91 8939072479",
    "linkedin": "https://www.linkedin.com/in/sarvesh-ramani",
    "location": "India",
    "profileImage": "https://customer-assets.emergentagent.com/job_f1a148eb-73ec-41da-affa-5da4b24be52c/artifacts/utsgf50g_1728362780929.jpg",
    "summary": "Backend Developer with 1.5+ years of experience designing scalable microservices using Java, Spring Boot, and MongoDB. Adept at developing secure REST APIs, debugging production issues, and delivering enterprise-level custom enhancements.",
    "tagline": "Passionate about creating enterprise-level solutions that drive business value."
}

EXPERIENCE_DATA = {
    "company": "AppViewX",
    "role": "Backend Developer",
    "period": "2023 - Present",
    "location": "India",
    "type": "Full-time",
    "description": "Transitioned from core product development (SIGN+) to a SWAT engineering role resolving critical issues and improving client retention.",
    "achievements": [
        "Developed secure REST APIs and modular backend components for SIGN+, enabling seamless digital signing workflows with identity providers and PKI systems",
        "Resolved 50+ critical production issues as part of the SWAT team, with <24h turnaround and detailed root cause analysis",
        "Delivered customer-specific enhancements and configuration fixes across AppViewX modules, improving satisfaction and retention",
        "Collaborated directly with enterprise clients to gather feature requirements and implement tailored solutions",
        "Designed and implemented microservices architecture for improved scalability and maintainability",
        "Optimized database queries and improved system performance by 30%"
    ],
    "technologies": ["Java", "Spring Boot", "MongoDB", "REST APIs", "Microservices", "PKI", "Docker", "Kubernetes"],
    "isCurrentJob": True
}

PROJECTS_DATA = [
    {
        "title": "GravitySpy Glitch Classification",
        "description": "Designed and trained a deep learning model to classify various types of gravitational wave glitches using CNNs, improving recognition accuracy and aiding LIGO data analysis.",
        "technologies": ["Python", "TensorFlow", "Scikit-learn", "CNN", "Data Analysis"],
        "category": "Machine Learning",
        "highlights": [
            "Achieved 95%+ accuracy in glitch classification",
            "Processed large-scale LIGO dataset",
            "Implemented custom CNN architecture",
            "Improved data analysis pipeline efficiency"
        ],
        "status": "Completed",
        "type": "Research Project",
        "isFeatured": True
    },
    {
        "title": "Cert V2X",
        "description": "Built a backend service for issuing and managing certificates used in Vehicle-to-Everything (V2X) communications, integrating secure signing with PKI protocols.",
        "technologies": ["Java", "Spring Boot", "PKI", "Security", "V2X Protocol"],
        "category": "Backend Development",
        "highlights": [
            "Implemented secure certificate management",
            "Integrated PKI protocols for V2X communication",
            "Built RESTful APIs for certificate operations",
            "Ensured compliance with automotive security standards"
        ],
        "status": "Completed",
        "type": "Enterprise Project",
        "isFeatured": True
    },
    {
        "title": "E-Commerce Microservices Platform",
        "description": "A scalable microservices-based e-commerce platform with user management, product catalog, and order processing services.",
        "technologies": ["Java", "Spring Boot", "MongoDB", "Docker", "Kubernetes"],
        "category": "Backend Development",
        "highlights": [],
        "status": "In Planning",
        "type": "Personal Project",
        "isFeatured": False
    },
    {
        "title": "Real-time Chat Application",
        "description": "A real-time messaging application with WebSocket support, user authentication, and message history.",
        "technologies": ["Node.js", "Socket.io", "MongoDB", "React", "JWT"],
        "category": "Full Stack",
        "highlights": [],
        "status": "Coming Soon",
        "type": "Personal Project",
        "isFeatured": False
    },
    {
        "title": "AI-Powered Log Analysis Tool",
        "description": "An intelligent log analysis tool that uses machine learning to detect anomalies and predict system failures.",
        "technologies": ["Python", "TensorFlow", "ElasticSearch", "Kafka", "Docker"],
        "category": "AI/ML",
        "highlights": [],
        "status": "Concept",
        "type": "Research Project",
        "isFeatured": False
    }
]

SKILLS_DATA = [
    # Programming Languages
    {"category": "Programming Languages", "name": "Java", "level": 90, "description": "Primary language for backend development"},
    {"category": "Programming Languages", "name": "Python", "level": 75, "description": "Used for AI/ML projects and scripting"},
    {"category": "Programming Languages", "name": "JavaScript", "level": 70, "description": "Frontend and Node.js development"},
    
    # Frameworks & Technologies
    {"category": "Frameworks & Technologies", "name": "Spring Boot", "level": 90, "description": "Expert in building microservices"},
    {"category": "Frameworks & Technologies", "name": "TensorFlow", "level": 70, "description": "Machine learning model development"},
    {"category": "Frameworks & Technologies", "name": "Scikit-learn", "level": 75, "description": "Data science and ML algorithms"},
    
    # Databases
    {"category": "Databases", "name": "MongoDB", "level": 85, "description": "NoSQL database design and optimization"},
    {"category": "Databases", "name": "SQL", "level": 75, "description": "Relational database management"},
    
    # DevOps & Tools
    {"category": "DevOps & Tools", "name": "Docker", "level": 80, "description": "Containerization and deployment"},
    {"category": "DevOps & Tools", "name": "Kubernetes", "level": 70, "description": "Container orchestration"},
    {"category": "DevOps & Tools", "name": "Git", "level": 85, "description": "Version control and collaboration"},
    
    # Core Concepts
    {"category": "Core Concepts", "name": "Microservices", "level": 90, "description": "Architecture design and implementation"},
    {"category": "Core Concepts", "name": "REST APIs", "level": 95, "description": "API design and development"},
    {"category": "Core Concepts", "name": "PKI", "level": 80, "description": "Public Key Infrastructure and security"},
    {"category": "Core Concepts", "name": "AI/ML", "level": 70, "description": "Machine learning and data science"}
]

EDUCATION_DATA = {
    "degree": "B.E Mechanical Engineering",
    "institution": "Coimbatore Institute of Technology",
    "period": "June 2019 - May 2023",
    "location": "Coimbatore, India",
    "description": "Graduated with a strong foundation in engineering principles, problem-solving, and analytical thinking."
}

ACHIEVEMENTS_DATA = [
    {
        "title": "SPOT Award (2023)",
        "description": "Awarded the quarterly SPOT award for consistently resolving customer issues and ensuring timely delivery.",
        "year": "2023",
        "category": "Award"
    },
    {
        "title": "Excellence Award (2023-24)",
        "description": "Received the Certificate of Excellence for consistent delivery and continuous efforts on delivering the best output.",
        "year": "2023-24",
        "category": "Award"
    }
]

async def seed_database():
    """Seed the database with initial data"""
    print("🌱 Starting database seeding...")
    
    try:
        # Clear existing data
        print("🗑️  Clearing existing data...")
        await personal_info_collection.delete_many({})
        await experience_collection.delete_many({})
        await projects_collection.delete_many({})
        await skills_collection.delete_many({})
        await education_collection.delete_many({})
        await achievements_collection.delete_many({})
        
        # Seed Personal Info
        print("👤 Seeding personal information...")
        personal_info = PersonalInfo(**PERSONAL_INFO)
        await personal_info_collection.insert_one(personal_info.dict())
        
        # Seed Experience
        print("💼 Seeding experience data...")
        experience = Experience(**EXPERIENCE_DATA)
        await experience_collection.insert_one(experience.dict())
        
        # Seed Projects
        print("🚀 Seeding projects data...")
        for project_data in PROJECTS_DATA:
            project = Project(**project_data)
            await projects_collection.insert_one(project.dict())
        
        # Seed Skills
        print("🛠️  Seeding skills data...")
        for skill_data in SKILLS_DATA:
            skill = Skill(**skill_data)
            await skills_collection.insert_one(skill.dict())
        
        # Seed Education
        print("🎓 Seeding education data...")
        education = Education(**EDUCATION_DATA)
        await education_collection.insert_one(education.dict())
        
        # Seed Achievements
        print("🏆 Seeding achievements data...")
        for achievement_data in ACHIEVEMENTS_DATA:
            achievement = Achievement(**achievement_data)
            await achievements_collection.insert_one(achievement.dict())
        
        print("✅ Database seeding completed successfully!")
        
        # Print summary
        personal_count = await personal_info_collection.count_documents({})
        experience_count = await experience_collection.count_documents({})
        projects_count = await projects_collection.count_documents({})
        skills_count = await skills_collection.count_documents({})
        education_count = await education_collection.count_documents({})
        achievements_count = await achievements_collection.count_documents({})
        
        print(f"""
📊 Seeding Summary:
   • Personal Info: {personal_count} record
   • Experience: {experience_count} record
   • Projects: {projects_count} records
   • Skills: {skills_count} records
   • Education: {education_count} record
   • Achievements: {achievements_count} records
        """)
        
    except Exception as e:
        print(f"❌ Error seeding database: {str(e)}")
        raise
    finally:
        await close_database_connection()

if __name__ == "__main__":
    asyncio.run(seed_database())