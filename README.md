# Book Store Carousel

A responsive, interactive **Book Store Carousel** web project that showcases books in a smooth sliding carousel UI. This repository contains the project source and a pre-built production bundle in the `dist/` folder.

## Demo
Live Site: https://anilkumarputta.github.io/Book-Store-Carousel/

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run Locally (Development)](#run-locally-development)
  - [Build for Production](#build-for-production)
  - [Preview Production Build](#preview-production-build)
- [Deploying](#deploying)
  - [GitHub Pages (Using `dist/`)](#github-pages-using-dist)
  - [Netlify / Vercel](#netlify--vercel)
- [How to Use](#how-to-use)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview
**Book Store Carousel** is a UI-focused project where books are displayed as cards inside a carousel/slider. Users can browse through book items with a clean layout that adapts to different screen sizes.

This repo includes a ready-to-serve build inside the `dist/` directory.

## Features
- Smooth carousel/slider behavior for browsing books
- Responsive layout (mobile / tablet / desktop)
- Book cards with key details (title, author, price, etc. depending on the UI)
- Lightweight and fast UI
- Production build available in `dist/`

## Tech Stack
> Update these items if your project differs.
- HTML5
- CSS3
- JavaScript (ES6+)
- Build output: `dist/`

If this project uses a bundler (like Vite/Webpack), list it here as well.

### GitHub Pages (Using `dist/`)
This project is deployed using **GitHub Actions** to publish the `dist/` folder to GitHub Pages.

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to the `main` branch to trigger deployment (or run the workflow manually from the **Actions** tab)

## Screenshots
Add screenshots/gifs here to make the README look professional.

Example:
- `./assets/screenshot-1.png`

## Project Structure
The exact structure may vary, but typically:

```
Book-Store-Carousel/
├─ dist/                # Production build (static files)
├─ src/                 # Source code (if present)
├─ public/              # Static assets (if present)
├─ index.html           # Entry HTML (if present)
├─ package.json         # Dependencies and scripts (if present)
└─ README.md
```

## Getting Started

### Prerequisites
If your project has only static files, you only need a browser.

If it uses Node tooling:
- Node.js (LTS recommended)
- npm (comes with Node) or yarn/pnpm

### Installation
Clone the repository:

```bash
git clone https://github.com/Anilkumarputta/Book-Store-Carousel.git
cd Book-Store-Carousel
```

If the repo contains a `package.json`, install dependencies:

```bash
npm install
```

### Run Locally (Development)
If you have a dev server configured (Vite/webpack/etc.):

```bash
npm run dev
```

If it is a plain static project, you can open `index.html` directly or use a simple server:

```bash
npx serve .
```

### Build for Production
If the project uses a build step:

```bash
npm run build
```

This should generate/refresh the `dist/` folder.

### Preview Production Build
If supported:

```bash
npm run preview
```

## Deploying

### GitHub Pages (Using `dist/`)
If you want to host from the production build:
1. Ensure your production files are in `dist/`
2. Go to **Settings → Pages**
3. Select:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch)
   - Folder: `/dist`
4. Save and wait for GitHub Pages to publish

### Netlify / Vercel
For static deployments:
- Build command: `npm run build` (if applicable)
- Publish directory: `dist`

If no build step:
- Publish directory: `dist` (or project root if that’s where `index.html` is)

## How to Use
1. Open the site in your browser
2. Use the carousel arrows/controls (or swipe on mobile) to browse books
3. Interact with book cards as designed

## Configuration
If the book list is hardcoded, you can update it in your source file (for example in `src/`):
- Add/edit book entries (title, author, price, image)
- Update styles (CSS)

If you have config variables, document them here.

## Scripts
If `package.json` exists, common scripts are:
- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run preview` — preview production build

Update this section to match your real scripts.

## Troubleshooting
- **Blank page after deploy**: check your base path (common with GitHub Pages). If using Vite, set `base` in `vite.config.js`.
- **Assets not loading**: ensure paths are relative or configured correctly for your hosting.

## Contributing
Contributions are welcome.
1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

## License
Add a license file if you want this to be open-source.

## Author
- GitHub: [Anilkumarputta](https://github.com/Anilkumarputta)
