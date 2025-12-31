---
title: "{{ .Title }}"
subtitle: "Critique of {{ .Release }}"
date: {{ .Date }}
tags: ["univrs", "critique", "{{ .Component }}"]
release_version: "{{ .Version }}"
---

## The Facts

As of {{ .Date }}, Univrs.io reports:

{{ range .TestCounts }}
- **{{ .Component }}**: {{ .Count }} tests
{{ end }}

**Total tests**: {{ .TotalTests }}
**Known users**: {{ .UserCount }}
**Ratio of tests to users**: {{ .Ratio }}

## What This Release Claims

{{ .ClaimedFeatures }}

## What This Release Actually Delivers

{{ .ActualDeliverables }}

## The Gap

{{ .GapAnalysis }}

## Historical Precedent

{{ .PrecedentComparison }}

## The Luddite Question

Who benefits if this works?

{{ .BeneficiaryAnalysis }}

---

*Generated critique for {{ .Release }}. The builder and the critic are the same person.*
