# PRICING_DATA

Pricing verified: 2026-05-26  
Currency: USD unless otherwise stated.

> Note: Enterprise plans are treated as “custom/contact sales” when the vendor does not publish fixed self-serve pricing. API pricing is usage-based, so the audit engine uses user-entered monthly spend and compares it against optimization rules rather than assuming a fixed subscription price.

---

## Cursor

Source: https://cursor.com/pricing  
Verified: 2026-05-26

- Hobby / Free: $0/month
- Pro: $20/month
- Business: $40/user/month
- Enterprise: Custom / contact sales

Notes:
Cursor’s pricing page describes self-serve plans and directs invoice-based or enterprise billing to sales.

---

## GitHub Copilot

Sources:
- https://github.com/features/copilot/plans
- https://docs.github.com/en/copilot/get-started/plans
- https://docs.github.com/copilot/get-started/choosing-your-enterprises-plan-for-github-copilot

Verified: 2026-05-26

- Free: $0/month
- Copilot Pro: $10/user/month
- Copilot Pro+: $39/user/month
- Copilot Business: $19/user/month
- Copilot Enterprise: $39/user/month

Notes:
The audit engine maps:
- Individual → Copilot Pro: $10/user/month
- Business → $19/user/month
- Enterprise → $39/user/month

---

## Claude

Sources:
- https://claude.com/pricing
- https://support.claude.com/en/articles/11049762-choose-a-claude-plan

Verified: 2026-05-26

- Free: $0/month
- Pro: $20/month
- Max 5x: $100/month
- Max 20x: $200/month
- Team: vendor-listed team plan / per-seat pricing varies by plan and billing
- Enterprise: Custom / contact sales

Notes:
Claude API is billed separately from Claude subscription plans.

---

## Claude / Anthropic API Direct

Source: https://platform.claude.com/docs/en/about-claude/pricing  
Verified: 2026-05-26

Representative API pricing:
- Claude API pricing is usage-based and depends on the selected model and token usage.
- Anthropic publishes official pricing at:
  https://platform.claude.com/docs/en/about-claude/pricing

Notes:
The audit engine treats Anthropic API usage as variable monthly spend instead of assuming a fixed subscription cost.

Notes:
The audit engine treats Anthropic API direct as usage-based and evaluates user-entered monthly API spend rather than assuming a fixed seat price.

---

## ChatGPT

Sources:
- https://chatgpt.com/pricing/
- https://openai.com/business/chatgpt-pricing/
- https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus

Verified: 2026-05-26

- Free: $0/month
- Plus: $20/user/month
- Business / Team-style plan: priced per user per month on OpenAI pricing page
- Enterprise: Custom / contact sales
- API direct: billed separately from ChatGPT subscriptions

Notes:
The audit engine maps small-team paid usage to the $20/user/month Plus benchmark unless the user enters higher team or API spend.

---

## OpenAI API Direct

Source: https://openai.com/api/pricing/  
Verified: 2026-05-26

Representative API pricing:
- API pricing is token-based and varies by model.
- OpenAI states API billing is separate from ChatGPT subscriptions.
- The audit engine uses user-entered monthly API spend and flags unusually high API spend relative to team size or use case.

Notes:
Because OpenAI API costs vary heavily by model and volume, fixed monthly pricing is not assumed.

---

## Gemini

Sources:
- https://gemini.google/subscriptions/
- https://one.google.com/intl/en_in/about/google-ai-plans/
- https://ai.google.dev/gemini-api/docs/pricing

Verified: 2026-05-26

- Gemini / Google AI Pro: subscription pricing varies by region
- Google AI Ultra: subscription pricing varies by region and tier
- Gemini API: usage-based pricing through Google AI Developer API

Notes:
The audit engine treats Gemini Pro / Ultra as subscription-style plans and Gemini API as usage-based.

---

## Windsurf

Source: https://windsurf.com/pricing  
Verified: 2026-05-26

- Free: $0/month
- Pro: $20/month
- Max: $200/month
- Teams: $40/user/month
- Enterprise: Custom / contact sales

Notes:
Windsurf was selected as the required additional AI coding tool beyond the minimum list.

---

# How pricing is used in the audit engine

The audit engine uses these numbers to estimate whether:
- the user is on a plan too expensive for their team size
- the user could downgrade to a cheaper plan from the same vendor
- API spend appears high relative to team size and use case
- a team is spending enough that discounted AI credits or a Credex consultation may be relevant

The audit engine intentionally uses deterministic rules for savings calculations instead of AI-generated math, because pricing recommendations need to be explainable and defensible.