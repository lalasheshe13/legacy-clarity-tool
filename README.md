# Legacy Clarity Tool

A lightweight React app designed to help people capture critical personal, household,
and responsibility information—so others aren’t left guessing in moments of stress.

## Why this exists
In real life, information often lives in people’s heads. This tool focuses on clarity,
handoff, and practical continuity—not complexity.

## Features
- Multi-page flow using React Router (Home → Form → Summary)
- Controlled inputs with local persistence (localStorage)
- Summary view with prompts for missing information
- Print / Save to PDF via browser print
- Reset / clear flow for reuse

## Tech Stack
- React
- Vite
- React Router
- LocalStorage (intentional choice for privacy and speed)

## Design Decisions
- No backend yet by design — optimized for fast iteration and sensitive data handling
- Minimal styling to prioritize usability and clarity
- Small scope, complete loop

## Getting Started
```bash
npm install
npm run dev

