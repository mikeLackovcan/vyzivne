# Vyzivne Klidne

Calm, step-by-step Czech child-support estimator focused on low-stress form completion for parents.

## UX decisions based on research

This version applies practical form UX patterns from:

- GOV.UK Design System patterns: question pages and names input
- web.dev form best practices for labels, autocomplete, stable input IDs/names, and mobile-friendly input types

Implemented choices:

- quick onboarding first, then detailed inputs
- minimum typing with child tags and quick care presets
- visible labels (no placeholder-only inputs)
- sensible field lengths and focused numeric entry
- progressive disclosure of detail (wizard only where needed)

## Run locally

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open: `http://127.0.0.1:4173/index.html`

## Files

- `index.html` - layout and onboarding flow
- `styles.css` - calm visual system and responsive styles
- `app.js` - calculation logic, child tag UX, and wizard behavior
- `czech-names.json` - local Czech first-name suggestions for autocomplete
