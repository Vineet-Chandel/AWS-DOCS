# AWS Cloud Launchpad — Deploy Your First Website to AWS

A production-quality, frontend-only documentation workbook website built with **React**, **Vite**, and **Tailwind CSS**.

The application combines:
- **Reference Image 1 (Visual Identity & Content)**: Editorial serif typography, deep navy headings, muted slate body text, restrained blue/amber/emerald/purple color accents, and full technical diagrams for the 2-hour AWS Cloud Launchpad workshop.
- **Reference Image 2 (Documentation Architecture)**: 3-column layout featuring a global navigation sidebar, breadcrumb hierarchy, central long-form reading surface, and dynamic sticky "On this page" table of contents.

---

## Architecture & Features

### 1. Three-Column Layout
- **Left Column (Global Navigation)**: Desktop width (`w-64`), categorized into the 8 planned workbook sections (`INTRODUCTION`, `GETTING STARTED`, `UNDERSTAND AWS`, `DEPLOY YOUR WEBSITE`, `VERIFY AND TROUBLESHOOT`, `INDEPENDENT CHALLENGE`, `SECURITY AND CLEANUP`, `FURTHER LEARNING`). Highlights the active item with an indicator bar. Transforms into an accessible slide-in drawer on mobile.
- **Center Column (Main Reading Surface)**: Formatted for optimal readability (`max-w-[840px]`), featuring breadcrumbs, metadata badges, rich diagrams, callouts, and next-chapter navigation.
- **Right Column ("On this page")**: Sticky local table of contents (`w-56`), tracking scroll position (scroll spy) and highlighting the active heading with a continuous vertical guide.

### 2. Introduction Page (All 10 Sections Fully Implemented)
1. **Page Header**: Breadcrumbs (`Introduction / Overview`), eyebrow (`THE PRACTICAL AWS STARTER`), editorial serif main title, subtitle, and metadata pills (Beginner-friendly, ~120 min, Static website, Hands-on).
2. **From Repository to Live Website**: Responsive 4-stage pipeline (01 Source: GitHub → 02 Compute: EC2 → 03 Web Server: Nginx → 04 Visitor: Public IP), followed by green network and gray administrative route paths.
3. **Three Steps to Your First Deployment**: 3 connected learning phases (01 UNDERSTAND, 02 DEPLOY, 03 PROVE IT).
4. **The Finish Line**: Understated pale-blue callout with solid blue accent border.
5. **Suggested 120-Minute Run Plan**: 6-phase responsive timeline grid totaling exactly 120 minutes.
6. **How Does Someone Open Your Website?**: 5-step visitor flow diagram explaining TCP port 80 and Security Group inbound rules.
7. **How Do You Manage the EC2 Instance?**: Administrator SSH flow, TCP port 22, and IP restriction security distinction.
8. **What This Workshop Uses — and What It Doesn't**: Two-column comparison clarifying static hosting requirements.
9. **Your Deployment Journey**: Compact final route summary.
10. **Ready to Begin?**: Transition and direct navigation card to Chapter 2 (Prerequisites).

### 3. Reading Controls & Usability
- **Full-Text Search Modal**: Press `⌘K` or click the search bar to search across workbook concepts with keyword highlighting and arrow-key navigation.
- **Reading Progress Bar**: Subtle indicator at the top tracking scroll percentage.
- **Light & Dark Mode**: Seamless toggle with `localStorage` persistence and system preference detection.
- **Back to Top**: Floating button appearing after scrolling down.
- **Honest Placeholders**: Upcoming chapters clearly indicate development status with quick return navigation back to the Introduction.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (v9.0.0 or higher)

### Installation

```bash
npm install
```

### Development Server

Start Vite with hot module replacement:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production Build

Compile the optimized static build into `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
aws-cloud-launchpad/
├── index.html                  # HTML entry point with preconnected editorial fonts
├── package.json                # Project dependencies and build scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind styling with editorial serif & navy palette
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.jsx           # Compact header with search, logo, and theme toggle
│   │   │   ├── Sidebar.jsx             # Left documentation navigation sidebar / mobile drawer
│   │   │   └── RightTableOfContents.jsx# Sticky "On this page" TOC with scroll spy
│   │   ├── documentation/
│   │   │   ├── Breadcrumbs.jsx         # Clickable breadcrumb hierarchy
│   │   │   ├── DeploymentFlow.jsx      # 4-stage pipeline diagram & network paths
│   │   │   ├── LearningPhases.jsx      # 3 connected learning phases
│   │   │   ├── FinishLineCallout.jsx   # Pale-blue finish line objective box
│   │   │   ├── WorkshopTimeline.jsx    # 6-phase 120-minute run plan grid
│   │   │   ├── NetworkFlow.jsx         # Visitor HTTP & admin SSH network flows
│   │   │   ├── WorkshopComparison.jsx  # Two-column "What We Use vs What We Don't"
│   │   │   └── NextLessonNav.jsx       # Route summary & next chapter navigation
│   │   ├── DocumentSearch.jsx          # Full-text Cmd+K search modal
│   │   ├── ReadingProgress.jsx         # Scroll progress bar
│   │   └── BackToTop.jsx               # Floating scroll-to-top button
│   ├── data/
│   │   └── navigation.js               # 8-part workbook curriculum structure
│   ├── pages/
│   │   ├── IntroductionPage.jsx        # Complete Introduction/Overview page (Sections 1-10)
│   │   └── PlaceholderPage.jsx         # Honest placeholder for upcoming modules
│   ├── hooks/
│   │   ├── useActiveHeading.js         # Scroll spy hook
│   │   ├── useHeadings.js              # Heading extraction hook
│   │   └── useTheme.js                 # Dark / Light theme state manager
│   ├── utils/
│   │   └── slugify.js                  # Slug and anchor generator
│   ├── App.jsx                         # Main 3-column layout orchestration
│   ├── main.jsx                        # React root entry
│   └── index.css                       # Global styles & custom scrollbars
└── README.md
```

---

## 100% Frontend-Only Guarantee

This application runs purely in the browser. It requires no backend, database, authentication, or external API to deliver its reading experience.
