# Manager preview verification

- Scope: local manager demonstration; forms intentionally do not transmit or store data.
- Production build and TypeScript: passed.
- ESLint: passed with no warnings after image updates.
- Premium static audit: passed with no findings.
- Git whitespace check: passed.
- Source scan: no remaining Bangladesh, Dhaka, Niketan, +880, lorem ipsum, or original nonsense hero copy in `src`.
- Browser: checked production preview at 1280px and 390px. No horizontal document overflow at either size; no failed loaded images detected.
- Every rendered hash link resolves to a real element.
- Contact form: empty submit flags three required fields and focuses the name field. Valid example inputs produce explicit preview-only feedback.
- Newsletter: valid example input produces explicit no-subscription-created feedback.
- Mobile menu: closed links are absent from the accessibility tree; open/close, Escape focus return, and Contact Us section navigation work.
- Video: play and pause controls work. Video does not autoplay.
- Project control: selecting Hand Picked Harvest updates its pressed state.
- Field notes: disclosure opens the article content.

Remaining scope limits: no live delivery, newsletter service, deployment, or full assistive-technology audit. Existing Next.js workspace-root warning comes from a parent-directory lockfile.
