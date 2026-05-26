# DEVLOG
## Day 0 — 2026-05-22

**Hours worked:** 2

**What I did:**  
Initialized the project repository, reviewed the assignment requirements, explored potential product directions, and finalized the initial stack choice using Next.js, TypeScript, and Tailwind CSS. I also completed the initial project setup and GitHub configuration.

**What I learned:**  
The assignment emphasizes product thinking and consistency much more than traditional coding rounds.

**Blockers / what I'm stuck on:**  
Still deciding how detailed the audit engine and pricing logic should become while keeping the MVP manageable.

**Plan for tomorrow:**  
Start building the landing page, spend input flow, and overall project structure.


## Day 1 — 2026-05-23

**Hours worked:** 4

**What I did:**  
I carefully read the Credex assignment and identified the main evaluation areas: entrepreneurial thinking, engineering quality, consistency, and product polish. I initialized a Next.js + TypeScript + Tailwind project, connected the GitHub repository, resolved git merge conflicts during initial setup, and built the first version of the landing page for the AI Spend Audit tool. I also created the initial spend input form and started organizing the project structure for future audit engine logic.

**What I learned:**  
This assignment is much more product-oriented than a normal coding task. The README, DEVLOG, pricing accuracy, and overall thought process are as important as the code itself. I also learned the importance of starting commits early because the assignment programmatically checks consistency across multiple days.

**Blockers / what I'm stuck on:**  
The biggest challenge currently is designing audit logic that feels financially credible instead of random recommendation logic. I also need to verify official pricing pages carefully because every pricing number must be traceable.

**Plan for tomorrow:**  
Build the pricing data structure, create the first version of the audit engine, and support multiple AI tools dynamically in the form. I also plan to start writing automated tests for the savings calculations.

## Day 2 — 2026-05-24

**Hours worked:** 5

**What I did:**  
Today I focused on the core product logic instead of visual polish. I built the first working version of the audit engine with deterministic recommendation rules for AI tools like ChatGPT, Cursor, Claude, GitHub Copilot, Gemini, and API-based usage. I added monthly and annual savings calculations, dynamic audit results rendering, conditional Credex consultation prompts for high-savings users, and “already optimized” states for low-savings cases. I also added localStorage persistence so form data survives reloads.

**What I learned:**  
I realized that believable financial recommendations are much harder than building UI. Generic “save money” logic feels fake very quickly, so I started making the audit rules more tool-specific and usage-aware. I also learned that honest “you’re already optimized” messaging increases trust in the product.

**Blockers / what I'm stuck on:**  
The biggest challenge is balancing simplicity with credibility. I don’t want the audit engine to become overly complex, but recommendations still need to feel grounded and financially defensible.

**Plan for tomorrow:**  
Implement shareable audit result pages, improve the visual polish of the results dashboard, and add AI-generated personalized summaries with fallback handling.

## Day 3 — 2026-05-25

**Hours worked:** 5

**What I did:**  
Today I focused on turning the audit tool into a more complete internet product rather than just a local calculator. I implemented shareable public audit pages using dynamic routing and UUID-based URLs. Audit results are now persisted locally and can be reopened through unique links. I also added AI-generated executive summaries with graceful fallback handling, social sharing actions, metadata/Open Graph support, and improved loading + empty states for better user experience.

**What I learned:**  
I learned how dynamic routing and client-side persistence can make a prototype feel much closer to a production SaaS product. I also realized that even small UX details like loading states, metadata, and public share pages significantly improve perceived product quality.

**Blockers / what I'm stuck on:**  
The current share system uses local browser storage, so public links are device-specific for now. In the future I would move audit persistence to a real backend/database layer.

**Plan for tomorrow:**  
Implement backend persistence, lead capture flows, and database-backed audit storage with basic abuse protection.

## Day 4 — 2026-05-25

**Hours worked:** 9

**What I did:**  
Today I focused on both backend integration and engineering reliability. I connected the application to Supabase, configured environment variables, created database tables for leads and audits, and implemented lead capture functionality directly inside the audit flow. I debugged multiple Row Level Security (RLS) and permission issues before successfully verifying frontend-to-database inserts.  

After stabilizing the backend flow, I shifted focus toward engineering quality. I set up Vitest for automated testing, added multiple audit engine test cases covering savings calculations and recommendation logic, and configured GitHub Actions CI to automatically run tests on every push. I also fixed several TypeScript/linting issues and improved overall project stability.

**What I learned:**  
I learned how backend permissions, RLS policies, and frontend integrations interact in real production-style systems. I also realized how important automated testing and CI pipelines are for maintaining confidence while iterating quickly. Debugging CI workflows taught me that even small environment or linting mismatches can break deployments.

**Blockers / what I'm stuck on:**  
The biggest challenge today was resolving Supabase permission issues and stabilizing GitHub Actions workflows across different environments while keeping the project structure simple and maintainable.

**Plan for tomorrow:**  
Finalize deployment, improve documentation, prepare screenshots/demo assets, and practice clearly explaining the architecture and product decisions for interviews and final submission.

# Day 5 – Testing, CI/CD, Deployment 

## What I Worked On
Today I focused on making the AI Spend Audit project production-ready by adding automated testing, CI workflow, deployment setup, and fixing final frontend issues.

---

## Testing & CI/CD
- Created audit engine unit tests using Vitest
- Added GitHub Actions CI workflow
- Fixed multiple linting and TypeScript issues
- Resolved failing GitHub Actions workflow errors
- Verified all tests pass successfully

### Test Coverage Added
- Detects ChatGPT Team overspend
- Detects GitHub Copilot Enterprise overspend
- Detects Cursor Business downgrade opportunities
- Calculates annual savings correctly
- Returns optimized state for healthy spend

---

## Deployment
- Connected GitHub repository with Vercel
- Added Supabase environment variables
- Fixed deployment build/type issues
- Solved Turbopack/Webpack memory issues
- Successfully deployed production version

### Live Deployment
https://ai-spend-audit-sigma-navy.vercel.app/

---

## Frontend & UX Improvements
- Fixed “Copy Shareable Link” functionality
- Added waitlist/join notification interaction
- Improved result page interaction flow
- Fixed public audit share page rendering
- Verified responsive/mobile layout

---

## Documentation Updates
Updated:
- README.md
- DEVLOG.md
- TESTS.md
- USER_INTERVIEWS.md

---

## Key Learnings
- GitHub Actions debugging and CI setup
- Handling Next.js deployment errors
- Managing environment variables securely
- Fixing TypeScript production build issues
- Importance of testing before deployment

---

## Final Status
✅ Tests passing  
✅ CI workflow working  
✅ Supabase integration working  
✅ Deployment successful  
✅ Public audit links working  
✅ Submission-ready build completed