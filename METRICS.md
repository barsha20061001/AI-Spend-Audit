# METRICS

## North Star Metric

### High-Savings Qualified Audits Per Week

Definition:
The number of completed audits identifying meaningful optimization opportunities (>$500/month estimated savings) from real startup teams.

This is the best North Star metric because:
- it measures actual product usefulness
- it aligns directly with Credex’s business model
- it filters out low-intent traffic
- it measures both product quality and lead quality

A random visitor does not matter much unless the audit reveals actionable savings.

---

## Input Metrics

### 1. Audit Completion Rate

Definition:
Percentage of users who start the audit and successfully reach the results page.

Why it matters:
If users abandon the flow before results appear, the onboarding or form complexity is likely too high.

Target:
```text
>60%
```

---

### 2. Lead Capture Rate

Definition:
Percentage of completed audits that submit email/contact information.

Why it matters:
Measures whether users found enough value in the audit to continue engagement.

Target:
```text
15–25%
```

---

### 3. Shareable Report Usage

Definition:
Percentage of completed audits where users:
- copy the public audit link
- share results
- revisit the report

Why it matters:
This product depends heavily on organic and internal sharing behavior.

If users are embarrassed or unimpressed by the audit, they will never share it.

Target:
```text
>10%
```

---

## What I Would Instrument First

The first analytics events I would track are:

### Funnel Events
- landing_page_view
- audit_started
- audit_completed
- lead_submitted
- consultation_clicked
- share_link_copied

### Product Quality Signals
- average estimated savings
- percentage of “already optimized” audits
- most common overspending patterns
- most common tool combinations

These metrics would quickly reveal:
- where users drop off
- whether recommendations feel valuable
- whether the viral loop is working

---

## What Triggers A Pivot?

The biggest pivot trigger would be:

```text
High audit completion but low lead capture
```

That would suggest:
- users are curious
- but recommendations are not valuable enough to continue engagement

Another major warning sign would be:

```text
Very few high-savings audits
```

If most users only save:
```text
$10–30/month
```

then the product probably lacks enough economic value to become a meaningful business.

In that case, the product might need to pivot toward:
- enterprise monitoring
- API optimization
- benchmarking
- procurement workflows

instead of lightweight one-time audits.

---

## Long-Term Metrics

If the product scaled, I would eventually track:
- recurring monthly active organizations
- retained teams after 30/60/90 days
- average monitored AI spend
- consultation-to-purchase conversion
- revenue influenced by audits

At larger scale, retention and recurring monitoring would matter much more than raw traffic volume.