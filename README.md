# Vyzivne.cz

Calm, step-by-step Czech child-support estimator focused on low-stress form completion for parents.

## UX decisions based on research

This version applies practical form UX patterns from top design sources:

- GOV.UK Design System (structured form steps and clear labels):
  - https://design-system.service.gov.uk/patterns/question-pages/
  - https://design-system.service.gov.uk/patterns/names/
- web.dev form best practices (autocomplete, input purpose, keyboard-friendly fields):
  - https://web.dev/learn/forms/
  - https://web.dev/articles/payment-and-address-form-best-practices
- Nielsen Norman Group guidance on reducing form friction:
  - https://www.nngroup.com/articles/web-form-design/

Implemented choices:

- quick onboarding first, then detailed inputs
- minimum typing with child tags and Czech-name autocomplete
- clear visible labels and helper text
- field lengths matched to data type (age short, income medium + unit)
- progressive disclosure of detail (wizard only where needed)
- role-first perspective so the result reads immediately as "what goes to me"

## Run locally

Use any static server and open `index.html` (for example Vite preview, simple Node static server, or similar).

Open: `http://127.0.0.1:4173/index.html`

## Files

- `index.html` - layout and onboarding flow
- `styles.css` - calm visual system and responsive styles
- `app.js` - calculation logic, child tag UX, and wizard behavior
- `czech-names.json` - local Czech first-name suggestions for autocomplete
