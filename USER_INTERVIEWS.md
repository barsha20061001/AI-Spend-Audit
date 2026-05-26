# USER_INTERVIEWS

## Interview 1

### Person
Rohit Sinha — Software Engineer at a mid-stage SaaS company (~80 employees)

### Context
The interview lasted around 15 minutes over chat. The user works on backend systems and regularly uses AI coding tools individually while their company also pays for team subscriptions.

### Direct Quotes

> “I honestly don’t know how much we spend on AI tools combined anymore.”

> “A lot of people on the team buy tools individually because approvals are fast.”

> “We probably have overlap between Cursor, Copilot, and ChatGPT subscriptions.”

> “Enterprise plans sound useful during onboarding, but later most people use maybe 20% of the features.”

### Most Surprising Thing

The most surprising part was that the engineer said AI tooling costs are usually treated as “small enough to ignore” until they suddenly become noticeable at team scale.

I expected developers to think mostly about productivity improvements, but the conversation revealed that cost visibility is almost nonexistent in many teams.

### What It Changed About My Design

Initially I planned to focus heavily on advanced analytics dashboards.

After this conversation, I prioritized:
- simple onboarding
- instant recommendations
- clear savings explanations
- shareable reports

because users first want visibility before they want deep analytics.

---

## Interview 2

### Person
Yashi — Indie hacker and freelance developer running small client projects

### Context
The conversation happened over whatsapp and lasted roughly 10–12 minutes.

### Direct Quotes

> “I subscribe to tools for projects and sometimes forget they’re still billing me.”

> “I upgraded plans before because everyone online said they were worth it.”

> “Most AI tools are becoming similar enough that it’s hard to justify paying for multiple.”

> “If your app honestly tells me I’m already optimized, I’d trust it more.”

### Most Surprising Thing

The user specifically said that exaggerated savings recommendations would reduce trust immediately.

That changed how I thought about the “already optimized” state. Initially I wanted every audit to surface savings opportunities, but after this interview I intentionally added logic where some users are told their setup already looks reasonable.

### What It Changed About My Design

This conversation changed:
- recommendation honesty
- UX copy tone
- fallback states

I focused more on credibility rather than maximizing apparent savings.

---

## Interview 3

### Person
kunal Sutradhar — Technical lead at a small agency (~15 people)

### Context
This conversation happened through LinkedIn chat and focused mainly on team-wide AI usage.

### Direct Quotes

> “Different developers buy AI tools independently and nobody tracks the combined cost.”

> “The real problem isn’t one expensive subscription — it’s subscription sprawl.”

> “API costs are harder to understand than subscription costs.”

> “A dashboard showing spend per developer would actually be useful.”

### Most Surprising Thing

The most surprising insight was that the technical lead cared more about predictability than absolute cost reduction.

I originally assumed users mainly wanted lower bills, but this conversation showed that visibility and forecasting may actually matter more for teams.

### What It Changed About My Design

This interview influenced:
- future dashboard ideas
- benchmark concepts
- recurring monitoring direction

It also reinforced the decision to keep public shareable audit URLs because agency teams often discuss tooling decisions collaboratively.

---

# Overall Learnings

Across all three interviews, the strongest recurring themes were:
- overlapping subscriptions
- lack of centralized visibility
- uncertainty around enterprise plan value
- forgotten or underused subscriptions
- difficulty understanding API spend

The biggest product insight was that users care more about:
- trustworthy recommendations
- clarity
- visibility
- simplicity

than aggressive optimization claims.

The interviews also reinforced that this product is probably more valuable for:
- engineering managers
- startup founders
- small technical teams

than purely individual consumers.