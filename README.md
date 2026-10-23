# AWS Cloud Launchpad — Deploy Your First Website to AWS

A production-grade, frontend-only documentation workbook website built with **React**, **Vite**, and **Tailwind CSS**.

The application features two complete, interactive chapters with eight sequential lessons:
- **Chapter 01: Introduction &amp; Prerequisites** (Pages 1–4)
- **Chapter 02: Step-by-Step Deployment** (Pages 1–4, Steps 1–8)

---

## Workbook Curriculum

### **Chapter 01: Introduction &amp; Prerequisites**
1. **01 / 1 OF 4 — What is AWS deployment?**
   - Local vs Cloud vs Live Application 3-column table
   - Why Developers Use AWS (Accessibility, Scalability, Reliability, Service Choice, Pricing, Security)
   - Cloud Does Not Automatically Mean Free alert callout
   - Today's Deployment in One Line pipeline diagram
2. **01 / 2 OF 4 — How the EC2 deployment fits together**
   - Interactive SVG/React AWS Cloud, VPC, EC2, Security Group, and IAM diagram
   - 2-column component job matrix table
   - Two Paths, Two Jobs (Administrator SSH vs Visitor HTTP)
3. **01 / 3 OF 4 — AWS services: learn the job, not just the name**
   - 14-service alternating glossary grid
   - Quick Memory Trick mnemonic
   - Authoritative official AWS documentation guides
4. **01 / 4 OF 4 — Preflight: tools, repository, account and permissions**
   - Tools You Need 2-column checklist
   - Local terminal checks (`git --version` and `ssh -V`) with copy control
   - Starter template: `zirafa/simple-website-template` (`gh-pages` branch)
   - AWS Account, Key Pair (`chmod 400`), and Least Privilege rules
   - Interactive 6-item Ready Check

---

### **Chapter 02: Step-by-Step Deployment (Steps 1–8)**
1. **02 / 1 OF 4 — Project 1: inspect the files, then open EC2**
   - **Diagram**: GitHub Repository (`gh-pages`) to EC2 Web Directory (`/usr/share/nginx/html/`)
   - **Step 1**: Inspect the repository on GitHub
   - **What is index.html?** informational callout
   - **Step 2**: Sign in and launch an EC2 instance setting matrix (AMI: Amazon Linux 2023, Instance: t2/t3.micro, Key: aws-class-key)
   - **Key Pair Safety** security callout
   - **Screenshot Target 1**: Launch configuration evidence
2. **02 / 2 OF 4 — Network rules: let visitors in, keep administration restricted**
   - **Rules Table**: SSH TCP 22 (My IP) and HTTP TCP 80 (Anywhere 0.0.0.0/0)
   - **Security Warning**: Do Not Open SSH to Everyone
   - **Step 3**: Configure networking checklist
   - **Step 4**: Launch and confirm instance readiness (Running state, 2/2 status checks passed, Public IPv4 copied)
   - **Screenshot Targets 2 + 3**: Inbound rules table and Running instance status
3. **02 / 3 OF 4 — Connect to the server and install Nginx**
   - **Step 5**: Connect using SSH (`RUN ON YOUR LAPTOP` terminal panel)
   - **If SSH Fails**: 6-point systematic diagnostic triage
   - **Step 6**: Install Git and Nginx on EC2 (`RUN INSIDE THE SSH SESSION` dnf package commands)
   - **Test Nginx Locally on EC2**: Local HTTP request test (`curl -I http://localhost`)
   - **Screenshot Targets 4 + 5**: Active terminal and local HTTP 200 verification
4. **02 / 4 OF 4 — Deploy the repository and open the live website**
   - **Step 7**: Clone and deploy website files (`git clone --branch gh-pages --single-branch`)
   - **Copy Only Public Website Files**: Move files to `/usr/share/nginx/html/`, test syntax with `nginx -t`, and reload daemon
   - **Public Directory Warning**: Never place secrets or credentials in the web root
   - **Step 8**: Open the live website via public IPv4 address (`http://YOUR_PUBLIC_IP`)
   - **Screenshot Targets for Live Workshop**: 5-tile schematic capture target checklist
   - **Screenshot Target 6**: Proof of deployment browser evidence
   - **Your Website Is Live**: Completion celebration and overview navigation

