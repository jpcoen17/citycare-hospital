# 🏥 City Care Hospital — Premium Futuristic Healthcare Website

> "This is not just a hospital. This is the future of healthcare."

A premium, cinematic healthcare website built with Next.js 15, featuring immersive animations, glassmorphism design, and a fully interactive UI that communicates world-class medical excellence.

---

## ✨ Features

- **Cinematic Hero Section** — Parallax hospital image, floating glass stats cards, animated counters
- **Interactive Hotspot Map** — Hover over building areas to reveal department info
- **Smart Technology Dashboard** — AI features, live monitoring widgets
- **Emergency Care Timeline** — Animated response protocol with pulse effects
- **Departments Showcase** — Cinematic hover zoom cards for all specialties
- **Facilities Grid** — 10+ hospital amenities with icon system
- **Patient Experience** — Luxury room showcase + testimonial slider
- **Sustainability Section** — IGBC Gold features, green metrics
- **Interactive Floor Plan** — Click to explore each floor's departments
- **KPI Statistics** — Animated counters, bar charts, construction timeline
- **Premium Footer** — Contact form, social links, emergency CTA
- **Custom Cursor** — Smooth magnetic cursor with hover states
- **Loading Screen** — Branded loading animation with progress bar
- **Scroll Progress** — Gradient progress indicator at top
- **Lenis Smooth Scroll** — Ultra-smooth scrolling experience

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 15** | App Router, SSR, Image optimization |
| **TypeScript** | Type safety |
| **TailwindCSS** | Utility-first styling |
| **Framer Motion** | Component animations, reveal effects |
| **Lenis** | Smooth scrolling |
| **Lucide React** | Icon system |

---

## 🎨 Design System

### Color Palette
```
Primary Navy:     #0B3C6D
Dark Navy:        #091A2B
Cyan Accent:      #4FD1FF
Light Surface:    #F7F9FC
Emergency Red:    #FF5A5A
Vital Green:      #4CAF50
```

### Typography
- **Headings**: Space Grotesk (bold, uppercase, futuristic)
- **Body**: Inter (clean, readable)

### Design Elements
- Glassmorphism cards with backdrop blur
- Animated gradient text
- Hotspot pulse animations
- Floating UI elements
- Grid/dot background patterns
- Scroll-triggered reveals

---

## 🚀 Installation

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Steps

```bash
# 1. Extract the ZIP file
unzip citycare-hospital.zip
cd citycare-hospital

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
citycare-hospital/
├── app/
│   ├── globals.css          # Global styles, animations, CSS variables
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page (all sections)
│
├── components/
│   ├── Navigation.tsx        # Sticky nav with mobile menu
│   ├── LoadingScreen.tsx     # Branded loading animation
│   ├── CustomCursor.tsx      # Custom magnetic cursor
│   │
│   ├── ui/                   # Reusable UI components
│   │   ├── GlassCard.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── PremiumButton.tsx
│   │   ├── RevealSection.tsx
│   │   └── FloatingStats.tsx
│   │
│   └── sections/             # Page sections
│       ├── HeroSection.tsx
│       ├── OverviewSection.tsx
│       ├── TechnologySection.tsx
│       ├── EmergencySection.tsx
│       ├── DepartmentsSection.tsx
│       ├── FacilitiesSection.tsx
│       ├── PatientExperienceSection.tsx
│       ├── SustainabilitySection.tsx
│       ├── FloorPlanSection.tsx
│       ├── StatisticsSection.tsx
│       └── FooterSection.tsx
│
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useInView.ts
│   └── useAnimatedCounter.ts
│
├── lib/
│   └── utils.ts
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 🖼 Images

This project uses high-quality images from **Unsplash** (free for commercial use):
- Hospital exteriors and interiors
- Emergency rooms and ICUs
- Patient rooms and facilities
- Technology and monitoring systems

Images are loaded via Next.js `<Image>` component with automatic optimization.

---

## ⚡ Performance Features

- Lazy loading for all images
- `next/image` optimization (WebP, AVIF)
- Framer Motion `whileInView` (only animates when visible)
- `once: true` viewport triggers (no re-animation)
- CSS-native animations where possible
- Intersection Observer for counters

---

## 📱 Responsive Design

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (< 768px) | Single column, hidden floating cards |
| Tablet (768–1024px) | 2-column grids |
| Desktop (1024px+) | Full layout, all animations |
| Ultrawide (1440px+) | Max-width container maintained |

---

## 🔧 Customization

### Change Hospital Name
Edit `app/layout.tsx` metadata and any hardcoded "City Care Hospital" strings.

### Change Colors
Update `tailwind.config.ts` theme colors and `app/globals.css` CSS variables.

### Add/Remove Sections
Import/remove sections in `app/page.tsx`.

### Replace Images
Change Unsplash URLs in each section file to your own images.

---

## 📄 License

This project is provided as a premium template. All Unsplash images are licensed under the Unsplash License (free for commercial use). Hospital data is fictional for demonstration purposes.

---

*Built with ❤️ for the future of healthcare.*
