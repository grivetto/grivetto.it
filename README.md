# Marco Grivetto - Portfolio Immobiliare (v1.0 Stable)

Una landing page moderna e ad alte prestazioni per **Marco Grivetto (Royal Team Immobiliare)**, progettata per mostrare immobili di lusso ed eccellenza professionale.

## 🚀 Stack Tecnologico

Questo progetto è costruito con uno stack frontend moderno focalizzato su prestazioni, estetica e interazioni fluide:

*   **[React 18](https://reactjs.org/)**: Libreria UI core per l'architettura basata su componenti.
*   **[Vite](https://vitejs.dev/)**: Tooling frontend di nuova generazione per build ultra-veloci e HMR.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first per un'implementazione rapida del design personalizzato.
*   **[Framer Motion](https://www.framer.com/motion/)**: Libreria di animazione pronta per la produzione per transizioni UI complesse ed effetti simil-3D.
*   **[Lucide React](https://lucide.dev/)**: Set di icone bello e coerente.

## 📂 Struttura del Progetto

*   **/agenzia-immobiliare**: Il codice sorgente principale dell'applicazione React.
    *   `/src/components`: Componenti UI riutilizzabili (Hero, Navbar, BentoGrid, Footer).
    *   `/src/assets`: Immagini e risorse statiche del core.
    *   `/public/assets/properties`: Cache locale delle immagini degli annunci (gestita automaticamente).
*   **/www**: La directory di staging locale per la build di produzione (puntata a `agenzia-immobiliare/dist`).
*   **Script di Automazione**: 
    *   `scripts/download-listings.js`: Scarica le ultime inserzioni dal sito live Royal Team.
    *   `scripts/fetch-listings.js`: Elabora i dati, classifica gli annunci e **scarica automaticamente le immagini in locale** per garantire prestazioni e stabilità.
*   **Script DevOps**:
    *   `deploy_site.py`: Distribuisce la build di produzione (`dist`) nella cartella `/www` del server FTP remoto.

## 🛠️ Sviluppo

### Prerequisiti
*   Node.js (v18+)
*   npm

### Installazione

```bash
cd agenzia-immobiliare
npm install
```

### Automazione Dati

Per aggiornare gli immobili e scaricare le nuove immagini:
```bash
node scripts/download-listings.js && node scripts/fetch-listings.js
```

### Build e Deploy

```bash
npm run build
python deploy_site.py
```

## ✨ Funzionalità v1.0 Stable

*   **Local Image Caching**: Tutte le immagini degli annunci vengono scaricate e servite localmente per evitare problemi di hotlinking e 404 esterni.
*   **Rimozione Automatica Annunci Scaduti**: Lo script di fetch pulisce automaticamente i dati vecchi e non più presenti sul sito sorgente.
*   **Estetica Premium Dark Mode**: Sfondo antracite profondo con accenti blu elettrico e vetro smerigliato.
*   **Mobile-First & Fluid Design**: Ottimizzato per ogni dimensione di schermo.

---
© 2026 Marco Grivetto
