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
