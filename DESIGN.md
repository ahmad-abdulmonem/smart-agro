# Smart Agro

This is an English-language, geographically neutral agriculture landing page for a manager preview. Preserve its green-and-gold visual identity and agricultural photography.

- Background: forest green `#263C28`; sections: `#334B35`; secondary green: `#6D8C54`; action/accent: gold `#F7C35F`; text: white.
- Body: bundled Century Gothic. Headings: Livvic. Font mappings live in `src/app/globals.css`, with Next font variables owned by `src/app/layout.tsx`.
- Layout: shared `.section-shell` caps content at 1280px with 24px mobile / 40px desktop gutters; `.section-space` uses 64px mobile / 80px desktop vertical padding. Section headings use 30px / 36px Livvic and gold, letter-spaced eyebrows. Photography sits in open layouts with 2px warm-gold borders, 8px corners, and a soft outer frame. Desktop section spacing is 110px; mobile remains 64px. The farm-heading scale is 38–66px with tight tracking. Full desktop navigation starts at 1280px; narrower widths use a disclosure menu.
- Navigation: shared links in `src/lib/navigation.ts` target existing page sections. Closed mobile navigation is hidden and Escape restores focus to the menu button.
- Content: plain agricultural language without country-specific claims, invented customer endorsements, client affiliations, or fabricated contact information.
- Forms: `InquiryForm` owns labels, inline validation, first-error focus, and status feedback. Manager-preview submissions do not send or store data; preview notices remain visible.
- Motion: video starts only on request and has a pause control; project previews change on selection. Respect reduced motion and provide visible keyboard focus.
- No deployment or live contact integration is part of this preview.
- Product guide: six illustrative sample products share data in `src/lib/products.ts`. Selection reveals flavor and usage details. The inquiry action carries a removable product topic into the contact form through in-memory React context, preserving existing typed fields. No inventory or availability claims; no persistence or network submission.
- Animation: user requested more visible motion. The hero now mounts a Three.js WebGLRenderer scene with animated field contours and drifting pollen, pointer response, 30fps cap, 1.5 DPR cap, pause/resume, offscreen/background suspension, and resource cleanup. Reduced motion skips GPU setup; unsupported contexts retain the photograph. Sections reveal over 700ms with 28px travel. Photo hover zooms use 1100ms easing and respect reduced motion.

- Project concepts: a vertical text selector controls one large photograph and its caption. A removable project inquiry topic preserves product selections and typed form fields. The form notice identifies sample products and concepts. The demo FAQ, repeated priorities, and duplicate closing CTA are removed.

- Approved redesign after the user rejected the card-heavy layout: oversized Livvic hero headline over visible farmland, green-and-gold palette, open photo/text compositions, compact icon selector, and staggered field notes. No invented metrics, customers, or operational claims. Runtime ownership: farm-* classes and --farm-* tokens in globals.css; Century Gothic body and Livvic display remain. Signature: the oversized Agriculture / matters. headline against the field landscape. Avoid rounded marketing cards, repeated centered headings, decorative badges, and explanatory demo sections. Photo framing and the Three.js hero are explicitly approved exceptions to the quieter original direction.
