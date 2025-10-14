# Email Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Portfolio Contact: {{subject}}

**Body:**
```
Hello Vanshika,

You have received a new message from your portfolio contact form:

Name: {{firstName}} {{lastName}}
Email: {{email}}
Subject: {{subject}}
Budget: {{budget}}
Newsletter Signup: {{newsletter}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

## Step 5: Update Your Code
1. Open `contact.js` file
2. Replace `YOUR_PUBLIC_KEY` with your actual public key
3. Replace `YOUR_SERVICE_ID` with your service ID
4. Replace `YOUR_TEMPLATE_ID` with your template ID

## Step 6: Test Your Form
1. Open your portfolio website
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Alternative: Simple Email Link Method
If you prefer a simpler approach without EmailJS, you can also use a mailto link:

```html
<a href="mailto:your-email@example.com?subject=Portfolio Contact&body=Name: {{name}}%0D%0AEmail: {{email}}%0D%0AMessage: {{message}}" class="btn btn-primary">
    Send Email
</a>
```

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for any errors
- Ensure your email service is properly configured
- Test with a simple message first

## Security Note
- Never expose your private keys in client-side code
- EmailJS handles security by using public keys only
- Consider adding CAPTCHA for additional spam protection
