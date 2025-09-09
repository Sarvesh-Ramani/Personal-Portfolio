# Deployment Guide for Sarvesh's Portfolio

## 🛠 Fixed Node.js Compatibility Issue

**Latest Issue Resolved:**
- ✅ **Node.js Version**: Updated from Node.js 18 to Node.js 20
- ✅ **React Router DOM v7**: Requires Node.js 20+ (was causing build failures)
- ✅ **Multiple Configs**: Added `.nvmrc` files and updated `netlify.toml`

### Issues Fixed:
1. **Path Error**: Fixed `frontend/frontend/build` to correct `build` path
2. **Build Command**: Updated to include dependency installation
3. **Node Version**: **UPDATED to Node.js 20** (React Router DOM v7 requirement)
4. **Redirects**: Added both netlify.toml and _redirects file for redundancy

## 📋 Deployment Options

### Option 1: Netlify (Frontend Only) - RECOMMENDED

#### Step 1: Deploy Backend First
Choose one of these backend hosting options:

**A. Railway (Recommended)**
1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repository
3. Select "Deploy from GitHub repo"
4. Choose your portfolio repository
5. Set these environment variables:
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `DB_NAME`: `portfolio_db`
6. Railway will auto-detect Python and deploy your FastAPI backend
7. Note your backend URL (e.g., `https://your-app.railway.app`)

**B. Render**
1. Go to [Render.com](https://render.com)
2. Create new "Web Service"
3. Connect GitHub repository
4. Settings:
   - Build Command: `pip install -r backend/requirements.txt`
   - Start Command: `cd backend && python -m uvicorn server:app --host 0.0.0.0 --port $PORT`
   - Environment Variables: Add `MONGO_URL` and `DB_NAME`

**C. Heroku**
1. Install Heroku CLI
2. Create `backend/Procfile`:
   ```
   web: cd backend && python -m uvicorn server:app --host 0.0.0.0 --port $PORT
   ```
3. Deploy:
   ```bash
   heroku create your-portfolio-backend
   git subtree push --prefix backend heroku main
   ```

#### Step 2: Deploy Frontend to Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings (should auto-detect from netlify.toml):
   - Build command: `npm install && npm run build`
   - Publish directory: `frontend/build`
   - Base directory: `frontend`

5. **IMPORTANT**: Set environment variable:
   - Go to Site settings > Environment variables
   - Add: `REACT_APP_BACKEND_URL` = `https://your-backend-url-from-step1`

6. Deploy!

### Option 2: Vercel (Full-Stack) - ALTERNATIVE

1. Push code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Set environment variables:
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `DB_NAME`: `portfolio_db`
5. Deploy automatically - Vercel handles both frontend and backend!

### Option 3: Docker (Self-Hosted)

```bash
# Clone your repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Set up environment variables
cp .env.example .env
cp frontend/.env.example frontend/.env

# Edit .env files with your MongoDB details

# Deploy with Docker
docker-compose up --build -d
```

## 🔧 Environment Variables Needed

### Backend (.env):
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio_db
DB_NAME=portfolio_db
```

### Frontend (.env):
```env
REACT_APP_BACKEND_URL=https://your-backend-domain.com
```

## 🔍 Troubleshooting

### Netlify Build Fails:
1. Check Node.js version (should be 18+)
2. Verify `netlify.toml` paths are correct
3. Check build logs for specific errors
4. Try clearing Netlify cache and redeploying

### Backend API Not Working:
1. Verify MongoDB connection string
2. Check environment variables are set correctly
3. Ensure backend URL in frontend matches deployed backend
4. Check CORS settings in `backend/server.py`

### Database Connection Issues:
1. Whitelist IP addresses in MongoDB Atlas
2. Verify connection string format
3. Check database name matches in both backend and MongoDB

## 📞 Quick Setup Commands

### For Railway Backend:
```bash
# After Railway deployment, get your backend URL
# Update frontend environment variable:
# REACT_APP_BACKEND_URL=https://your-app.railway.app
```

### For Netlify Frontend:
```bash
# Ensure these files exist:
# - netlify.toml (✓ created)
# - frontend/public/_redirects (✓ created)
# - Set REACT_APP_BACKEND_URL in Netlify dashboard
```

## ✅ Success Checklist

- [ ] Backend deployed and accessible
- [ ] MongoDB database connected
- [ ] Frontend deployed to Netlify
- [ ] Environment variables set correctly
- [ ] API calls working between frontend and backend
- [ ] Dark/light mode working
- [ ] All pages loading correctly
- [ ] Mobile responsive design working

Your portfolio should now be live and fully functional! 🎉