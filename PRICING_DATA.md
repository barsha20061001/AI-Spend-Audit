# ARCHITECTURE

## Stack Choice

I chose Next.js with TypeScript and Tailwind CSS because the assignment requires:
- Shareable public URLs
- Strong SEO/Open Graph support
- Fast UI iteration
- Good developer experience
- Easy deployment on Vercel

TypeScript was chosen to make the audit engine safer and easier to test.

Tailwind CSS allows fast custom UI development without relying on prebuilt admin templates.

## Planned Backend

- Frontend: Next.js
- Database: Supabase PostgreSQL
- Email Service: Resend
- Deployment: Vercel
- AI Summary Generation: Anthropic or OpenAI API

## Planned Data Flow

```mermaid
flowchart TD

A[User Opens Landing Page]
--> B[Inputs AI Tools + Spend Data]

B --> C[Audit Engine]

C --> D[Calculate Savings]
C --> E[Generate Recommendations]

D --> F[Audit Results Page]
E --> F

F --> G[AI Summary Generator]

G --> H[Display Final Audit]

H --> I[Lead Capture Form]

I --> J[Store in Database]
I --> K[Send Confirmation Email]

H --> L[Generate Shareable Public URL]