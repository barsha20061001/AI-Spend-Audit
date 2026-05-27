# PROMPTS

## Purpose of LLM Usage

The audit engine itself uses deterministic pricing logic and rule-based calculations for savings recommendations.

LLM usage is limited to generating a readable AI summary for the final audit report. Financial calculations are intentionally not delegated to the LLM because pricing recommendations must remain explainable, reproducible, and defensible.

---

# Main AI Summary Prompt

```text
Generate a concise AI audit summary based on the user's AI tools, current spending, team size, and estimated savings.

Requirements:
- Keep the tone professional and practical.
- Mention estimated monthly and annual savings.
- Mention the tools involved in the audit.
- Focus on workflow efficiency and cost optimization.
- Do not invent pricing numbers.
- Do not exaggerate savings claims.
- Avoid marketing language.
```

---

# Why This Prompt Was Written This Way

The prompt was intentionally constrained to prevent hallucinated pricing or unrealistic optimization claims.

The AI is only responsible for generating readable narrative summaries, while all pricing calculations and recommendation logic are handled separately in deterministic TypeScript audit rules.

This separation improves:
- explainability
- reliability
- reproducibility
- financial accuracy

The wording also avoids overly promotional output and keeps the audit summary suitable for professional or finance-oriented review.

---

# What Was Tried That Did Not Work

## 1. Fully AI-generated pricing recommendations

Initially, the audit summary attempted to let the LLM generate both savings explanations and pricing logic.

Problems:
- inconsistent savings math
- hallucinated plan prices
- unrealistic downgrade suggestions
- recommendations that were difficult to defend

This approach was rejected.

---

## 2. Extremely short one-line summaries

Very short summaries were tested initially.

Problems:
- lacked context
- did not explain optimization reasoning
- felt generic and low quality

The final implementation instead generates concise but informative summaries.

---

## 3. Aggressive marketing-style prompts

Earlier prompts encouraged stronger persuasive language.

Problems:
- summaries sounded exaggerated
- recommendations became less trustworthy
- output felt less professional

The final version uses a more neutral and finance-oriented tone.

---

# Final Design Decision

The final architecture separates:
- deterministic audit calculations
- LLM-generated human-readable summaries

This keeps the pricing engine transparent while still improving readability and user experience.