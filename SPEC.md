# SPEC.md - Rodičovský Kompas

## 1) Project Summary

**Rodičovský Kompas** is a calm, mobile-first web calculator for Czech parents to get an **orientational child-support estimate**.
It is designed for stressful life situations (separation/divorce), with a strong focus on clarity, speed, and low cognitive load.

The product is intentionally not legal advice; it is a guided estimate tool inspired by the public Czech justice calculator logic.

## 2) Target Users

- Primary: separating/divorcing parents in Czechia.
- Primary emotional context: high stress, low patience, high need for clarity.
- Priority perspective from chats: a parent (often mother) who needs to quickly understand what amount could be received for children.

## 3) Product Goals

1. Give an understandable estimate in 2-3 minutes.
2. Make form filling easy even under stress.
3. Show results from the selected parent's perspective first.
4. Support up to **3 children** with names and ages.
5. Include yearly care split with holidays:
   - school-year routine,
   - summer holidays,
   - Christmas holidays,
   - spring holidays,
   - autumn holidays.

## 4) UX Principles (from our chat decisions)

- Calm visual design (not aggressive/overstimulating).
- Single-page flow for speed, with detail wizard in modal popup.
- Start with quick onboarding:
  - role selection (`maminka` / `tatínek`) once at the beginning.
- Prefer human labels:
  - `ratolesti` and real child names instead of "Dítě 1/2/3".
- Minimize typing:
  - child add as tags,
  - Czech name autocomplete suggestions,
  - quick care presets.
- Progressive disclosure:
  - quick defaults first,
  - detailed care setup only when needed (wizard).
- Result framing:
  - avoid confusing "difference-only" display.
  - in mostly exclusive care, show one primary payment direction.

## 5) Functional Scope

### 5.1 Inputs

- Parent role at onboarding: `maminka` or `tatínek`.
- Net monthly income:
  - user income,
  - other parent income.
- Children (max 3):
  - name,
  - age (0-26).
- Care setup:
  - quick preset: shared / mostly me / mostly other parent.
  - detailed wizard:
    - care type,
    - calculation year,
    - regular days with user in 14-day cycle,
    - holiday day splits (summer, Christmas, spring, autumn).

### 5.2 Outputs

- Main headline amount (contextual to selected mode).
- Care totals:
  - days per year for each parent,
  - percentages for each parent.
- Payment story cards with direction clarity.
- Per-child amount cards (using real names and ages).
- Completion/momentum state (progress ring + completed sections).

## 6) Core Business Logic

### 6.1 Care-Day Computation

- Calculate days in year (365/366 by selected year).
- Split year into:
  - regular pool days,
  - holiday pools.
- Derive:
  - days with user,
  - days with other parent,
  - percentages and monthly-day equivalents.

### 6.2 Support Estimation (current implemented model)

- Uses age-banded percentage table and number-of-children modifiers.
- Computes orientational distributable amount per direction based on:
  - payer income,
  - care time with payer,
  - control constraints in implemented formula.
- Splits final distributable amount among children by weighted shares.

### 6.3 Result Direction Modes

- `receiveOnly`: children mostly with user -> highlight flow from other parent to user.
- `payOnly`: children mostly with other parent -> highlight flow from user to other parent.
- `twoWay`: shared care -> show both directions separately (no automatic netting).

## 7) Content & Terminology Requirements

- Replace "matka/otec" style text with friendlier `maminka/tatínek` where applicable.
- Use `ratolesti` in selected UI labels.
- Keep legal disclaimer visible: result is orientational; court may consider additional factors.

## 8) UI/Frontend Requirements

- Stack: vanilla HTML/CSS/JS.
- Main files:
  - `index.html` (Main calculator)
  - `clanky.html` (Blog index)
  - `clanek-*.html` (10 SEO-optimized blog posts)
  - `styles.css`
  - `app.js`
  - `czech-names.json`
- Responsive behavior for mobile and desktop.
- Inputs should have sensible width/length behavior:
  - short for age,
  - medium for income + unit hint.

## 9) Data & Suggestions

- Local Czech name suggestions loaded from `czech-names.json`.
- Fallback name list present in `app.js` if JSON load fails.
- No backend persistence in current version.

## 10) Accessibility & Quality Targets

- Keyboard-friendly inputs and modal interactions.
- Focus-visible states.
- ARIA live updates for key result and progress areas.
- Reduced-motion respect for celebratory effects.

## 11) SEO & Content Strategy

- Implementation of a blog / articles section focusing on **Conflict Resolution** and psychological well-being of the child.
- Included 10 comprehensive SEO-optimized articles addressing child support, mediation, and impact of separation.
- `JSON-LD`, proper meta tags, dynamic `sitemap.xml`, `robots.txt`, and Vercel Analytics integrated.
- Floating feedback widget implemented (submits via Formspree).

## 12) Non-Goals (current scope)

- No legal verdict or court decision prediction.
- No user account/auth.
- No server-side data storage.
- No official API integration guaranteed yet.

## 13) Deployment & Repository

- Project is static and deployable to GitHub + Vercel.
- Local run uses static hosting on `127.0.0.1:4173`.
- Git history already includes UX redesign, branding, and logic updates.

## 14) Acceptance Criteria

1. User can complete core inputs and see result in under 3 minutes.
2. Role is asked once at start, not repeatedly in later sections.
3. Children are entered as named entries (not anonymous numbered-only flow).
4. Care wizard supports required holiday periods and recalculates yearly totals.
5. In mostly exclusive care, result highlights one relevant direction.
6. UI remains calm, readable, and responsive on mobile.

## 15) Next Recommended Enhancements

- Add explicit onboarding stepper ("1/4, 2/4...") with autosave in local storage.
- Add optional "quick estimate" vs "detailed estimate" mode switch.
- Add printable summary (PDF export) for discussion with mediator/lawyer.
- Add source-of-truth validation suite against known public calculator examples.
