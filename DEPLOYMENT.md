# Deployment Guide - Salama Den Solutions

## Backend Deployment

### Option 1: Render (Recommended - Free)

1. Push your backend code to GitHub
2. Go to [render.com](https://render.com) and sign up
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: salama-den-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
6. Add environment variables:
   ```
   PORT=5000
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_FROM=noreply@salamaden.org
   EMAIL_TO=info@salamaden.org
   ```
7. Click "Create Web Service"
8. Your API will be live at: `https://salama-den-backend.onrender.com`

### Option 2: Railway

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Connect your repository
5. Add environment variables
6. Deploy!

### Option 3: Heroku

```bash
# Install Heroku CLI
heroku login

# Create app
heroku create salama-den-backend

# Set environment variables
heroku config:set EMAIL_HOST=smtp.gmail.com
heroku config:set EMAIL_PORT=587
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set EMAIL_FROM=noreply@salamaden.org
heroku config:set EMAIL_TO=info@salamaden.org

# Deploy
git push heroku main
```

## Frontend Update

After deploying backend, update `script.js`:

```javascript
// Change this line:
const API_URL = 'http://localhost:5000/api';

// To your deployed URL:
const API_URL = 'https://salama-den-backend.onrender.com/api';
```

Then commit and push to GitHub Pages.

## Email Setup (Gmail)

1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"
5. Use this password in your `.env` file

## Testing Backend Locally

```bash
# Terminal 1 - Start backend
cd backend
npm start

# Terminal 2 - Start frontend
cd ..
python3 -m http.server 8000

# Open browser: http://localhost:8000
```

## API Endpoints

After deployment, your API will have:

- `GET /api/health` - Check if server is running
- `POST /api/contact` - Submit contact form
- `GET /api/contact/info` - Get contact information
- `GET /api/projects` - Get all projects

## Custom Domain (Optional)

To use `www.salamadensolution.com`:

1. Purchase domain from Namecheap/GoDaddy
2. For frontend (GitHub Pages):
   - Add `CNAME` file with your domain
   - Configure DNS: CNAME → opiyo-cyber.github.io
3. For backend:
   - Add custom domain in Render/Railway
   - Configure DNS: CNAME → your-backend.onrender.com

## Security Notes

- Never commit `.env` file to GitHub
- Use environment variables for all secrets
- Enable HTTPS (automatic on Render/Railway)
- Consider rate limiting for production
