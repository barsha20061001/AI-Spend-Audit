# StackSaver AI

StackSaver AI is an AI spend audit platform built for startups, engineering teams, and growing SaaS companies. It analyzes AI tooling usage, detects unnecessary spending, and provides actionable optimization recommendations to reduce infrastructure and subscription costs. The platform also includes benchmark comparisons, shareable reports, and lead-capture workflows for high-savings opportunities.

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

OPENAI_API_KEY=your_openai_api_key

RESEND_API_KEY=your_resend_api_key

NEXT_PUBLIC_APP_URL=http://localhost:3000
```
---

### Environment Variable Notes

- `NEXT_PUBLIC_SUPABASE_URL` → Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Public anonymous API key from Supabase
- `OPENAI_API_KEY` → Used for AI-generated audit summaries and optimization recommendations
- `RESEND_API_KEY` → Used for transactional email delivery
- `NEXT_PUBLIC_APP_URL` → Base application URL for local/deployed environments

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

## Deployment

The project is deployed on Vercel.

Production deployment:
https://your-vercel-url.vercel.app

To deploy manually:

```bash
npm run build
```

---

## Decisions

1. **Next.js + React instead of plain HTML/CSS/JS**  
   I chose Next.js because the app needed routing for shareable audit URLs, API routes for AI summary/email, and easy Vercel deployment. The trade-off is slightly more setup, but it gives a cleaner full-stack structure.

2. **Deterministic audit rules instead of AI for pricing math**  
   I used hardcoded pricing rules for savings calculations because pricing recommendations must be explainable and defensible. AI is only used for the personalized summary, not the financial math.

3. **Supabase for lead/storage backend**  
   I chose Supabase because it is quick to set up, supports real database persistence, and works well with a serverless frontend. The trade-off is managing environment variables and table policies correctly.

4. **Resend for transactional email**  
   I used Resend because it has a simple API and a free tier suitable for confirmation emails. In development, sandbox/domain restrictions may limit delivery, but the implementation is production-ready once a verified domain is attached.

5. **Tailwind CSS instead of a prebuilt website builder/template**  
   I used Tailwind to build the UI manually and keep full control over layout, responsiveness, and visual quality. This avoids website-builder limitations while still allowing fast styling.

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

## Screenshots

### Landing Page
![Landing Page](<img width="1916" height="1015" alt="Landing Page" src="https://github.com/user-attachments/assets/57bdce8e-1d22-4751-84bd-917fce550737" />)

### Audit Flow
![Audit Flow](  <img width="1918" height="970" alt="Audit Flow" src="https://github.com/user-attachments/assets/2bc56752-29a1-479d-976b-073c934ca732" />)

### Audit Results
![Audit Results](image-link)

### Transactional Email
![Transactional Email](image-link)

### GitHub Actions CI
![GitHub Actions CI](image-link)

### Lighthouse / PageSpeed Results
![PageSpeed Results](image-link)

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
