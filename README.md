# E-Nightenment

A browser-based text-and-canvas night game about glow, hush, spark, shadow, glints, and the suspiciously practical work of becoming a little more awake.

## Local Play

Open `index.html` in a browser, or serve the folder with any static server.

## Netlify Deploy Settings

This project is a plain static site. It does not need a build tool.

- Build command: leave blank
- Publish directory: `.`
- Production branch: `main`
- Configuration file: `netlify.toml`

## Recommended Netlify Pipeline

1. Push this folder to a GitHub, GitLab, Bitbucket, or Azure DevOps repository.
2. In Netlify, choose **Add new project**.
3. Choose **Import an existing project**.
4. Connect the repository.
5. Confirm the settings above and publish.

After the repository is linked, Netlify will deploy automatically whenever changes are pushed to the production branch. Pull requests or merge requests can also generate Deploy Previews when the Git provider is connected.

## Files

- `index.html`: markup and game surface
- `styles.css`: responsive layout and visual system
- `game.js`: encounter deck, state, scoring, endings, and canvas drawing
