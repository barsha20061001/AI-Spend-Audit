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



## Transactional Email

The intended transactional email flow is:

1. User completes audit.
2. User submits email after seeing audit value.
3. Lead data is stored in Supabase.
4. A confirmation email is sent through a transactional email provider such as Resend, Postmark, or AWS SES.

For this submission, Supabase persistence and lead capture are fully implemented. The transactional email integration is documented as the next production-ready step because email delivery requires verified sender/domain configuration and provider setup.

The planned email contents include:
- audit completion confirmation
- estimated savings summary
- public audit report link
- Credex consultation CTA for high-savings cases


## Abuse Protection

A honeypot field is implemented in the lead capture form as lightweight abuse protection.

The hidden field is invisible to normal users but may be filled by automated bots. If the honeypot field contains any value, the submission is ignored before database insertion.

This approach was chosen because:
- it adds zero friction for users
- requires no external CAPTCHA service
- works well for lightweight MVP-style products
- keeps the onboarding flow simple

