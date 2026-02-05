# Contact Form Setup Guide

This portfolio includes a functional contact form that sends emails directly to your inbox using EmailJS.

## Setup Instructions

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

### 2. Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Configure the template settings:
   - **To Email**: Set to your email address (tmsl.aiml.amarpal@gmail.com)
   - **From Name**: {{from_name}}
   - **Reply To**: {{from_email}}
5. Note down your **Template ID**

### 4. Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key

### 5. Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

### 6. Test the Contact Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the test form
4. Check your email inbox for the message

## Important Notes

- **Security**: The `.env` file is gitignored and won't be committed to your repository
- **Deployment**: When deploying to production (Vercel, Netlify, etc.), add these environment variables in your hosting platform's dashboard
- **Rate Limits**: Free EmailJS accounts have a limit of 200 emails/month
- **Spam Protection**: Consider adding a reCAPTCHA if you experience spam

## Troubleshooting

### Emails not sending?

1. Check browser console for errors
2. Verify your EmailJS credentials are correct
3. Ensure your email service is properly connected in EmailJS dashboard
4. Check EmailJS dashboard logs for failed attempts

### Environment variables not loading?

1. Make sure your `.env` file is in the project root
2. Restart your development server after adding/changing environment variables
3. Ensure variable names start with `VITE_` (required for Vite)

## Alternative: Using Web3Forms (Optional)

If you prefer not to use EmailJS, you can switch to Web3Forms:

1. Visit [Web3Forms](https://web3forms.com/)
2. Sign up and get your access key
3. Update the Contact component to use Web3Forms API

## Support

For issues or questions:
- EmailJS Documentation: https://www.emailjs.com/docs/
- Create an issue in this repository
