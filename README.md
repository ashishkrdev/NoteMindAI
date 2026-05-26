# NoteMindAI

> A calm AI study workspace for turning messy class notes into clear answers, summaries, and focused exam revision.

![NoteMindAI banner](https://placehold.co/1400x520/f5f6f3/315f72?text=NoteMindAI)

## Live Product

- Deployment: https://ashishkrdev.github.io/NoteMindAI/
- Repository: https://github.com/ashishkrdev/NoteMindAI

## Features

- AI-inspired study dashboard with notes, summaries, and chat preview
- Calm academic visual system built around soft neutrals, slate blue, and olive accents
- Responsive landing page with preserved dashboard preview layout
- Redux Toolkit slices for notes, chat, and interface state
- React Router DOM pages for Home, Dashboard, and Not Found routes
- Production-ready Vite setup with build, lint, and Vercel rewrite config

## Tech Stack

![React](https://img.shields.io/badge/React-19-315f72?style=for-the-badge&logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-7f8f69?style=for-the-badge&logo=redux)
![Vite](https://img.shields.io/badge/Vite-6.x-315f72?style=for-the-badge&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-7.x-7f8f69?style=for-the-badge&logo=reactrouter)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-1f2937?style=for-the-badge&logo=github)

## Screenshots

| Home | Dashboard Preview |
| --- | --- |
| Add screenshot after deployment | Add screenshot after deployment |

## Installation

```bash
git clone <repository-url>
cd NoteMindAI
npm install
npm run dev
```

Open the local app at:

```bash
http://localhost:5173
```

## Production Build

```bash
npm run build
npm run preview
```

## Folder Structure

```text
src/
|-- assets/
|-- components/
|   |-- Navbar/
|   |-- Hero/
|   |-- DashboardPreview/
|   |-- Sidebar/
|   |-- StatsCard/
|   |-- NotesCard/
|   |-- ChatBox/
|   |-- FeatureCard/
|   `-- Footer/
|-- pages/
|   |-- Home/
|   |-- Dashboard/
|   `-- NotFound/
|-- redux/
|   |-- store.js
|   `-- slices/
|       |-- notesSlice.js
|       |-- chatSlice.js
|       `-- uiSlice.js
|-- routes/
|   `-- AppRoutes.jsx
|-- styles/
|   |-- global.css
|   |-- variables.css
|   |-- navbar.css
|   |-- hero.css
|   |-- dashboard.css
|   |-- cards.css
|   |-- footer.css
|   `-- responsive.css
|-- App.jsx
`-- main.jsx
```

## Deployment

The project is configured for GitHub Pages through GitHub Actions.

```bash
npm run build
```

Deployment URL:

```text
https://ashishkrdev.github.io/NoteMindAI/
```

## Roadmap

- Add real authentication and protected dashboard routes
- Connect note upload flow to a backend API
- Add OCR and PDF parsing for handwritten and typed notes
- Add AI chat streaming with citations from source notes
- Add flashcards, spaced repetition, and exam-ready exports

## Author

Built by Ashish Kumar.

## License

MIT License. Use, modify, and ship with attribution.
