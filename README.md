
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Legacy Clarity Tool (Embrace Transitions)

A lightweight, people-centered web app that helps individuals organize key information and decisions across life transitions—so responsibilities are clear, wishes are documented, and next steps are actionable.

This project is intentionally scoped as a small internal-tool-style build: clear workflows, structured inputs, and a usable summary view.

---

## Why this exists

In high-stress transitions, people don’t fail because they don’t care.
They fail because the system is unclear.

This tool provides a simple structure to capture:
- who is involved (and what role they play)
- what matters most (wishes and priorities)
- where key information lives
- what’s still unresolved

The goal is clarity, not perfection.

---

## Core user stories (v1)

1. As a user, I can enter my key legacy clarity information across a small set of sections.
2. As a user, I can review everything in a structured summary view.
3. As a user, I can edit my inputs easily without losing my place.
4. As a user, I can preserve my work across sessions (local storage).
5. As a user, I can export a shareable summary (PDF or printable view).

---

## Sections (v1)

- **People & Roles**: key contacts, responsibilities, backups
- **Wishes & Priorities**: what matters most, preferences, values
- **Key Info**: document locations, access notes, important accounts
- **Open Questions / Next Steps**: unresolved items and planned actions

---

## Tech stack (planned)

- React (frontend)
- Local state + localStorage (persistence)
- Optional: PDF export for summary view

---

## How to run locally

1. Clone the repo:
   ```bash
   git clone <REPO_URL>
   cd legacy-clarity-tool
npm install

npm run dev
d52f29e94c048b16d87ac3c0189b646c2c71b9ad
