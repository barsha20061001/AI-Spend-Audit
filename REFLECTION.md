# REFLECTION

## 1. Hardest bug I hit this week

The hardest bug I hit was the Supabase permission issue during lead capture. The frontend form looked correct, but when I submitted data, the app kept showing “permission denied for table leads.” Initially I thought the problem was in my Supabase URL or anon key, because the request was reaching Supabase but still failing.

Then I checked the browser console and Supabase table editor more carefully. What I found was that the table existed, but Row Level Security was blocking public inserts. I tried creating policies manually through Supabase, but the issue still continued because I had enabled RLS without creating the exact insert policy for the anon role.

The fix was to create a proper insert policy for the `leads` table and verify it by submitting the live form again. Once I saw the row appear in Supabase, I knew the frontend-to-backend flow was working.

One thing I learned is that backend permission bugs can look like frontend bugs at first. In this case, the UI was fine, but the database security layer was rejecting the request.

---

## 2. A decision I reversed mid-week

Initially I wanted the audit recommendations to feel very “AI-powered.” My first thought was that the AI should generate most of the recommendation logic. But while building the project, I realized that this would be risky because AI can produce inconsistent or vague pricing suggestions.

Since the product deals with money, savings, and plan recommendations, the logic needed to be explainable. A user should be able to understand why a tool is being flagged as overpriced or why a downgrade is suggested.

So I reversed the decision and made the audit engine deterministic. The pricing and savings calculations now come from rule-based logic, while AI is only used for summarizing the result in a more readable way.

This made the project easier to test too. The Vitest tests can check whether savings calculations and recommendations work correctly because the output is predictable.

That reversal made the product stronger because it separated financial logic from natural language explanation.

---

## 3. What I would build in week 2

In week 2, I would first improve the backend and make the audit storage more complete. Right now the MVP stores leads and audit-related data, but a production version should have cleaner audit history, user sessions, and a proper dashboard.

I would also add real transactional email using Resend or Postmark. The current architecture documents this flow, but a production version should send users a confirmation email with their audit link and savings summary.

Another thing I would build is a benchmark mode. For example, the app could show “your AI spend per developer is $X” and compare it against similar startups. That would make the recommendation feel more useful than just showing raw savings.

I would also improve the LLM summary by connecting it to a real production LLM provider with better fallback handling. The math should stay deterministic, but the explanation could become more personalized.

Finally, I would add analytics events for audit started, audit completed, lead submitted, and share link copied. That would help understand where users drop off.

---

## 4. How I used AI tools

I used AI tools mainly as a coding assistant and debugging helper. I used ChatGPT to break down the assignment requirements, plan the project structure, write initial documentation drafts, and debug errors during implementation.

I did not blindly trust AI for the pricing logic. Since pricing accuracy matters in this assignment, I treated AI suggestions as drafts and manually checked whether the logic made sense. I also used deterministic rules instead of asking AI to calculate savings directly.

One specific time AI was wrong was during the GitHub Actions and lint setup. The first CI workflow looked fine, but it failed because lint errors were stricter in CI than expected. I had to inspect the actual GitHub Actions logs and adjust the workflow based on the real error instead of just trusting the generated setup.

AI was useful for speed, but I still had to verify code, test behavior locally, and check the deployed app manually.

Overall, AI helped me move faster, but the final decisions around architecture, pricing logic, and tradeoffs were made by checking what the product actually needed.

---

## 5. Self-rating

### Discipline — 9/10
I worked across multiple days, pushed progress regularly, and kept improving the project after each issue instead of stopping at the first working version.

### Code quality — 8/10
The code is readable and typed, with separated audit logic and tests, but some parts could be cleaner if I had more time.

### Design sense — 8/10
The UI is polished enough for an MVP and the results page feels shareable, but I would improve spacing, screenshots, and mobile polish further.

### Problem-solving — 9/10
I debugged Supabase RLS issues, CI failures, deployment problems, and TypeScript errors by checking logs and narrowing down causes step by step.

### Entrepreneurial thinking — 8/10
I tried to think beyond code by writing GTM, economics, metrics, user interviews, and positioning the tool as a real lead-generation product for Credex.