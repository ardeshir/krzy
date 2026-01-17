# Blueprint Self-Critique Checklist

**Before implementing any blueprint, answer these questions.**

This checklist was extracted from the GDL Integration Blueprint because the self-critique questions were buried on page 10 of 12. That's a design failure. These questions should be answered *first*, not found *last*.

---

## The Core Question

> **Is this blueprint necessary, or is it elaborate procrastination?**

---

## 1. Necessity Check

- [ ] Does this solve a problem that actually exists today?
- [ ] Or does it solve a hypothetical future problem?
- [ ] Could a simpler solution work?
- [ ] What's the minimum viable version?

**Red flag:** If you can't name a specific, current problem this solves, stop.

---

## 2. Who Benefits?

- [ ] Who specifically benefits from this implementation?
- [ ] Is it the builder (learning, resume, satisfaction)?
- [ ] Is it hypothetical future users?
- [ ] Is it current users? (Do they exist?)

**Red flag:** If benefits flow mostly to the builder, acknowledge it.

---

## 3. Who Pays?

- [ ] What's the maintenance burden?
- [ ] What's the cognitive load added to the system?
- [ ] What simpler approaches does this foreclose?
- [ ] What attention does this steal from other work?

**Red flag:** If costs fall on the ecosystem while benefits fall on the builder's ego, reconsider.

---

## 4. Revealing or Obscuring?

- [ ] Does this analysis help understand the system?
- [ ] Or does it add jargon without insight?
- [ ] Could you explain the output to a non-expert?
- [ ] Does complexity serve clarity or hide confusion?

**Red flag:** If you need a glossary to explain the output, it's probably obscuring.

---

## 5. Technical Gatekeeping?

- [ ] Does this create new barriers to participation?
- [ ] Who can understand and modify this after you?
- [ ] Does sophistication empower or exclude?
- [ ] Are you creating a priesthood?

**Red flag:** If only you can interpret the results, you've created a power structure.

---

## 6. Natural or Imposed?

- [ ] Does the architecture match the actual problem shape?
- [ ] Or is it chosen for algorithmic convenience?
- [ ] Or because you already know how to build it?
- [ ] Or because it's impressive?

**Red flag:** "I have a hammer" is not a good reason to treat everything as a nail.

---

## 7. The Precedent Question

- [ ] What similar efforts have been tried before?
- [ ] What happened to them?
- [ ] Why is this different?
- [ ] What's your evidence (not intuition) that this will work?

**Red flag:** If you can't name a precedent or explain why you're different, you're probably not.

---

## 8. The Off-Ramp

- [ ] If this fails, what's the exit strategy?
- [ ] Can it be cleanly removed?
- [ ] What's the sunk cost if you abandon it?
- [ ] At what point do you declare failure?

**Red flag:** No off-ramp means you're committed regardless of evidence.

---

## 9. The User Test

- [ ] Have you asked anyone outside the project if they want this?
- [ ] Would they pay for it (money, time, attention)?
- [ ] Have you watched someone try to use what you already built?
- [ ] What did they struggle with?

**Red flag:** Building for users who don't exist is easier than serving users who do.

---

## 10. The Honesty Question

> **If you're being honest with yourself, why are you really building this?**

- Genuine utility?
- Learning exercise?
- Impressive portfolio piece?
- Avoiding harder problems?
- Because you can?

All of these are valid reasons. But only the first justifies ecosystem investment.

---

## Decision Framework

After answering these questions:

| Answers | Action |
|---------|--------|
| Mostly "yes, this helps users" | Proceed with Phase 1 only |
| Mostly "this helps me learn" | Build it privately, don't merge to ecosystem |
| Mostly "I don't know" | Research more before building |
| Mostly "this is impressive" | Archive the blueprint, focus elsewhere |

---

## For This Specific Blueprint

The GDL Integration Blueprint should be evaluated:

- **Necessity**: No current users need spectral analysis
- **Benefits**: Mostly builder learning (GDL expertise)
- **Costs**: Significant complexity added to ecosystem
- **Decision**: Archive until network has actual participants to analyze

---

*"The best code is no code. The best blueprint is one that prevents unnecessary building."*
