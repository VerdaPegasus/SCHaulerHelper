# SC Hauler Helper

A Star Citizen cargo hauling companion tool. Plan routes, manage commodities, track missions, and visualize cargo — all in your browser.

Forked from [loeken/SCHaulerHelper](https://github.com/loeken/SCHaulerHelper) and rewritten in React + TypeScript with Vite.

## Features

- **Mission tracking** — log and manage hauling missions with cargo, routes, and payouts
- **Route planner** — map out stops across Stanton systems with interactive drag-and-drop reordering
- **Cargo visualizer** — arrange cargo on a grid with drag-and-drop, auto-stacking, and box count breakdown
- **Stats & export** — track earnings, profits, and export mission data


## Tech stack

[React 18](https://react.dev) · [TypeScript](https://www.typescriptlang.org) · [Vite 6](https://vite.dev) · [Tailwind CSS v4](https://tailwindcss.com) · [Zustand](https://github.com/pmndrs/zustand) · [@dnd-kit](https://dndkit.com) · [Tesseract.js](https://tesseract.projectnaptha.com)

## Getting started

### Docker (recommended)

```bash
docker compose up
```

The app will be available at [http://localhost:3000/SCHaulerHelper/](http://localhost:3000/SCHaulerHelper/).

### Manual

Requires Node 22+.

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

Output goes to the `dist/` directory. The app is built with a `/SCHaulerHelper/` base path for GitHub Pages deployment.

## Project structure

```
src/
├── components/
│   ├── delivery/       # Cargo visualizer, route planner, delivery panel
│   ├── layout/         # Header, main layout, stats panel
│   ├── missions/       # Mission cards, commodity rows, mission panel
│   ├── modals/         # Modal overlays
│   └── ui/             # Reusable UI primitives (Button, Input, Modal, etc.)
├── data/               # Static data (commodities, locations, ships, payouts, themes)
├── stores/             # Zustand state stores (delivery, mission, ui)
├── types/              # TypeScript type definitions
└── utils/              # Helpers (OCR, export, migration, box breakdown)
```

## License

This project is for personal and non-commercial use only.
