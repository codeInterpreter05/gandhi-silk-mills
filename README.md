# Gandhi Silk Mills - Business Website

A complete, production-ready static business website for Gandhi Silk Mills - a premium textile manufacturer and supplier based in Mumbai, India.

## 📋 Project Overview

This is a modern, responsive static website built with pure HTML5, CSS3, and Vanilla JavaScript. No frameworks, libraries, or backend dependencies required.

**Business Details:**

- **Name:** Gandhi Silk Mills
- **Founded:** 2008
- **Founder:** Kalpesh Gandhi
- **Type:** Textile Manufacturer & Supplier (B2B)
- **Location:** Mumbai, India

## 🚀 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation with smooth scrolling
- ✅ Elegant textile/fashion theme
- ✅ Product showcase (Raw Fabrics & Ready-Made Products)
- ✅ Image gallery with lightbox functionality
- ✅ Video section with responsive player
- ✅ Contact section with Google Maps integration
- ✅ SEO-friendly structure
- ✅ Accessible design (ARIA labels, alt tags)
- ✅ Fast loading and optimized code

## 📁 Project Structure

```
gandhi-silk-mills/
│
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── assets/
    ├── images/         # Product images (add your images here)
    └── video/          # Promotional video (add video here)
```

## 🎨 Design Theme

- **Colors:** Neutral palette with gold accents

  - Primary Gold: #d4af37
  - Dark Gray: #2c2c2c
  - Light Beige: #f5f5f0
  - White: #ffffff

- **Typography:** Clean, modern sans-serif fonts
- **Layout:** Spacious, elegant, professional

## 📦 Setup Instructions

### 1. Add Your Media Files

#### Images

- Place all product images in the `assets/images/` folder
- Supported formats: JPG, PNG, WebP
- Recommended size: 800x800px or larger (square format works best for gallery)
- The gallery will automatically load images from this folder

#### Video

- Place your promotional video in `assets/video/` folder
- Name it: `promo-video.mp4`
- Optional: Also add `promo-video.webm` for better browser compatibility
- Recommended: MP4 format, max 10MB for fast loading

### 2. Update Gallery Images

The gallery section will automatically display images. To add images:

**Option A: Manual HTML (Recommended for static sites)**
Edit `index.html` and add images in the gallery section:

```html
<div class="gallery-grid" id="gallery-grid">
  <div class="gallery-item">
    <img src="assets/images/product1.jpg" alt="Product 1" />
  </div>
  <div class="gallery-item">
    <img src="assets/images/product2.jpg" alt="Product 2" />
  </div>
  <!-- Add more images as needed -->
</div>
```

**Option B: Use JavaScript**
You can use the `addGalleryImage()` function in `script.js` to programmatically add images.

### 3. Update Google Maps Embed

The contact section includes a Google Maps iframe. To update it with the correct location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: "13/6, Ramwadi, Station Road, Tagor Nagar, Vikhroli East, Mumbai – 400083"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in the contact section of `index.html`

### 4. Customize Content (Optional)

- Update business information in `index.html`
- Modify colors in CSS variables at the top of `style.css`
- Adjust spacing, fonts, or layouts as needed

## 🌐 Deployment

This website can be deployed to any static hosting service:

### Netlify

1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop the project folder
3. Your site will be live instantly!

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

### GitHub Pages

1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Select main branch as source

### Traditional Web Hosting

1. Upload all files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### Technologies Used

- **HTML5:** Semantic markup
- **CSS3:** Modern features (Grid, Flexbox, CSS Variables)
- **Vanilla JavaScript:** ES6+ features
- **No Dependencies:** Zero external libraries

### Performance

- Optimized images (lazy loading support)
- Minimal JavaScript
- CSS-only animations where possible
- Fast page load times

### Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Alt text for images
- Keyboard navigation support
- High contrast ratios

## 📞 Contact Information

**Gandhi Silk Mills**

- **Address:** 13/6, Ramwadi, Station Road, Tagor Nagar, Vikhroli East, Mumbai – 400083
- **Phone:** 9324559330 | 9833073507 | 8976126720
- **Email:** gandhisilkmills3@gmail.com

## 📝 License

This website is proprietary and created for Gandhi Silk Mills.

## 🛠️ Maintenance

### Adding New Products

Edit the Products section in `index.html` and add new product cards following the existing structure.

### Updating Images

Simply replace images in `assets/images/` folder with the same filenames, or update the HTML with new image paths.

### Changing Colors

Modify CSS variables in `style.css` at the `:root` selector.

## 📧 Support

For website updates or modifications, contact your web developer.

---

**Built with ❤️ for Gandhi Silk Mills**

_Last Updated: 2024_
