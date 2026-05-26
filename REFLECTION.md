# REFLECTION

## What Went Well

The strongest part of this project was building the core audit experience end-to-end. The combination of deterministic savings logic, AI-generated summaries, public shareable reports, and Supabase persistence helped the product feel closer to a real startup MVP rather than a simple internship assignment.

The GitHub Actions CI setup and automated testing also improved confidence while iterating quickly near the deadline.

---

## Biggest Challenges

The hardest technical challenge was backend integration and Supabase permission handling. Debugging Row Level Security (RLS) issues took significant time because frontend requests were failing silently until proper policies and permissions were configured.

Another challenge was balancing realism with simplicity in the audit engine. Generic savings recommendations quickly felt fake, so the logic had to become more tool-specific and financially believable.

---

## What I Would Improve Next

If I continued developing the project, I would:

- move audit persistence fully to the backend instead of partial localStorage usage
- integrate real pricing APIs
- add authentication and user dashboards
- support organization-wide AI spend analytics
- improve AI-generated summaries using real LLM APIs
- add historical tracking and spend forecasting

---

## Product Insights

Building this project reinforced how important trust is in financial recommendation products. Showing honest “already optimized” states was often more valuable than exaggerating savings.

I also learned that small UX details such as loading states, CI reliability, public share pages, and polished documentation significantly improve perceived product quality.

---

## Final Thoughts

This project was intentionally more entrepreneurial than a traditional coding assignment, which made it both challenging and enjoyable. It required balancing engineering, product thinking, UX, reliability, and business reasoning within a short timeframe.