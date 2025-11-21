# Contact Form Email Setup Instructions

## Current Status
The contact form is now configured to send emails using **Web3Forms** - a free email service that doesn't require a backend server.

## Setup Steps (Required)

### 1. Get Your Free Web3Forms Access Key

1. Visit: **https://web3forms.com/**
2. Click "Get Started Free"
3. Enter your email: **ersanjayajoshi45@gmail.com**
4. They will send you an **Access Key** to your email
5. Copy the access key

### 2. Add Your Access Key to the Code

Open the file: `components/Contact.tsx`

Find this line (around line 24):
```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
```

Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key from Web3Forms.

Example:
```typescript
access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
```

### 3. Save and Test

1. Save the file
2. Fill out the contact form on your website
3. Click "Send Message"
4. You should receive the email at **ersanjayajoshi45@gmail.com**

## How It Works

- When someone fills out the contact form and clicks "Send Message"
- The form data is sent to Web3Forms API
- Web3Forms forwards the message to your email: **ersanjayajoshi45@gmail.com**
- You'll receive an email with:
  - Sender's name
  - Sender's email (so you can reply)
  - Subject
  - Message

## Features

✅ **Free forever** (up to 250 submissions/month)
✅ **No backend required** - works directly from the browser
✅ **Spam protection** included
✅ **Email notifications** to your Gmail
✅ **Loading state** - button shows "Sending..." while processing
✅ **Error handling** - shows helpful messages if something goes wrong

## Alternative Options

If you prefer a different service, you can also use:
- **EmailJS** (https://www.emailjs.com/)
- **Formspree** (https://formspree.io/)
- **Netlify Forms** (if deploying to Netlify)

## Need Help?

If you have any issues:
1. Make sure you've added the correct access key
2. Check your spam folder for the Web3Forms verification email
3. Test the form and check for any error messages in the browser console (F12)
