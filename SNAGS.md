# Project Snags And Fixes

Notes worth keeping close for future Koan Browser Arcade work.

## Netlify GitHub Provider Button

Snag: In the Codex in-app browser, Netlify's "GitHub" button on the repository linking screen can focus visually but fail to continue into the OAuth/repo picker flow.

Fix: Use the user's normal browser for the Netlify GitHub authorization/linking step, then verify from Codex with the Netlify API or CLI. This is likely an embedded-browser/OAuth-popup edge case, not GitHub Desktop interfering.

## Netlify Environment Variable Form

Snag: Netlify's environment variable form can render in the Codex in-app browser while rejecting automated text entry with a virtual clipboard error.

Fix: Add secret variables such as `OPENAI_API_KEY` in the user's normal browser, or set them through the Netlify API/CLI only when the secret value is available from a trusted source. Verify afterward by listing variable keys, never by printing secret values.

## Windows Folder Ownership For New Git Repos

Snag: Folders created through the Codex sandbox can be owned by a sandbox identity. Git may report "dubious ownership" or fail writing `.git/config` / `.git/index.lock`.

Fix: Prefer cloning the remote repo into a fresh active folder after the first push. If repair is needed, use `takeown` and a scoped `icacls` grant on only the project folder.

## Browser Secrets

Snag: OpenAI API keys must not be placed in static browser JavaScript or committed files.

Fix: Keep calls in Netlify Functions and store `OPENAI_API_KEY` as a Netlify environment variable. The browser sends only compact run data to `/.netlify/functions/oracle`.
