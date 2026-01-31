# Marco Grivetto - Real Estate Portfolio

A modern, high-performance landing page for **Marco Grivetto (Royal Team Immobiliare)**, designed to showcase luxury properties and professional excellence.

## 🚀 Tech Stack

This project is built with a modern frontend stack focusing on performance, aesthetics, and smooth interactions:

*   **[React 18](https://reactjs.org/)**: Core UI library for component-based architecture.
*   **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for lightning-fast builds and HMR.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid, custom design implementation.
*   **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library for complex UI transitions and 3D-like effects.
*   **[Lucide React](https://lucide.dev/)**: Beautiful, consistent icon set.

## 📂 Project Structure

*   **/agenzia-immobiliare**: The main React application source code.
    *   `/src/components`: Reusable UI components (Hero, Navbar, BentoGrid, Footer).
    *   `/src/assets`: Images and static resources.
*   **/www**: The local staging directory for the production build.
*   **Python Scripts**: Custom DevOps scripts for FTP deployment and server diagnostics.
    *   `deploy_site_www.py`: Deploys the `www` folder to the remote FTP server.
    *   `probe_server.py`: Diagnostic tool for server environment checks.

## 🛠️ Development

### Prerequisites
*   Node.js (v18+)
*   npm

### Installation

```bash
cd agenzia-immobiliare
npm install
```

### Run Local Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```
The build artifacts will be generated in the `dist` folder.

## 🌍 Deployment

The site is deployed to a standard LAMP/FTP hosting environment (Register.it).

**Deployment Workflow:**
1.  Run `npm run build` to generate the static site.
2.  Sync the `dist` folder to the local `www` directory.
3.  Run `python deploy_site_www.py` to upload changes via FTP.

## ✨ Key Features

*   **Dark Mode Aesthetic**: Deep charcoal background (#121212) with electric blue accents.
*   **Responsive Design**: Fully fluid layout adapting to Mobile, Tablet, and Desktop.
*   **Glassmorphism**: Modern frosted glass effects on navigation and cards.
*   **Interactive Elements**: Smooth scrolling, hover states, and entrance animations.
*   **Google Maps Integration**: Direct location links for office addresses.

---
© 2026 Marco Grivetto
