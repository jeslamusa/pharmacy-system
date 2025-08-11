# 🚀 Deployment Guide - Pharmacy Management System

This guide will help you deploy both the frontend and backend of your pharmacy management system.

## 📋 Prerequisites

- GitHub account
- Vercel account (for frontend)
- Render/Railway/Heroku account (for backend)
- Node.js installed locally

## 🎯 Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend) - RECOMMENDED
### Option 2: Vercel (Frontend) + Railway (Backend)
### Option 3: Vercel (Frontend) + Heroku (Backend)

---

## 🎨 Frontend Deployment (Vercel)

### Step 1: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository:**
   - Select `jeslamusa/pharmacy-system`
   - Set **Root Directory** to `frontend`
   - Click **Deploy**

### Step 2: Configure Build Settings

Vercel will automatically detect it's a Vite project. The `vercel.json` file is already configured.

### Step 3: Environment Variables (Optional)

Add these in Vercel dashboard:
```
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## ⚙️ Backend Deployment

### Option A: Render (Recommended)

#### Step 1: Deploy to Render

1. **Go to [Render](https://render.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New +" → "Web Service"**
4. **Connect your repository:**
   - Select `jeslamusa/pharmacy-system`
   - Set **Root Directory** to `backend`
   - Set **Build Command:** `npm install`
   - Set **Start Command:** `npm start`
   - Choose **Free** plan

#### Step 2: Environment Variables

Add these in Render dashboard:
```
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
JWT_SECRET=your-super-secret-key-here
```

### Option B: Railway

#### Step 1: Deploy to Railway

1. **Go to [Railway](https://railway.app)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project" → "Deploy from GitHub repo"**
4. **Select your repository** and set root directory to `backend`

#### Step 2: Environment Variables

Add the same environment variables as Render.

### Option C: Heroku

#### Step 1: Deploy to Heroku

1. **Install Heroku CLI**
2. **Login to Heroku:**
   ```bash
   heroku login
   ```
3. **Create Heroku app:**
   ```bash
   cd backend
   heroku create your-pharmacy-api
   ```
4. **Deploy:**
   ```bash
   git add .
   git commit -m "Deploy backend"
   git push heroku main
   ```

---

## 🔗 Connect Frontend to Backend

### Step 1: Update API URL

Once your backend is deployed, update the frontend to use the production API:

1. **In Vercel dashboard**, add environment variable:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

2. **Update frontend API calls** (if needed):
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
   ```

### Step 2: Test the Connection

1. **Visit your frontend URL**
2. **Try logging in** with the test credentials
3. **Check browser console** for any API errors

---

## 🧪 Testing Your Deployment

### Test Credentials

| Role | Username | Password |
|------|----------|----------|
| Administrator | admin | admin123 |
| Manager | manager | manager123 |
| Supervisor | supervisor | supervisor123 |

### Health Check

Visit your backend URL + `/api/health`:
```
https://your-backend-url.onrender.com/api/health
```

You should see:
```json
{
  "status": "OK",
  "message": "Pharmacy Management System API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors:**
   - Make sure `FRONTEND_URL` is set correctly in backend
   - Check that the frontend URL is in the CORS allowed origins

2. **Build Failures:**
   - Check that all dependencies are in `package.json`
   - Verify Node.js version compatibility

3. **Environment Variables:**
   - Ensure all required env vars are set in deployment platform
   - Check for typos in variable names

### Debug Commands

**Backend Health Check:**
```bash
curl https://your-backend-url.onrender.com/api/health
```

**Frontend Build Test:**
```bash
cd frontend
npm run build
```

---

## 📊 Monitoring

### Vercel Analytics
- Built-in analytics in Vercel dashboard
- Performance monitoring
- Error tracking

### Backend Monitoring
- Render: Built-in logs and metrics
- Railway: Real-time logs
- Heroku: Application logs and metrics

---

## 🔄 Continuous Deployment

Both platforms support automatic deployments:
- **Push to main branch** → Automatic deployment
- **Preview deployments** for pull requests
- **Rollback** to previous versions

---

## 🎉 Success!

Once deployed, your pharmacy system will be available at:
- **Frontend:** `https://your-app.vercel.app`
- **Backend:** `https://your-api.onrender.com`

Share these URLs with your team and start using your pharmacy management system! 🚀
