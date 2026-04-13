# Media AlaCarte Landing Page

## 📌 Project Overview

This project is a modern **landing page and marketing website** built using Angular.
The goal was to recreate the provided design while enhancing the UI, improving performance, and ensuring a high-quality user experience.

The project is designed to be scalable, as it will be extended with more features in the future.

---

## 🚀 Tech Stack

* Angular 20 (Standalone Components)
* TailwindCSS
* GSAP (Animations)
* TypeScript

---

## 🎨 Design Approach

* Created a custom `DESIGN.md` to define the design system
* Followed the provided design images as the main reference
* Enhanced the UI to make it more modern and polished
* Built reusable styles in `styles.css` for consistency

---

## ✨ Features

* Fully responsive layout
* Reusable component structure
* Custom CSS backgrounds using `::before` and `::after`
* Smooth animations with GSAP
* Optimized images and fonts
* Improved SEO and accessibility

---

## 🎞️ Animations

* Scroll-based animations
* Stagger effects for cards
* Hover interactions
* Performance-aware animation handling

---

## ⚠️ Challenges & Solutions

### Performance Optimization

* Improved performance:

  * Desktop: **78% → 99%**
  * Mobile: **60% → 95%**
* Disabled heavy animations on smaller screens
* Optimized GSAP execution timing

---

### Image Optimization

* Converted all images to **WebP**
* Compressed assets
* Used different hero images for mobile and desktop

---

### Font Optimization

* Downloaded fonts locally
* Converted to **woff2**
* Merged into a single optimized font file
* Used one `@font-face`

---

### Animations & LCP

* Reduced animation impact on LCP
* Disabled hero animations on mobile
* Ensured non-blocking rendering

---

### Working Without Figma

* Recreated design from images only
* Built custom design system (`DESIGN.md`)
* Maintained consistent spacing and layout

---

## 📱 Responsive Strategy

* Mobile-first approach using Tailwind
* Optimized layout per screen size
* Reduced animations on mobile for performance

---

## 🧱 Project Structure

* Feature-based architecture
* Reusable components
* Shared styling system

---

## ▶️ How to Run

```bash
npm install
ng serve
```

---

## 🛠️ Angular CLI (Default Commands)

### Generate Components

```bash
ng generate component component-name
```

### Build Project

```bash
ng build
```

### Run Tests

```bash
ng test
```

---

## 🌐 Live Demo

(Add your deployed link here)

---

## 📎 Notes

* Focused on performance, UX, and clean UI
* Built as a scalable foundation for future features
* Designed to match modern SaaS landing pages
