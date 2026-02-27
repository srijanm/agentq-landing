# AgentQ Design System

Updated: February 2026

---

## Colors

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-forest` | `#007745` | Primary brand green. CTAs, highlights, key headings, featured cards |
| `--color-forest-hover` | `#005C36` | Button hover state |

### Backgrounds
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-sage-wash` | `#FAF9F5` | Page background |
| `--color-sage-surface` | `#E3DED2` | Default card background, process step numbers |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-warm-black` | `#1C1814` | Primary text, borders (1.5px), layer left-borders |
| `--color-elevated` | `#352F2A` | Dark elevated surfaces |
| `--color-warm-mid` | `#5C5448` | Secondary body text |
| `--color-stone` | `#9A9084` | Tertiary text, captions |
| `--color-cool-light` | `#BCC0BA` | Subtle borders (process step rings) |
| `--color-off-white` | `#F0EAE0` | Light text on dark backgrounds |

### Secondary (Campaign Accents)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-signal-red` | `#E34E34` | Strikethrough animation |
| `--color-warm-gold` | `#F2A93B` | Reserved (previously used for human layer, now removed) |
| `--color-teal` | `#2BA8A8` | Reserved (previously AI layer, replaced by monochrome) |
| `--color-cobalt` | `#4464D9` | Reserved (previously AI layer, replaced by monochrome) |

> **Note:** The site now uses a monochrome approach for layer differentiation. Teal, cobalt, and warm-gold are retained as tokens but are no longer actively used in the UI.

---

## Typography

### Font Families
| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | PP Mori | Headings, logo, price display |
| `--font-body` | PP Neue Montreal | Body text, buttons, labels, badges |
| `--font-mono` | JetBrains Mono | Process step numbers |

### Type Scale

| Class | Font | Weight | Size | Line Height | Tracking | Usage |
|-------|------|--------|------|-------------|----------|-------|
| `.type-display` | Display | 800 | 56px | 1.05 | -0.063em | Hero headline |
| `.type-h1` | Display | 600 | 40px | 1.15 | -0.045em | — |
| `.type-h2` | Display | 600 | 32px | 1.2 | -0.045em | Section headings |
| `.type-h3` | Display | 600 | 28px | 1.3 | -0.025em | Hero subheadline |
| `.type-h4` | Display | 600 | 20px | 1.35 | -0.045em | Card headings |
| `.type-h5` | Body | 700 | 16px | 1.4 | 0 | — |
| `.type-body-lg` | Body | 400 | 24px | 1.7 | -0.045em | Section intro text |
| `.type-body` | Body | 400 | 18px | 1.7 | -0.045em | Default body text |
| `.type-body-sm` | Body | 400 | 14px | 1.7 | -0.045em | Captions, small text |
| `.type-overline` | Body | 500 | 11px | 1.4 | 0.12em | Step numbers, labels (uppercase) |
| `.section-label` | Display | 600 | 24px | 1.35 | -0.045em | Section sub-labels |

### Responsive Scaling

**Tablet (< 1200px):** Display 44px, H1 34px, H2 28px, H3 24px, Body-lg 20px

**Mobile (< 768px):** Display 36px, H1 28px, H2 24px, H3 22px, Body-lg 18px, Body 16px, Body-sm 13px

---

## Spacing & Radius

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-button` | 10px | Buttons, inputs |
| `--radius-input` | 10px | Form inputs |
| `--radius-card` | 16px | All cards, containers |
| `--radius-container` | 20px | Large containers |
| `--radius-pill` | 100px | Badges, pills |

### Standard Border
- **Weight:** `1.5px solid` — used consistently across all cards, containers, and image wrappers
- **Color:** `var(--color-warm-black)` for most containers; `rgba(255, 255, 255, 0.15)` for dividers within green backgrounds

---

## Components

### Cards

**Default Card (`.card`)**
- Background: `--color-sage-surface`
- Border: 1.5px solid `--color-warm-black`
- Radius: `--radius-card`
- Padding: 24px

**Green Featured Card**
- Background: `--color-forest`
- Border: 1.5px solid `--color-warm-black`
- Text: white headings, `white/80` body text
- Used for: Developer Assist covers, Who section, Launch step, pricing highlight

**Problem Card (`.problem-card`)**
- Layout: CSS Grid, `160px 1fr` (image left, text right)
- Background: `#FAF9F5`
- Border: 1.5px solid `--color-warm-black`
- Image slot on left, text with 20px 24px padding on right

