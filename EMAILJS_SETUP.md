# EmailJS Setup Instructions

To enable the contact form functionality, you need to set up EmailJS. Follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add an Email Service

1. Go to the Email Services page in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down your **Service ID**

## 3. Create an Email Template

1. Go to the Email Templates page
2. Click "Create New Template"
3. Use these template variables in your email template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (recipient)
4. Save the template and note down your **Template ID**

## 4. Get Your Public Key

1. Go to Account → General
2. Find your **Public Key** (it looks like a string of random characters)

## 5. Update the Contact Form

Open `src/pages/Contact.tsx` and replace these values:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: 'Your Name',  // Replace with your name
  },
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

## Example Template

Here's an example email template you can use:

**Subject:** New Contact Form Submission: {{subject}}

**Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio website.

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

## Testing

After updating the configuration:
1. Go to the Contact page
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox for the message

## Troubleshooting

- Make sure all IDs and keys are correctly copied
- Check your EmailJS dashboard for usage limits (free tier has 200 emails/month)
- Verify your email service is properly connected
- Check browser console for any error messages
