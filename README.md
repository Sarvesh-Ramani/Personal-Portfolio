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

## 🚀 Quick Deploy (Fixed Netlify Issues)

### Netlify Deployment (RECOMMENDED)

**Issues Fixed:**
- ✅ Path configuration (`frontend/frontend/build` → `build`)
- ✅ Build command updated with dependency installation  
- ✅ Node.js version specified (18+)
- ✅ Added redundant redirect files

**Step 1: Deploy Backend**
Choose Railway, Render, or Heroku:

**Railway (Easiest):**
1. Go to [Railway.app](https://railway.app)
2. Connect GitHub repo → Deploy
3. Set environment variables:
   - `MONGO_URL=mongodb+srv://...` (your MongoDB Atlas URL)
   - `DB_NAME=portfolio_db`
4. Note your backend URL

**Step 2: Deploy Frontend to Netlify**
1. Go to [Netlify.com](https://netlify.com) → New site from Git
2. Connect GitHub repository
3. **IMPORTANT**: Set environment variable in Netlify:
   - `REACT_APP_BACKEND_URL=https://your-railway-backend-url`
4. Deploy (will auto-use netlify.toml config)

### Alternative: Vercel (Full-Stack)
1. Push to GitHub → Connect to Vercel
2. Set environment variables:
   - `MONGO_URL=mongodb+srv://...`
   - `DB_NAME=portfolio_db`
3. Deploy automatically ✨

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