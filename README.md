# StackSaver AI

AI spend audit platform that helps startups and engineering teams identify unnecessary AI subscription and API costs through automated audits and optimization recommendations.

---

# Overview

StackSaver AI analyzes a team's AI tooling stack and identifies:
- overlapping subscriptions
- overpriced plans
- inefficient AI spending
- optimization opportunities

The goal is to provide quick, understandable, and financially realistic recommendations without requiring billing integrations.

---

# Features

- AI spend audit workflow
- Tool-specific optimization recommendations
- Monthly and annual savings calculations
- Honest “already optimized” states
- AI-generated executive summaries
- Shareable public audit URLs
- Lead capture and persistence with Supabase
- Automated tests with Vitest
- GitHub Actions CI integration
- Mobile-responsive UI
- Open Graph metadata support

---

# Supported AI Tools

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- OpenAI API
- Anthropic API
- Gemini
- Windsurf

---

# Tech Stack

## Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS

## Backend / Database
- Supabase

## Testing
- Vitest

## CI/CD
- GitHub Actions

## Deployment
- Vercel

---

# Architecture

## Frontend
The frontend is built using Next.js App Router with reusable React components for:
- audit forms
- result rendering
- lead capture
- shareable reports

## Audit Engine
The audit engine uses deterministic rule-based logic instead of fully AI-generated recommendations. This keeps savings calculations:
- explainable
- testable
- financially believable

AI is only used for summary-style narrative generation.

## Persistence Layer
Supabase is used for:
- lead capture
- audit persistence
- backend storage

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/barsha20061001/AI-Spend-Audit.git
cd AI-Spend-Audit
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# Running Locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Running Tests

```bash
npm test
```

---

# CI/CD

GitHub Actions automatically runs tests on every push to the `main` branch.

Workflow file:

```text
.github/workflows/ci.yml
```

---

# Product Thinking

The project was intentionally designed as:
- a lightweight startup MVP
- not just a coding assignment

Important product decisions:
- instant onboarding
- no billing account connection required
- explainable recommendations
- shareable audit reports
- honest low-savings states

---

# User Insights

User interviews revealed common problems:
- overlapping subscriptions
- hidden AI costs
- unclear enterprise plan value
- lack of centralized visibility

Most users preferred:
- quick onboarding
- transparent recommendations
- continuous spend monitoring

---

# Automated Testing

The project includes automated tests for:
- overspending detection
- annual savings calculation
- recommendation logic
- optimized-state handling

Test file:

```text
tests/audit.test.ts
```

---

# Future Improvements

- Organization dashboards
- Real-time spend monitoring
- Historical analytics
- Authentication
- API usage optimization
- Team collaboration features
- Advanced AI-generated recommendations

---

# Screenshots

## Landing Page
(Add screenshot here)

## Audit Flow
(Add screenshot here)

## Audit Results
(Add screenshot here)

## Lead Capture
(Add screenshot here)

## GitHub Actions CI
(Add screenshot here)

---

# Live Demo

Deployed on Vercel.

(https://ai-spend-audit-sigma-navy.vercel.app/)

---

# Repository

GitHub Repository:

https://github.com/barsha20061001/AI-Spend-Audit

---

# Author

Barsha Mondal
