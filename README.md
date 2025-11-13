# Stellar Public School — Landing Page (static)

This repository contains a polished, responsive static landing page prototype tailored for the Indian school market. It is designed as a near-production starter with features that help user retention and conversion: clear CTAs, newsletter modal, testimonial carousel, enrollment counters, brochure and accessible forms.

Files created / updated

- `index.html` — the enhanced landing page (structured data, improved header, hero, testimonial carousel, accessible markup)
- `assets/styles.css` — refined styles, polished UI, responsive layout and animations
- `assets/script.js` — improved interactions: carousel, validation, brochure opening and modal handling
- `assets/brochure.html` — printable brochure page (open and save as PDF)

Preview locally

Windows (PowerShell) — quick preview using Python's simple HTTP server:

```powershell
# if you have 'python' in PATH
python -m http.server 8000

# or, if using the Windows 'py' launcher
py -m http.server 8000

# Then open your browser at http://localhost:8000
```

Notes and next steps
Recommended next steps

- Replace placeholder images with real, web-optimized campus photos (JPG/WEBP). Prefer landscape hero images ~1200px wide.
- Hook the admission form to your backend endpoint or a CRM (I can add a sample POST to a serverless function or Firebase).
- Replace `https://example.com` URLs in the JSON-LD with your real domain.
- Add analytics (Google Analytics / GA4 or Matomo) and set up A/B tests for CTA texts and hero variants.
- Perform an accessibility audit and add missing ARIA roles and keyboard flows if needed.
- Add multi-language support (Hindi + English) for wider reach.

If you'd like, I can implement any of the above (form backend, i18n, analytics, or a CMS integration).

If you want, I can:
- connect the form to an API endpoint or Firebase
- create a PDF brochure and host it
- implement multi-language (Hindi + English) support
