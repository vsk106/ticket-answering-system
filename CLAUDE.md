# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An AI-powered ticket management system for handling support emails. The system auto-classifies tickets, generates responses from a knowledge base, and routes tickets to agents — reducing manual work for support staff.

## Domain Model

**Ticket Statuses:** Open → Resolved → Closed

**Ticket Categories:** General Question, Technical Question, Refund Request

**User Roles:**
- **Admin** — seeded at deploy time; manages agents
- **Agent** — created by admin; views and manages tickets

## Key Features

- Ingest support emails and create tickets
- AI classification of ticket category
- AI-generated responses using a knowledge base
- AI summaries and suggested replies
- Ticket list with filtering/sorting
- Ticket detail view
- User management (admin only)
- Dashboard for ticket overview

## Tech Stack

**Frontend:** React 19 + TypeScript, Tailwind CSS v4 (CSS-based config via `@tailwindcss/vite`, no `tailwind.config.js`), React Router, shadcn/ui (style: base-nova, base color: neutral)

**Backend:** Node.js + Express + TypeScript, database sessions for auth

**Auth:** Better Auth — session-based, role-based (Admin / Agent)

**Database:** PostgreSQL with Prisma ORM

**AI:** Claude API (Anthropic) — classification, summaries, suggested replies

**Email:** SendGrid or Mailgun — inbound webhooks + outbound replies

**Deployment:** Docker + cloud provider (Railway, Fly.io, AWS)

**Package manager:** bun (do not use npm — it fails on this workspace setup)

## Project Structure

```
/client   — React frontend
  src/components/ui/   — shadcn components
  src/lib/utils.ts     — cn() helper
  components.json      — shadcn config
/server   — Express backend
```

## Implementation Phases

1. Project setup — monorepo, Express + React scaffolding, PostgreSQL ✅
2. Authentication — session-based login/logout, route protection ✅
3. User management — admin CRUD for agents, role-based access control
4. Ticket CRUD — API endpoints, list page (filter/sort), detail page
5. AI features — Claude API integration, classification, summary, suggested reply, knowledge base
6. Email integration — inbound webhook → ticket creation, outbound replies, threading
7. Dashboard — stats by status/category, recent tickets, quick filters
8. Polish & deployment — validation, error states, Dockerfile, Docker Compose
