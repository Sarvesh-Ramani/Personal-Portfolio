# Sarvesh Ramani - Professional Portfolio

A modern, full-stack portfolio website showcasing my journey as a Software Engineer II with expertise in backend development and AI/ML research.

## 🚀 Features

- **Modern Design**: Sleek, minimal design with dark/light mode toggle
- **Full-Stack Architecture**: React frontend + FastAPI backend + MongoDB
- **Responsive**: Perfect experience across all devices
- **Real-time Data**: Dynamic content loaded from backend APIs
- **Professional**: Showcases experience, skills, projects, and achievements

## 🛠 Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Shadcn/ui Components
- Framer Motion (animations)
- Axios (API calls)

### Backend
- FastAPI (Python)
- MongoDB (Database)
- Pydantic (Data validation)
- Motor (Async MongoDB)

### Deployment
- Docker & Docker Compose
- Vercel (Frontend + Serverless Functions)
- Netlify (Alternative frontend hosting)
- Railway/Render (Backend hosting)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- MongoDB (local or cloud)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sarveshramani/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   # Backend
   cp .env.example backend/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   ```

4. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

5. **Seed the database**
   ```bash
   npm run seed
   ```

6. **Start development servers**
   ```bash
   npm run dev
   ```

   This starts both frontend (http://localhost:3000) and backend (http://localhost:8001)

## 📦 Deployment Options

### Option 1: Vercel (Recommended for Full-Stack)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repo to Vercel
   - Set environment variables in Vercel dashboard:
     - `MONGO_URL`: Your MongoDB connection string
     - `DB_NAME`: Your database name
   - Deploy automatically

### Option 2: Netlify (Frontend) + Railway (Backend)

1. **Deploy Frontend to Netlify**
   - Connect GitHub repo to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `frontend/build`
   - Update `REACT_APP_BACKEND_URL` to your backend URL

2. **Deploy Backend to Railway**
   - Connect GitHub repo to Railway
   - Set environment variables
   - Railway will auto-deploy your FastAPI backend

### Option 3: Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8001

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
MONGO_URL=mongodb://localhost:27017/portfolio_db
DB_NAME=portfolio_db
```

**Frontend (.env)**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Production Configuration

Update the following for production:

1. **MongoDB**: Use MongoDB Atlas or other cloud database
2. **Backend URL**: Update `REACT_APP_BACKEND_URL` to your deployed backend
3. **CORS**: Update allowed origins in `backend/server.py`

## 📁 Project Structure

```
portfolio/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── hooks/          # Custom hooks
│   ├── public/             # Static files
│   └── build/              # Production build
├── backend/                 # FastAPI application
│   ├── server.py           # Main application
│   ├── models.py           # Data models
│   ├── database.py         # Database connection
│   └── seed_data.py        # Database seeding
├── docker-compose.yml      # Docker configuration
├── Dockerfile             # Production Docker image
└── README.md              # This file
```

## 🎯 Key Pages

- **Home**: Hero section with professional introduction
- **About**: Personal story and journey
- **Skills**: Technical expertise and certifications
- **Experience**: Professional work history
- **Projects**: Featured and upcoming projects
- **Contact**: Professional contact information

## 🔄 API Endpoints

- `GET /api/personal-info` - Personal information
- `GET /api/experience` - Work experience
- `GET /api/projects` - All projects
- `GET /api/projects/featured` - Featured projects
- `GET /api/skills` - Technical skills
- `GET /api/education` - Education history
- `GET /api/achievements` - Awards and recognition

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this code for your own portfolio!

## 📞 Contact

**Sarvesh Ramani**  
Software Engineer II  
📧 sarveshramani1004@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/sarvesh-ramani)  
📍 Chennai, Tamil Nadu, India

---

*Built with ❤️ using React, FastAPI, and MongoDB*