# Media AlaCarte Design System

## 1. Visual Theme & Atmosphere

Media AlaCarte is a modern, premium marketing landing experience built on a dark-tech aesthetic with vibrant gradient accents. The design philosophy is "data-driven clarity with visual energy" — combining structured business content with dynamic visuals to communicate efficiency, innovation, and performance.

The interface uses a deep dark background (`#0F0F0F`, `#151515`, `#1A1A1A`) allowing bright accent gradients (pink/red spectrum) to highlight key actions and important information. Unlike content-heavy platforms, this design focuses on **conversion and storytelling** — guiding users through services, trust signals, and calls to action.

Typography is clean and modern using **Montserrat (headings)** and **Inter (body)**. The system relies on strong contrast:
- 700 (bold) for headings and numbers
- 500–600 for subheadings
- 400 for body text

Rounded geometry is consistent across components:
- Cards: 12px–16px radius
- Buttons: 999px (pill)
- Sections: soft rounded containers

Subtle shadows and glow effects are used to create depth without overwhelming the dark UI.

**Key Characteristics:**
- Dark modern UI (`#0F0F0F`–`#1A1A1A`)
- Vibrant pink/red gradient accents (`#df256e → #ed4550`)
- Clean typography (Montserrat + Inter)
- Rounded UI (12px–999px radius)
- Soft glow & gradient overlays
- Conversion-focused layout (CTA-driven)
- Smooth animations (GSAP-based)

---

## 2. Color Palette & Roles

### Primary Brand
- **Primary Pink** (`#df256e`): Main CTA, buttons, highlights
- **Accent Pink** (`#ed4550`): Gradient secondary
- **Gradient**: `linear-gradient(135deg, #df256e, #ed4550)`

### Backgrounds
- **Deep Black** (`#0F0F0F`): Main background
- **Dark Surface** (`#151515`): Sections
- **Card Background** (`#1A1A1A`): Cards & containers

### Text
- **Primary Text** (`#FFFFFF`)
- **Secondary Text** (`#B3B3B3`)
- **Muted Text** (`#8A8A8A`)

### Semantic
- **Success** (`#22C55E`)
- **Warning** (`#F59E0B`)
- **Error** (`#EF4444`)

### Effects
- **Glow**: `0 0 20px rgba(255, 46, 99, 0.4)`
- **Shadow**: `0 8px 30px rgba(0,0,0,0.5)`

---

## 3. Typography Rules

### Font Families
- **Headings**: Montserrat, sans-serif
- **Body**: Inter, sans-serif

### Hierarchy

| Role | Size | Weight | Notes |
|------|------|--------|------|
| Hero Title | 48px–64px | 700 | Strong impact |
| Section Title | 28px–36px | 700 | Clear hierarchy |
| Card Title | 18px–20px | 600 | Emphasis |
| Body | 16px | 400 | Standard |
| Small Text | 14px | 400 | Secondary |
| Button | 14px–16px | 600 | Slight spacing |

### Principles
- High contrast between headings and body
- Minimal font variation
- Clean and readable
- Focus on clarity and hierarchy

---

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: Gradient (`#df256e → #ed4550`)
- Text: `#FFFFFF`
- Padding: 12px 24px
- Radius: 999px
- Hover: scale(1.05) + glow

**Secondary Button**
- Background: transparent
- Border: `1px solid #df256e`
- Text: `#FFFFFF`
- Radius: 999px

---

### Cards (Services)

- Background: `#1A1A1A`
- Radius: 16px
- Padding: 24px
- Hover:
  - transform: translateY(-8px)
  - glow border effect
- Icon: top aligned
- Layout: vertical

---

### Stats

- Font: 40px–48px bold
- Color: white or gradient
- Animation: count-up
- Alignment: centered

---

### Inputs
- Background: `#1A1A1A`
- Border: none
- Radius: 999px
- Padding: 12px 20px

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common: 16px, 24px, 32px, 48px, 64px

### Sections
- Full-width sections
- Max content width: 1200px
- Center aligned content

### Structure Flow
1. Hero (impact)
2. Services (value)
3. Collaboration (trust)
4. Stats (proof)
5. CTA (conversion)
6. Footer

### Whitespace Philosophy
- Balanced spacing (not dense)
- Focus on readability
- Visual breathing room between sections

---

## 6. Depth & Elevation

| Level | Use |
|------|-----|
| Base | `#0F0F0F` |
| Surface | `#151515` |
| Card | `#1A1A1A` |
| Hover | elevated + shadow |

---

## 7. Animations (GSAP)

### Principles
- Smooth & meaningful
- Not excessive
- Triggered on scroll

### Usage
- Hero: fade + slide up
- Cards: stagger animation
- Stats: counter animation
- Buttons: hover scale + glow

---

## 8. Do's and Don'ts

### Do
- Use gradients for emphasis
- Keep UI clean and modern
- Maintain consistent spacing
- Use animations for storytelling

### Don't
- Don't overload with colors
- Don't use sharp edges
- Don't overuse animations
- Don't break hierarchy

---

## 9. Responsive Behavior

### Breakpoints
- Mobile: <576px
- Tablet: 576–992px
- Desktop: >992px

### Behavior
- Stack sections vertically
- Cards: grid → single column
- Typography scales down
- Buttons full width on mobile

---

## 10. Agent Prompt Guide

### Quick Style Reference
- Background: #0F0F0F
- Card: #1A1A1A
- Text: #FFFFFF
- Accent: #df256e gradient
- Radius: 16px cards / 999px buttons

### Example Prompts
- "Create a service card with dark background #1A1A1A, 16px radius, padding 24px, title 18px semibold, white text, hover lift effect."
- "Design a primary CTA button with pink gradient (#df256e to #ed4550), pill shape, white text, hover glow."
- "Build hero section with dark background, large heading (60px bold), subtitle, and centered CTA button."
- "Create stats section with large bold numbers (48px) and count-up animation."