# Bulk Upload Failures

## Problem Statement
Bulk upload fails even though the file format looks correct.

---

## Common Causes
- Incorrect CSV hierarchy
- Missing mandatory columns
- Invalid data types (string vs number)
- Extra spaces or special characters

---

## How to Debug
1. Verify column names match the template
2. Check hierarchy order
3. Validate data types
4. Remove empty rows

---

## When to Escalate
Escalate only if:
- Template is followed exactly
- Data validation passes
- Error persists
