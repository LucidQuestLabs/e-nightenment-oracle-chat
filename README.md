# E-Nightenment

A browser-based text-and-canvas night game about glow, hush, spark, shadow, glints, and the suspiciously practical work of becoming a little more awake.

## Local Play

Open `index.html` in a browser, or serve the folder with any static server.

## Netlify Deploy Settings

This project is a static site with one optional Netlify Function for the end-of-run oracle reading. It does not need a build tool.

- Build command: leave blank
- Publish directory: `.`
- Production branch: `main`
- Configuration file: `netlify.toml`

## Oracle Reading

The browser calls `/.netlify/functions/oracle` after the player completes a run. The function sends only compact run data to OpenAI and returns a short Lantern Oracle reading.

Required Netlify environment variable:

- `OPENAI_API_KEY`: server-side OpenAI API key

Optional Netlify environment variable:

- `OPENAI_MODEL`: override the default `gpt-5-nano`

If `OPENAI_API_KEY` is missing, the game remains playable and the oracle panel shows an offline message.

## Lantern Archive

Completed runs are recorded locally in the player's browser and can be reviewed at `archive.html`.

The archive tracks choices, stat deltas, glints gained, balance labels, final score, final stats, ending copy, and oracle reading when available. This data stays local to the browser unless a future sync layer is intentionally added.

See `LEDGER.md` for the session schema and future backend path.

## Recommended Netlify Pipeline

1. Push this folder to a GitHub, GitLab, Bitbucket, or Azure DevOps repository.
2. In Netlify, choose **Add new project**.
3. Choose **Import an existing project**.
4. Connect the repository.
5. Confirm the settings above and publish.

After the repository is linked, Netlify will deploy automatically whenever changes are pushed to the production branch. Pull requests or merge requests can also generate Deploy Previews when the Git provider is connected.

## Files

- `index.html`: markup and game surface
- `archive.html`: local session archive view
- `archive.js`: local ledger rendering, export, and clear controls
- `styles.css`: responsive layout and visual system
- `game.js`: encounter deck, state, scoring, endings, and canvas drawing
- `netlify/functions/oracle.js`: server-side oracle reading endpoint
- `OPERATIONS.md`: repo, deploy, verification, and secret-handling SOPs
- `LEDGER.md`: local archive schema and backend migration notes
- `SNAGS.md`: project setup snags and fixes worth preserving
