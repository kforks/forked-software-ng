# forkedsoftware.com Brand Kit — "Retro Digital Age"

> The design foundation. Runtime source of truth will be `src/styles/_themes.scss`; this doc is the
> canonical rationale. **Replaces the earlier deep-space concept** (scrapped 2026-06-09). Light **and**
> dark (forked already ships both). Anchored to Kaitlyn's "retro-digital-age-art" references in
> `brand/refs/`.

## Direction & anchor
- **Anchor:** the *Friday Wizard* / *New Macindows* mockups — clean black **line-art** + a warm two-tone
  ground + a real **retro-OS window shell** (title bars, dialog boxes, desktop icons) + witty copy. The
  element sets (hand-drawn windows, vaporwave UI) are the building blocks; the SUSHI poster supplies the
  bold geometric display type + boxed structure.
- **Throughline:** old-computer-interface nostalgia, drawn clean and modern — the site *is* a tidy retro
  desktop, not a flat page.
- **In one line:** a warm cream-and-orange retro desktop, everything outlined in black line-art, with a
  cool blue as the system accent and a chunky geometric headline over pixel-terminal chrome.

## Essence & voice
- **Essence:** an independent engineer's tidy retro workstation — capable, a little playful, human.
- **Adjectives:** retro · tactile · clever · clean · friendly
- **Voice — do:** witty, plain-spoken, a wink of old-software humor ("the worst update we've ever made").
- **Voice — don't:** corporate, breathless, jargon. The humor is the brand; keep it dry, not zany.

## Decision: **full retro-OS shell**
The UI *is* a retro desktop — title bars with min/max/close, beveled window chrome, dialog-style cards,
desktop/dock icons, a hand cursor. Bold and distinctive (this is Kaitlyn's personal home base, so it
*should* have personality). The challenge is keeping it usable; the rules below keep it accessible.

## Color

Warm-neutral ground + black ink line-art + **orange hero** + **blue system accent**, in light & dark.

### Light (default)
| Role | Hex | Use |
|------|-----|-----|
| `desktop` | `#E4D3B0` | the desktop backdrop (warm tan) |
| `window` | `#FBF5E9` | window / card fill (cream "paper") |
| `ink` | `#1C1A17` | line-art outlines + body text (warm near-black) |
| `ink-soft` | `#6E6353` | muted/secondary text |
| `orange` | `#EE6C2B` | hero — title bars, primary buttons, highlights |
| `orange-deep` | `#C8531B` | hover/active |
| `blue` | `#2D6CC0` | system accent — links, selected state, secondary buttons |
| `blue-soft` | `#CBDDF4` | selected fills / tints |
| `bevel-hi` / `bevel-lo` | `#FFFFFF` / `#B6A381` | the raised-chrome highlight + shadow |
| icon pops | `#F2C84B` `#2BA39A` `#7A5CC0` `#D8472B` | multi-color line icons (yellow/teal/purple/red), sparingly |

### Dark (blue-forward — deep navy "CRT" surfaces, not inky purple)
| Role | Hex |
|------|-----|
| `desktop` | `#0E1B2E` (deep navy) |
| `window` | `#18293F` (blue panel) |
| `ink` | `#EAF1F8` (cool near-white — line-art + text) |
| `ink-soft` | `#8FA3BD` (blue-gray) |
| `orange` | `#FF7A3D` (hero pops on navy) |
| `blue` | `#6BA6EE` |
| `bevel-hi` / `bevel-lo` | `#2E456A` / `#091322` |

### Contrast (WCAG AA), computed
- `ink` on `window` ≈ **15:1** ✓ · `ink` on `desktop` ≈ **11:1** ✓
- **Primary buttons = orange fill with `ink` (dark) text ≈ 5.7:1 ✓** — *not* white-on-orange (only ~2.8:1).
- Title-bar text may be cream-on-orange **only at large/bold sizes** (≥18px, decorative); never small.
- `blue` on `window` ≈ 5.2:1 ✓ for links.

## Type
- **Display — Space Grotesk (700):** headlines. Geometric, techy-retro, bold.
- **Chrome / system — VT323 (pixel terminal):** window title bars, labels, status readouts, the "OS"
  texture. Use at ≥16px (pixel fonts need size to stay legible); decorative, not for paragraphs.
- **Body — Inter:** all real reading content.
- **Scale:** base 17px body, ratio 1.25. Display 49, h1 39, h2 31, h3 25, h4 20.

## Retro-OS treatment rules (what makes it cohere)
- **Everything is outlined** in `ink` (1.5–2px) — windows, buttons, icons, inputs. This is the line-art glue.
- **Beveled chrome:** raised elements get a `bevel-hi` top-left + `bevel-lo` bottom-right (the Win95 lift);
  inset fields invert it. Keep bevels subtle so it reads "drawn," not skeuomorphic-heavy.
- **Window chrome:** orange title bar + cream body + the three control squares (min/max/close), outlined.
- **Icons:** black line-art with flat multi-color fills (the floppy/folder/globe vocabulary), used sparingly.
- **Cursor:** the retro pointer/hand is a signature — keep it.
- **One hero accent per view:** orange leads; blue is the *system* accent (links/selected); the icon pops
  are seasoning. Don't let orange and blue compete for the same job.

## Imagery
Black line-art retro-computer motifs (windows, floppies, CRTs, isometric desk scenes) over warm grounds.
Reuse the refs' vocabulary; generate new pieces in the same outlined, flat-fill hand. No photography in chrome.

## Open / next
Apply to a `/preview-hero`-style sample first (below), then redesign `/home` as a desktop shell.
