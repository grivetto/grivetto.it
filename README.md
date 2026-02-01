# Marco Grivetto - Portfolio Immobiliare

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
    *   `/src/assets`: Immagini e risorse statiche.
*   **/www**: La directory di staging locale per la build di produzione.
*   **Script Python**: Script DevOps personalizzati per il deploy FTP e la diagnostica del server.
    *   `deploy_site_www.py`: Distribuisce la cartella `www` sul server FTP remoto.
    *   `probe_server.py`: Strumento diagnostico per controlli dell'ambiente server.

## 🛠️ Sviluppo

### Prerequisiti
*   Node.js (v18+)
*   npm

### Installazione

```bash
cd agenzia-immobiliare
npm install
```

### Avvio Server Locale

```bash
npm run dev
```

### Build per la Produzione

```bash
npm run build
```
Gli artefatti della build verranno generati nella cartella `dist`.

## 🌍 Deploy

Il sito è distribuito su un ambiente di hosting standard LAMP/FTP (Register.it).

**Flusso di Lavoro per il Deploy:**
1.  Esegui `npm run build` per generare il sito statico.
2.  Sincronizza la cartella `dist` nella directory locale `www`.
3.  Esegui `python deploy_site_www.py` per caricare le modifiche via FTP.

## ✨ Funzionalità Chiave

*   **Estetica Dark Mode**: Sfondo antracite profondo (#121212) con accenti blu elettrico.
*   **Design Responsivo**: Layout completamente fluido che si adatta a Mobile, Tablet e Desktop.
*   **Glassmorphism**: Moderni effetti di vetro smerigliato sulla navigazione e sulle card.
*   **Elementi Interattivi**: Scorrimento fluido, stati hover e animazioni di entrata.
*   **Integrazione Google Maps**: Link diretti alla posizione per gli indirizzi degli uffici.

---
© 2026 Marco Grivetto
