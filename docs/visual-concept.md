# Visual Concept — forkedsoftware.com facelift

**Direction:** Sleek sci-fi spaceship dashboard. Futuristic, deep-space, instrument-panel feel. Bold display type, dark backgrounds, restrained electric accents.

**Preserved from current site:** Cubano display typeface, existing teal/navy palette, the strengths carousel (moves but stays), the responsive breakpoint pattern, light/dark theme architecture.

## Vector pack → surface map

| Pack | Surfaces it anchors |
|---|---|
| **HUD Assets** | Nav top frame, section corner brackets, CTA button chrome, module panels |
| **Chroma Spheres** | Hero focal point behind the headshot — deep-space orb glow |
| **Schemes & Graphs** | Sparing — clean geometric pieces only (e.g. polyhedron #50) as decorative backdrop on About / Journey |

Packs **explicitly excluded** per Kaitlyn: Cyborg Vectors, Cyber Sigils.
Pack **deferred**: Label Vectors Vol.1 (will use for portfolio card chrome in Phase 4).

Most Schemes & Graphs / Graphs & Diagrams pieces lean Victorian-engineering-blueprint, which fights the sleek sci-fi target. The plan uses them sparingly and only the cleanest geometric subset. The journey-timeline backbone (Phase 3) may end up custom-drawn SVG rather than pack-sourced if no piece fits the dashboard register.

## Palette extension — deep space

Existing palette stays. Added a darker space layer, a near-black, and an electric accent. The accent appears only on focus, hover, status indicators, and select sci-fi flourishes — never on body text or large fills.

| Token | Value | Role |
|---|---|---|
| `--space-black` | `#02060d` | Deep background layer (below navy) |
| `--space-deep` | `#081420` | Second-layer panels / cards on dark |
| `--space-line` | `#1a2a3a` | Hairline borders between panels |
| `--accent-neon` | `#5ef2c8` | Electric teal-cyan. Status dots, focus rings, CTA glow |
| `--accent-warning` | `#ff7a59` | Amber-coral. Sparingly — "live" indicators, alerts |

Existing tokens unchanged: `--primary-color` `#77aca2`, `--primary-dark` `#468189`, `--secondary-color` `#031926`, `--accent-color` `#f4e9cd`.

## Typography

- **Cubano** — display headlines (unchanged)
- **JetBrains Mono** — small metadata, status readouts, breadcrumbs, label chrome. Loaded from Google Fonts. Gives the "system console" feel under the bold display type.
- **System sans** — body text (unchanged fallback)

## Motion

Subtle only. No parallax. No JS-driven animations beyond what Angular already does.

- CTA hover: `box-shadow` glow in `--accent-neon` (0 0 16px low-alpha)
- Status dot: 2s `@keyframes` opacity pulse
- Scanline overlay on hero (optional): a single linear-gradient at low alpha, no JS

## Headshot — confirmed

Kaitlyn's existing headshot stays on /home, centered inside a Chroma Sphere orb backdrop and framed by HUD chrome.

## Open items for Phase 1 review

After previewing `/preview-hero` Kaitlyn should decide:
1. Sphere pick — sphere-01 (cool rainbow), sphere-10 (teal/magenta), sphere-15 (warm)?
2. Accent color — keep `#5ef2c8` neon teal, or swap to violet `#b388ff`?
3. JetBrains Mono — yes/no for "system readout" text role?
4. Scanline overlay — yes/no for the hero?
