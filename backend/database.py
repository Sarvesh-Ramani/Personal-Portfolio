from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
database_name = os.environ.get('DB_NAME', 'portfolio_db')

client = AsyncIOMotorClient(mongo_url)
database = client[database_name]

# Collections
personal_info_collection = database.get_collection("personal_info")
experience_collection = database.get_collection("experience")
projects_collection = database.get_collection("projects")
skills_collection = database.get_collection("skills")
education_collection = database.get_collection("education")
achievements_collection = database.get_collection("achievements")

async def close_database_connection():
    client.close()