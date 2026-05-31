# Operations

Working rules and shortcuts for E-Nightenment Oracle Edition.

## Git And Release Rules

- Do not commit or push without explicit user authorization.
- Prepare changes locally, verify them, and report the working tree state before asking for commit/push approval.
- Keep the prototype repo separate from the production E-Nightenment repo.
- Treat `main` as the Netlify production branch.
- After any authorized push, verify Netlify deploy state and production URL behavior.

## Local Verification

Use these checks before asking to push:

- `node --check game.js`
- `node --check archive.js` when archive code changes
- `node --check netlify/functions/oracle.js` when oracle function code changes
- Browser smoke test at `http://127.0.0.1:4174/`

Expected smoke coverage:

- Game loads with Oracle Edition kicker.
- A full 8-night run reaches the ending dialog.
- Ending dialog fits within the viewport and scrolls internally when needed.
- `Ask the Lantern` returns a reading in production, or a clear offline/error message locally.
- Completing a run creates a local archive entry.
- `archive.html` renders run metrics and session details.

## Netlify

- Site: `e-nightenment-oracle-chat`
- Production URL: `https://e-nightenment-oracle-chat.netlify.app`
- Publish directory: `.`
- Build command: none
- Functions directory: `netlify/functions`
- Required env var: `OPENAI_API_KEY`
- Optional env var: `OPENAI_MODEL`

Deployment notes:

- Netlify may require a fresh deploy after env var changes.
- Sensitive variable policy can stay on "Deploy without sensitive variables"; production still receives the key.
- For UI-based GitHub/env setup, use the user's normal browser if the Codex in-app browser stalls.

## OpenAI Oracle

- The browser never receives or stores the OpenAI API key.
- The client sends compact run data to `/.netlify/functions/oracle`.
- The function uses a low-token prompt and a small output cap.
- Default model: `gpt-5-nano`.
- Preserve graceful fallback behavior if OpenAI is unavailable.

## Local Session Ledger

- Ledger key: `eNightenmentLedger`.
- Storage: browser `localStorage`.
- Scope: local device only.
- Limit: most recent 24 completed runs.
- Do not treat ledger data as authenticated, synced, or durable.
- Export is JSON copied to clipboard from `archive.html`.

## Browser Automation Notes

- The Codex in-app browser can inspect and smoke test the app.
- OAuth flows and some Netlify forms may fail inside the embedded browser.
- Do not use browser automation to create, copy, or reveal raw API keys.
