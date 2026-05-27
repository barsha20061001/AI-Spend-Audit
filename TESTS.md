# TESTS

## Automated Test Files

### File: `tests/audit.test.ts`

This file contains automated tests for the audit engine logic.

---

## Tests Included

### 1. ChatGPT Team overspending detection
**Covers:**  
Checks whether small teams on expensive ChatGPT Team-style pricing are flagged for possible downgrade recommendations.

---

### 2. Cursor Business downgrade recommendation
**Covers:**  
Verifies that small teams using Cursor Business are recommended a lower-cost Cursor Pro plan when appropriate.

---

### 3. Claude Max optimization recommendation
**Covers:**  
Checks whether smaller teams using Claude Max receive optimization or lower-cost workflow recommendations.

---

### 4. GitHub Copilot Enterprise downgrade logic
**Covers:**  
Verifies that smaller engineering teams on Copilot Enterprise are recommended Copilot Business where enterprise controls are unnecessary.

---

### 5. Annual savings calculation
**Covers:**  
Ensures annual savings are correctly calculated from monthly savings values returned by the audit engine.

---

### 6. Healthy/optimized spend case
**Covers:**  
Verifies that tools already on cost-effective plans return “Current setup looks optimal” instead of false downgrade recommendations.

---

## How to Run Tests

Install dependencies:

```bash
npm install













