# Salama Den Solutions - Backend API

Backend server for the Salama Den Solutions website.

## Features

- Contact form submission with email notifications
- Auto-reply to customers
- Project gallery API
- Contact information API
- Input validation
- Error handling

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env` file and update with your settings
   - Set up email service (Gmail, SendGrid, etc.)

3. Run the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Contact

- `POST /api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "0712345678",
    "message": "I'm interested in solar installation"
  }
  ```

- `GET /api/contact/info` - Get contact information

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects?category=Solar Energy` - Filter by category
- `GET /api/projects/:id` - Get single project
- `GET /api/projects/meta/categories` - Get all categories

### Health Check

- `GET /api/health` - Server health status

## Email Configuration

For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `.env` file

For SendGrid:
1. Sign up at sendgrid.com
2. Generate API key
3. Update `.env` with SendGrid settings

## Database (Optional)

To store messages in MongoDB:
1. Install MongoDB locally or use MongoDB Atlas
2. Update `MONGODB_URI` in `.env`
3. Uncomment database code in routes

## Deployment

Deploy to:
- Heroku
- Railway
- Render
- DigitalOcean
- AWS

Make sure to set environment variables in your hosting platform.
