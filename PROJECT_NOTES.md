# E-Nightenment Oracle Chat Prototype

This folder is a project silo for extending E-Nightenment with a low-token oracle/chat layer while keeping the current production game separate.

## Source Baseline

Copied from the deployed E-Nightenment workspace on 2026-05-30:

- `index.html`
- `styles.css`
- `game.js`
- `README.md`
- `netlify.toml`
- `robots.txt`
- `.nojekyll`
- `.gitignore`

Deliberately not copied:

- `.git/`: this prototype gets its own repository history.
- `.netlify/`: deployment linkage should be re-created or configured explicitly.
- Any API key material: OpenAI keys must stay server-side in environment variables.

## Prototype Direction

Add a lightweight end-of-run oracle reading that summarizes the player's session:

- Send only compact game data: ending, glints, balance, final inner weather, chosen omens, journal entries, and sky marks.
- Call OpenAI from a Netlify Function, not from browser JavaScript.
- Keep the browser payload small and avoid exposing secrets.
- Return a brief reading with a playful, lucid tone: 2-3 short paragraphs, roughly 100-140 words.

Recommended path:

1. Add `netlify/functions/oracle.js`.
2. Store `OPENAI_API_KEY` in Netlify environment variables.
3. Add an end-screen button such as "Ask the Lantern".
4. Cache or disable repeated oracle calls per completed run unless the player starts a new run.
5. Keep the base static game playable when the oracle endpoint is unavailable.

## Local Run

This remains a plain static app. It can be opened directly as `index.html`, or served locally with any static file server.
