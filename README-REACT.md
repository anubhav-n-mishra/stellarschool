# Stellar Public School — React Application

A professional, responsive school landing page built with React and Vite. Features include accessible carousel, form validation, newsletter modal, and printable brochure.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Site header with mobile nav
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # Why families trust section
│   ├── Programs.jsx       # Programs & curriculum
│   ├── Admissions.jsx     # Admissions form with counters
│   ├── Testimonials.jsx   # Accessible carousel
│   ├── FAQ.jsx            # FAQ section
│   ├── Footer.jsx         # Footer with subscribe
│   └── Modal.jsx          # Newsletter modal
├── pages/
│   ├── Home.jsx           # Main landing page
│   └── Brochure.jsx       # Printable brochure
├── App.jsx                # Router setup
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## Getting Started

### Installation

```powershell
# Install dependencies
npm install
```

### Development

```powershell
# Start dev server (runs on http://localhost:3000)
npm run dev
```

### Build for Production

```powershell
# Create production build
npm run build

# Preview production build
npm run preview
```

## Features

- **Accessible Carousel**: Keyboard controls (Arrow keys, Home, End), ARIA announcements, auto-rotation with pause on hover
- **Form Validation**: Indian phone number validation, controlled components
- **Newsletter Modal**: Delayed modal (9s) with localStorage persistence
- **Responsive Design**: Mobile-first, works across all screen sizes
- **Brochure Page**: Multi-page printable brochure with "Save as PDF" button
- **Smooth Scroll**: Anchor link navigation with smooth scrolling
- **Animated Counters**: Intersection Observer triggers count animations

## Technology Stack

- React 18.3
- Vite 5.4
- React Router 6.26

## Notes

- Original HTML/CSS/JS version is preserved in the root folder (`index.html`, `assets/`)
- The React version uses the same design and functionality
- All interactive features (carousel, forms, modal) are now component-based with React hooks
- Brochure is accessible at `/brochure` route

## Recommended Next Steps

- Add backend API integration for form submissions
- Implement analytics (GA4 or similar)
- Add i18n support (English + Hindi)
- Replace placeholder images with real campus photos
- Add tests (Vitest + React Testing Library)
- Deploy to Vercel/Netlify/Cloudflare Pages

## License

© Stellar Public School. All rights reserved.
