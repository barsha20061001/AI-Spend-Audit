# REFLECTION

## 1. What would you improve if you had 2 more weeks?

If I had two additional weeks, the first thing I would improve is the intelligence of the recommendation engine. Right now the system uses deterministic pricing and optimization rules because I wanted recommendations to remain explainable and predictable. But with more time, I would build a hybrid approach where AI explains the recommendation while the pricing math still stays deterministic underneath.

I would also improve the onboarding and audit UX. During testing, I realized users hesitate when manually entering AI spend data because most people do not actually know how much they spend monthly across subscriptions and APIs. I would solve this by integrating billing imports from Stripe, GitHub, OpenAI, or Google Workspace to automatically estimate spend.

Another major improvement would be historical spend tracking. Currently the app focuses on one-time audits and shared reports. With more time, I would build recurring monitoring where teams receive alerts when their AI costs suddenly spike or when new pricing plans become cheaper.

I would also add role-based dashboards for engineering managers and finance teams. One surprising thing I learned while doing interviews is that developers care about productivity while managers care about predictability and cost visibility. The current version is more optimized for individual users than organizations.

Finally, I would improve production hardening. The app already has tests, CI/CD, deployment, and database integration, but I would add stronger abuse protection, transactional emails, analytics dashboards, and more complete observability.

---

## 2. What was the hardest technical decision?

The hardest technical decision was deciding how much AI should actually be used in the product.

Initially I thought the audit recommendations themselves should be fully AI-generated. But after researching pricing models, I realized that AI-generated savings calculations could easily become inconsistent or hallucinate recommendations that were not financially accurate.

Because this product deals with pricing and cost optimization, explainability mattered more than creativity. So I redesigned the architecture around deterministic audit rules and used AI mainly for summarization and explanation layers.

For example:
- pricing comparisons are rule-based
- savings calculations are deterministic
- optimization suggestions follow predefined thresholds
- AI is used to generate human-readable summaries

This decision made the product more reliable and easier to test. It also simplified unit testing because outputs became predictable.

Another difficult decision was balancing scope vs quality. The PDF had many requirements across product thinking, engineering, GTM, metrics, economics, deployment, and documentation. I had to avoid overengineering features and instead prioritize a stable end-to-end product.

---

## 3. What did you learn from user interviews?

The biggest thing I learned is that most users do not intentionally optimize AI spending. They usually accumulate subscriptions over time without periodically reevaluating whether they still need them.

One interviewee mentioned paying for both ChatGPT Plus and Claude Pro while mainly using only one of them regularly. Another user had a high-tier coding assistant plan mainly because “everyone on the team used it,” even though their actual usage was limited.

I also learned that users do not want raw pricing spreadsheets. They want actionable recommendations with minimal friction. People preferred statements like:
- “You can probably downgrade safely”
- “Your current setup already looks efficient”
- “This API spend looks unusually high for your team size”

instead of large financial dashboards.

Another important learning was trust. Several interviewees said they would not blindly trust AI-generated savings recommendations unless the logic was transparent. That directly influenced the design of the recommendation engine and why I chose deterministic rules for pricing decisions.

Finally, interviews changed my thinking about positioning. Initially I thought the product was mainly for developers, but conversations suggested that engineering managers and startup founders may actually feel the strongest pain around AI cost visibility.

---

## 4. What would make this a real business?

For this to become a real business, the biggest requirement would be automatic data integrations.

Right now users manually enter spend information, which works for validation and demos but does not scale well for long-term retention. Real companies would expect integrations with:
- OpenAI billing
- Anthropic API billing
- GitHub
- Stripe
- Google Workspace
- AWS/GCP/Azure invoices

Once spend data becomes automated, the product becomes much more valuable because users can continuously monitor costs instead of running one-time audits.

The second important requirement would be benchmarking. Companies want context, not just numbers. A real business version should answer questions like:
- “Are we overspending compared to similar startups?”
- “What is normal AI spend per engineer?”
- “Which tools provide the best ROI?”

Another growth opportunity would be procurement optimization. Instead of only suggesting downgrades, the platform could negotiate enterprise credits, recommend bundled contracts, or surface promotional pricing opportunities.

I also think the strongest monetization model would probably be B2B SaaS rather than consumer subscriptions. Small engineering teams and startups seem more likely to pay for recurring monitoring, optimization alerts, and reporting dashboards.

---

## 5. What are you most proud of?

I am most proud that the project became a complete end-to-end product instead of just a prototype UI.

The final system includes:
- real deployment
- CI/CD workflow
- automated tests
- database integration
- public shareable audit pages
- lead capture
- AI-generated summaries
- pricing research
- documentation
- product strategy artifacts

One thing I particularly liked was solving the deployment and build stability issues near the end. I ran into multiple GitHub Actions failures, TypeScript build issues, and deployment memory problems. Initially I underestimated how much time production hardening would take compared to feature development.

I am also proud that the project balances engineering and product thinking. The assignment was not only about coding — it also required understanding user pain points, business viability, pricing logic, and growth strategy.

Overall, I think the strongest part of the project is that it feels like a believable early-stage SaaS product rather than only an internship assignment submission.