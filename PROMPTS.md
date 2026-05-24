# PROMPTS

## AI Summary Prompt

The audit summary generator receives:
- Total monthly savings
- Total annual savings
- Recommended actions for each tool

The goal is to produce:
- A concise executive-style summary
- Roughly 80–120 words
- Clear and financially credible language
- No exaggerated claims

## Why deterministic audit logic was preferred

The savings calculations themselves are rule-based rather than AI-generated because pricing recommendations need to remain explainable, testable, and financially defensible.

AI is only used for:
- summarization
- tone improvement
- readability

## Fallback handling

If AI generation fails, the app falls back to a templated summary so the audit flow never breaks.