**Ships Card (`.ships-card`)**
- Layout: CSS Grid, `1fr 160px` (text left, image right)
- Background: transparent
- Border: 1.5px solid `--color-warm-black`
- Green headings (`text-forest`), warm-mid body text

**Tier Card (`.tier-card`)**
- Background: `--color-sage-wash`
- Border: 1.5px solid `--color-warm-black`
- Featured variant: `--color-warm-black` background, off-white text

### Who Section Row (`.who-row`)
- Layout: CSS Grid, `3fr 1.33fr`
- Text card: green featured card, `align-self: start` (sizes to content)
- Image container: `position: relative` with absolutely positioned image (`object-fit: cover`), matches text card height
- Image container has 1.5px black border and card radius

### Buttons

**Primary (`.btn-primary`)**
- Background: `--color-forest` → `--color-forest-hover` on hover
- Text: white, PP Neue Montreal, 500 weight, 18px
- Padding: 16px 32px
- Radius: `--radius-button`
- Active: `scale(0.98)`

**Nav variant (`.btn-nav`)**
- Smaller: 15px font, 10px 20px padding

### Badges & Pills

**AI Layer Badge (`.ai-layer-badge`)**
- Monochrome: `--color-warm-black` text and border
- Background: `rgba(28, 24, 20, 0.04)`
- Border: 1.5px solid
- Uppercase, 13px, 600 weight
- Subtle glow animation

**Overline Badge (`.overline-badge`)**
- Gray text (#6B6B6B), subtle gray border
- Pill shape, float + sketch animation

### Comparison Table
- Uses `border-separate border-spacing-0`
- AgentQ column: full `--color-forest` background, white text
- Column has 1.5px black border on left/right, rounded top/bottom corners
- Header row separated by `2px solid rgba(255, 255, 255, 0.3)`
- Body row dividers: `1px solid rgba(255, 255, 255, 0.15)`

### FAQ Accordion
- Wrapped in bordered container (1.5px black, card radius, 40px padding)
- Items divided by `1px solid rgba(28, 24, 20, 0.1)`
- Question: 500 weight, 18px, hover turns forest green
- Icon: 24px, rotates 45deg when open
- Answer: animated max-height reveal

### CTA Container
- Border: 1.5px solid `--color-warm-black`, card radius
- Layout: `1fr 1fr` grid
- Text side: 40px padding
- Image side: flush to container edge, `overflow: hidden`
- Container has `overflow: hidden` for image bleed

---

## Animations

| Name | Duration | Usage |
|------|----------|-------|
| `step-appear` | 0.6s ease | Process flow steps fade up (16px translate) |
| `hero-drift` | 6s infinite | Hero image subtle float |
| `ai-badge-glow` | 2.5s infinite | AI layer badge subtle shadow pulse |
| `badge-float` | 4s infinite | Overline badge vertical float |
| `badge-sketch` | 3s infinite | Overline badge border pulse |
| `fade-in-section` | 0.5s ease | Scroll-triggered section reveal (20px translate) |

---

## Layout Patterns

- **Max width:** 1280px for all sections
- **Horizontal padding:** `px-5 md:px-10`
- **Section spacing:** `py-16 md:py-20`
- **Grid gaps:** `gap-4` for card grids, `gap-10 lg:gap-14` for two-column hero/CTA layouts
- **Container padding:** 40px for bordered section containers (FAQ, CTA)

---

## Color Usage Summary

| Element | Color |
|---------|-------|
| Headings | `--color-warm-black` (default), `--color-forest` (highlights) |
| Body text | `--color-warm-mid` |
| Captions | `--color-stone` |
| Card headings on green bg | `white` |
| Card body on green bg | `white/80` |
| All borders | 1.5px `--color-warm-black` |
| CTAs | `--color-forest` background, white text |
| Step numbers | `--color-warm-black` |
| Layer left-borders | `--color-warm-black` (3px solid) |
| Pricing highlight column | `--color-forest` background, white text |
