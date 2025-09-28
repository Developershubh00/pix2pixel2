# Pix2Pixel - Modern Business Website

A modern, responsive website for Pix2Pixel built with React, TypeScript, and Tailwind CSS. Features a clean white design with professional branding and integrated contact forms.

## Features

- **Modern Design**: Clean white background with professional color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Contact Forms**: Integrated EmailJS for contact form submissions
- **WhatsApp Integration**: Direct WhatsApp contact functionality
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Proper meta tags and semantic HTML

## Color Scheme

- **Primary**: #00BCD4 (Light Blue/Cyan)
- **Secondary**: #00E5FF (Turquoise)
- **Accent**: #1A237E (Dark Blue/Navy)
- **Background**: #F5F5F5 (Light Gray)
- **Text**: #424242 (Dark Gray)
- **Gradient**: #673AB7 to #2196F3 (Purple to Blue)

## Setup Instructions

### EmailJS Configuration

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{service}}`
   - `{{message}}`
   - `{{to_email}}`

4. Update the EmailJS configuration in `src/components/QuoteForm.tsx`:
   ```typescript
   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
   
   await emailjs.send(
     'YOUR_SERVICE_ID', // Replace with your service ID
     'YOUR_TEMPLATE_ID', // Replace with your template ID
     templateParams
   );
   ```

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Components

- **Navbar**: Fixed navigation with mobile menu
- **Hero**: Main landing section with call-to-action
- **About**: Company information and statistics
- **Services**: Service offerings grid
- **Process**: How we work timeline
- **OurStory**: Company story section
- **Testimonials**: Client testimonials carousel
- **Contact**: Contact information and quote form
- **Footer**: Site footer with links

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide React Icons
- Vite

## Contact

For any questions or support, contact us at admin@pix2pixel.com or via WhatsApp at +91 9918096894.