# DEVLOG

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

