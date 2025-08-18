# Deployment Guide - Pharmacy Management System

This guide will help you deploy both the frontend and backend of the Pharmacy Management System with proper image handling.

## 🚀 Quick Deployment Options

### Option 1: Render.com (Recommended for Backend)
### Option 2: Railway.app
### Option 3: Heroku
### Option 4: DigitalOcean App Platform

---

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Cloudinary Account** - For image storage (free tier available)
3. **Vercel Account** - For frontend deployment (free tier available)

---

## 🖼️ Image Storage Setup (Cloudinary)

1. **Sign up for Cloudinary** (https://cloudinary.com)
2. **Get your credentials:**
   - Cloud Name
   - API Key
   - API Secret
3. **Note these down** - you'll need them for backend deployment

---

## 🔧 Backend Deployment (Render.com)

### Step 1: Prepare Backend
1. Ensure your backend code is in the `backend/` folder
2. Make sure `package.json` has all dependencies
3. Verify `Procfile` exists with: `web: npm start`

### Step 2: Deploy to Render
1. **Go to Render.com** and sign up/login
2. **Click "New +"** → **"Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name:** `pharmacy-backend`
   - **Root Directory:** `backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

### Step 3: Environment Variables
Add these environment variables in Render dashboard:

```env
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://your-frontend-domain.vercel.app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Step 4: Deploy
1. Click **"Create Web Service"**
2. Wait for deployment to complete
3. **Copy the URL** (e.g., `https://pharmacy-backend.onrender.com`)

---

## 🎨 Frontend Deployment (Vercel)

### Step 1: Update API URL
1. In your frontend code, update the API base URL to your backend URL
2. Update `vercel.json` if needed

### Step 2: Deploy to Vercel
1. **Go to Vercel.com** and sign up/login
2. **Import your GitHub repository**
3. **Configure:**
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### Step 3: Environment Variables
Add in Vercel dashboard:
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait for deployment
3. **Copy the frontend URL**

---

## 🔄 Update Backend with Frontend URL

1. Go back to Render dashboard
2. Update `FRONTEND_URL` environment variable with your Vercel frontend URL
3. Redeploy the backend

---

## 🧪 Testing Image Upload

### Test Backend API
```bash
# Health check
curl https://your-backend-url.onrender.com/api/health

# Upload image (using Postman or curl)
curl -X POST \
  -F "image=@test-image.jpg" \
  https://your-backend-url.onrender.com/api/upload

# Get all images
curl https://your-backend-url.onrender.com/api/images
```

### Test Frontend
1. Go to your Vercel frontend URL
2. Navigate to Products page
3. Try uploading an image
4. Check if images display correctly

---

## 🔧 Alternative Deployment Options

### Railway.app
1. Similar to Render.com
2. Good for Node.js apps
3. Free tier available

### Heroku
1. More established platform
2. Requires credit card for free tier
3. Good documentation

### DigitalOcean App Platform
1. More control
2. Pay-as-you-go pricing
3. Good for production apps

---

## 🐛 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Check `FRONTEND_URL` environment variable
   - Ensure it matches your frontend domain exactly

2. **Image Upload Fails**
   - Verify Cloudinary credentials
   - Check file size limits (5MB)
   - Ensure file type is image (jpg, png, gif)

3. **Build Failures**
   - Check `package.json` dependencies
   - Verify Node.js version compatibility
   - Check build logs in deployment platform

4. **Environment Variables**
   - Double-check all environment variables are set
   - Ensure no typos in variable names
   - Redeploy after changing environment variables

### Debug Commands:
```bash
# Check backend health
curl https://your-backend-url/api/health

# Check environment variables
echo $NODE_ENV
echo $CLOUDINARY_CLOUD_NAME

# Check logs in deployment platform dashboard
```

---

## 📞 Support

If you encounter issues:
1. Check the deployment platform logs
2. Verify all environment variables are set
3. Test API endpoints individually
4. Check browser console for frontend errors

---

## 🎉 Success Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Images can be uploaded
- [ ] Images display correctly
- [ ] CORS issues resolved
- [ ] All API endpoints working
- [ ] Environment variables configured
- [ ] Health check endpoint responding

Your Pharmacy Management System should now be fully deployed with image handling capabilities! 🚀

