# grivetto.it — Sito Web Immobiliare

Sito web istituzionale di **Marco Grivetto**, agente immobiliare Royal Team con sede ad Asti e Torino.

## Stack

- **React 18** + **TypeScript**
- **Vite** (bundler + dev server)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** (animazioni)
- **Lucide React** (icone)

## Struttura

```
agenzia-immobiliare/
├── public/
│   ├── marco-grivetto.vcf     # vCard contatto
│   ├── qr-code-card.png
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── assets/
    │   └── signature.png
    ├── components/
    │   ├── Navbar.tsx
    │   ├── ModernHero.tsx
    │   ├── AboutSection.tsx
    │   ├── BentoFeatures.tsx
    │   ├── PropertiesSection.tsx
    │   ├── ContactCTA.tsx
    │   └── Footer.tsx
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

## Sviluppo locale

```bash
cd agenzia-immobiliare
npm install
npm run dev
```

## Deploy

Build + upload via FTP su `grivetto.it`:

```bash
npm run build            # genera dist/
python deploy_site.py    # carica dist/ via FTP
```

## Versione

Ultima release: **v1.0.0**
