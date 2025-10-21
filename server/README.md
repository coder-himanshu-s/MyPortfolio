# Portfolio Email Backend

This backend server handles contact form submissions from your portfolio website and sends emails using Gmail.

## Features

- ✅ Contact form email delivery
- ✅ Automatic confirmation emails to senders
- ✅ Professional HTML email templates
- ✅ Input validation and error handling
- ✅ CORS enabled for frontend integration

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to **Security** > **2-Step Verification** > **App passwords**
4. Generate a new app password for "Mail"
5. Copy the generated password

### 3. Environment Configuration

Create a `.env` file in the server directory:

```bash
# Copy the example file
cp env.example .env
```

Edit the `.env` file with your credentials:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
EMAIL_USER=hs01042004@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

**Important:** Replace `your_gmail_app_password_here` with the actual app password you generated.

### 4. Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

### 5. Test the Setup

Visit `http://localhost:5000/api/health` to verify the server is running.

## API Endpoints

### POST `/api/contact`
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! You will receive a confirmation email shortly."
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Email Features

### For You (Portfolio Owner)
- Receives formatted emails with sender details
- Professional HTML template
- Reply-to field set to sender's email
- Timestamp and contact information included

### For Visitors
- Receives automatic confirmation email
- Professional thank you message
- Your contact details included
- Reassurance about response time

## Security Notes

- Never commit `.env` file to version control
- Use Gmail App Passwords (not your regular password)
- CORS is configured for your frontend domain
- Input validation prevents malicious submissions

## Troubleshooting

### Common Issues

1. **"Authentication failed" error**
   - Verify your Gmail app password is correct
   - Ensure 2-Factor Authentication is enabled
   - Check that EMAIL_USER matches your Gmail address

2. **CORS errors**
   - Update FRONTEND_URL in `.env` to match your frontend URL
   - Ensure the frontend is making requests to the correct backend URL

3. **Email not sending**
   - Check Gmail's "Less secure app access" settings
   - Verify the app password is valid
   - Check server logs for detailed error messages

### Development vs Production

For production deployment:
- Update FRONTEND_URL to your production domain
- Use environment variables for sensitive data
- Consider using a dedicated email service (SendGrid, Mailgun, etc.)
- Set up proper logging and monitoring
