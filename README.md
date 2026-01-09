# Legacy Clarity Tool

A lightweight React app designed to help people capture essential “handoff” information—so others aren’t left guessing in moments of stress.

## Why this exists
In real life, critical info often lives in someone’s head. This tool provides a simple structure to document people, responsibilities, and key information in a way that’s easy to review and share.

## Features
- Multi-page flow using React Router (Home → Form → Summary)
- Controlled inputs with local persistence (localStorage)
- “What’s missing?” prompts based on incomplete fields
- Print / Save to PDF via browser print
- Reset/clear flow for reuse

## Tech Stack
- React + Vite
- React Router
- localStorage (intentional MVP choice)

## Design Decisions
- No backend by design (privacy + speed to iterate)
- Minimal styling to prioritize clarity and usability
- Tight scope with a complete user loop (capture → persist → summarize)

## Run locally
```bash
npm install
npm run dev
