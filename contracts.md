# Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for converting the mock-based portfolio frontend into a full-stack application with FastAPI backend and MongoDB database.

## Current Mock Data Location
- **File**: `/app/frontend/src/mock.js`
- **Data Types**: Personal info, experience, projects, skills, achievements, navigation

## Database Schema

### 1. Personal Information Collection
```javascript
personalInfo: {
  _id: ObjectId,
  name: String,
  title: String,
  email: String,
  phone: String,
  linkedin: String,
  location: String,
  profileImage: String,
  summary: String,
  tagline: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Experience Collection
```javascript
experience: {
  _id: ObjectId,
  company: String,
  role: String,
  period: String,
  location: String,
  type: String,
  description: String,
  achievements: [String],
  technologies: [String],
  isCurrentJob: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. Projects Collection
```javascript
projects: {
  _id: ObjectId,
  title: String,
  description: String,
  technologies: [String],
  category: String,
  highlights: [String],
  status: String, // "Completed", "In Progress", "Planned"
  type: String, // "Enterprise", "Personal", "Research"
  isFeatured: Boolean,
  githubUrl: String (optional),
  demoUrl: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

### 4. Skills Collection
```javascript
skills: {
  _id: ObjectId,
  category: String, // "Programming Languages", "Frameworks", etc.
  name: String,
  level: Number, // 0-100
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 5. Education Collection
```javascript
education: {
  _id: ObjectId,
  degree: String,
  institution: String,
  period: String,
  location: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 6. Achievements Collection
```javascript
achievements: {
  _id: ObjectId,
  title: String,
  description: String,
  year: String,
  category: String, // "Award", "Recognition", etc.
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Personal Information
- `GET /api/personal-info` - Get personal information
- `PUT /api/personal-info` - Update personal information

### Experience
- `GET /api/experience` - Get all work experience
- `POST /api/experience` - Add new experience
- `PUT /api/experience/{id}` - Update experience
- `DELETE /api/experience/{id}` - Delete experience

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects only
- `POST /api/projects` - Add new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

### Skills
- `GET /api/skills` - Get all skills grouped by category
- `POST /api/skills` - Add new skill
- `PUT /api/skills/{id}` - Update skill
- `DELETE /api/skills/{id}` - Delete skill

### Education
- `GET /api/education` - Get education history
- `POST /api/education` - Add education
- `PUT /api/education/{id}` - Update education
- `DELETE /api/education/{id}` - Delete education

### Achievements
- `GET /api/achievements` - Get all achievements
- `POST /api/achievements` - Add new achievement
- `PUT /api/achievements/{id}` - Update achievement
- `DELETE /api/achievements/{id}` - Delete achievement

## Frontend Integration Plan

### 1. Create API Service Layer
- **File**: `/app/frontend/src/services/api.js`
- **Purpose**: Centralized API calls to backend
- **Methods**: GET, POST, PUT, DELETE operations for each entity

### 2. Update Components
- Remove mock imports from components
- Replace mock data with API calls
- Add loading states and error handling
- Implement data fetching in useEffect hooks

### 3. State Management
- Use React state for data management
- Implement loading and error states
- Add data refresh capabilities

### 4. Error Handling
- Toast notifications for API errors
- Graceful degradation for failed requests
- Retry mechanisms for critical data

## Data Migration Strategy

### Phase 1: Initial Data Seeding
1. Create database seeding script
2. Populate collections with current mock data
3. Verify data integrity

### Phase 2: Frontend Integration
1. Implement API service layer
2. Update components to use API calls
3. Test all CRUD operations

### Phase 3: Testing & Validation
1. Test all API endpoints
2. Verify frontend integration
3. Performance testing

## Environment Variables
```bash
# Backend (.env)
MONGO_URL=mongodb://localhost:27017/portfolio
DB_NAME=portfolio_db

# Frontend (.env)
REACT_APP_BACKEND_URL=http://localhost:8001
```

## Implementation Order
1. Backend models and database setup
2. API endpoints implementation
3. Data seeding
4. Frontend API service layer
5. Component integration
6. Testing and debugging

## Success Criteria
- All mock data successfully migrated to database
- All pages load data from backend APIs
- CRUD operations work correctly
- Error handling is implemented
- Performance is maintained
- Dark/light mode functionality preserved