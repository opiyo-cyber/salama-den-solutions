# Salama Den Solutions Website

Complete website with frontend and backend for Salama Den Solutions - Electrical & Renewable Energy Solutions.

## 🌐 Live Website

- **Frontend**: https://opiyo-cyber.github.io/salama-den-solutions/
- **Repository**: https://github.com/opiyo-cyber/salama-den-solutions

## 📁 Project Structure

```
Salam/
├── index.html          # Main website
├── styles.css          # Styling
├── script.js           # Frontend JavaScript
├── backend/            # Backend API
│   ├── server.js       # Express server
│   ├── routes/         # API routes
│   │   ├── contact.js  # Contact form handler
│   │   └── projects.js # Projects API
│   ├── package.json    # Dependencies
│   └── .env           # Environment variables
├── DEPLOYMENT.md       # Deployment instructions
└── README.md          # This file
```

## ✨ Features

### Frontend
- Responsive design (mobile & desktop)
- Modern UI with animations
- Smooth scrolling navigation
- Contact form with validation
- Service showcase
- Team member profiles
- Core values display

### Backend
- RESTful API with Express.js
- Contact form submission
- Email notifications (company + auto-reply)
- Input validation
- Error handling
- Project gallery API
- Health check endpoint

## 🚀 Quick Start

### Test Locally

1. **Start Backend:**
```bash
cd backend
npm install
npm start
```
Backend runs on: http://localhost:5000

2. **Start Frontend:**
```bash
# In project root
python3 -m http.server 8000
```
Frontend runs on: http://localhost:8000

### Configure Email

Edit `backend/.env`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@salamaden.org
EMAIL_TO=info@salamaden.org
```

## 📡 API Endpoints

- `GET /api/health` - Server status
- `POST /api/contact` - Submit contact form
- `GET /api/contact/info` - Get contact info
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project

## 🌍 Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options:
- **Frontend**: GitHub Pages (already deployed)
- **Backend**: Render, Railway, or Heroku (free)

## 📧 Contact

- **Phone**: 0728 995 929 | 0746 464 066 | 0716 250 355 | 0721 635 875
- **Website**: www.salamaden.org
- **Email**: info@salamaden.org

## 📝 License

© 2024 Salama Den Solutions. All rights reserved.
