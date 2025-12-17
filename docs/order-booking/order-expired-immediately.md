---
id: order-expired-immediately
title: Order Expired Immediately
---

# Order Expired Immediately

## Problem Statement
An order gets created but **expires immediately**, and no clear reason is visible in standard logs.  
PMs are unsure whether this is a config issue, segment issue, or a system bug.

---

## Symptoms
- Order status changes to `EXPIRED` immediately
- No clear expiry reason in default order logs
- Issue usually affects older or migrated segments

---

## Common Causes
1. Order was created under an **old segment**
2. **Auto-priority configuration** not applied  
   See [Auto Priority Issue](../configs/auto-priority-not-applied.md) for details
3. Segment mapping was changed after config creation
4. Configs exist but are **not approved / inactive**

---

## Step-by-Step Debugging (PM Friendly)

### Step 1: Check Order Segment
- Identify the segment at the time of order creation
- Compare with current segment mapping

👉 If the segment changed recently, configs may not apply.

---

### Step 2: Verify Auto-Priority Config
Check whether auto-priority configs exist and are approved.

Example:
- Config created when segment = `premium`
- Segment later changed to `auto`
- Result: config not applied

---

### Step 3: Check Logs

| Log Source | Why to Check |
|-----------|-------------|
| `order_logs_immutable` | Initial order request |
| `order_logs_fact` | Post-bid / post-segment info |

Look for:
- Segment mismatch
- Missing priority application
- Immediate expiry trigger  

See [Logs to Check](../data-debugging/logs-to-check.md) for detailed log guidance.

---

## Resolution
- Update auto-priority config for the **current segment**
- Re-approve configs if pending
- Re-test with a fresh order

---

## When to Escalate to Dev
Escalate **only if all below are true**:
- Segment is correct
- Configs are active & approved
- Logs show expiry without config mismatch