---

## Features & Usability

- **Three-Column Documentation Shell**:
  - **Left Sidebar**: 8 ready lessons across Chapters 1 & 2 with active page indicator strip.
  - **Center Reading Area**: 840px reading width, editorial serif headings, and comfortable typography.
  - **Right Sidebar ("On this page")**: Automatically derived from the current page's H2/H3 headings with scroll-spy tracking.
- **Continuous Step Numbering**: Steps 1 to 8 run sequentially across Chapter 2.
- **Full-Text Document Search (`⌘K`)**: Fast modal search indexing all sections across both chapters.
- **Terminal Panels**: Distinguished environments (`RUN ON YOUR LAPTOP` vs `RUN INSIDE THE SSH SESSION`) with one-click copy functionality.
- **Theme Switching**: Dark and light mode with system preference auto-detection and `localStorage` persistence.
- **100% Frontend-Only**: Zero backend, zero database, zero remote image dependencies.

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

Compile the optimized static build:

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
├── tailwind.config.js          # Tailwind styling with workbook color palette
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.jsx           # Compact header with search, logo, and theme toggle
│   │   │   ├── Sidebar.jsx             # Left documentation navigation sidebar / mobile drawer
│   │   │   └── RightTableOfContents.jsx# Dynamic "On this page" TOC with scroll spy
│   │   ├── documentation/
│   │   │   ├── ChapterHeader.jsx       # Chapter indicator badge (0X / ... • X OF 4)
│   │   │   ├── ChapterPagination.jsx   # Previous & Next page navigation buttons
│   │   │   ├── TerminalPanel.jsx       # Reusable terminal panel with environment badges & copy
│   │   │   ├── DeploymentFilesDiagram.jsx# GitHub (gh-pages) to EC2 /usr/share/nginx/html/ diagram
│   │   │   ├── ScreenshotTargetsGrid.jsx # 5-tile schematic screenshot evidence targets
│   │   │   ├── AwsNetworkDiagram.jsx   # SVG/React AWS Cloud, VPC, EC2 & IAM diagram
│   │   │   ├── Breadcrumbs.jsx         # Clickable breadcrumb hierarchy
│   │   │   └── DeploymentFlow.jsx      # 4-stage pipeline diagram & network paths
│   │   ├── DocumentSearch.jsx          # Full-text Cmd+K search modal across all 8 lessons
│   │   ├── ReadingProgress.jsx         # Scroll progress bar
│   │   └── BackToTop.jsx               # Floating scroll-to-top button
│   ├── data/
│   │   └── navigation.js               # Curriculum structure with 8 ready lessons
│   ├── pages/
│   │   ├── DeploymentOverviewPage.jsx  # 01 • Page 1: What is AWS deployment?
│   │   ├── Ec2ArchitecturePage.jsx     # 01 • Page 2: How the EC2 deployment fits together
│   │   ├── AwsServicesPage.jsx         # 01 • Page 3: AWS services: learn the job, not just the name
│   │   ├── PreflightPage.jsx           # 01 • Page 4: Preflight: tools, repository, account & permissions
│   │   └── step-by-step-deployment/
│   │       ├── InspectAndLaunchPage.jsx# 02 • Page 1: Project 1: inspect files, open EC2 (Steps 1–2)
│   │       ├── NetworkingPage.jsx      # 02 • Page 2: Network rules (Steps 3–4)
│   │       ├── ConnectAndInstallPage.jsx# 02 • Page 3: Connect SSH, install Nginx (Steps 5–6)
│   │       └── DeployAndVerifyPage.jsx # 02 • Page 4: Deploy repo, open live website (Steps 7–8)
│   ├── hooks/
│   │   ├── useActiveHeading.js         # Scroll spy hook
│   │   └── useTheme.js                 # Dark / Light theme state manager
│   ├── utils/
│   │   └── slugify.js                  # Slug and anchor generator
│   ├── App.jsx                         # Main 3-column layout orchestration & hash routing
│   ├── main.jsx                        # React root entry
│   └── index.css                       # Global styles & custom scrollbars
└── README.md
```
