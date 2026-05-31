# Session Ledger

The Lantern Archive stores completed runs locally in the player's browser. This is a prototype analytics and memory layer, not a backend database.

## Storage

- Key: `eNightenmentLedger`
- Location: `localStorage`
- Limit: 24 most recent completed runs
- Writer: `game.js`
- Reader: `archive.js`

## Session Record

```json
{
  "sessionId": "uuid",
  "startedAt": "2026-05-30T00:00:00.000Z",
  "endedAt": "2026-05-30T00:08:00.000Z",
  "choices": [],
  "final": {}
}
```

## Choice Entry

Each choice is appended when the player resolves an omen.

```json
{
  "night": 1,
  "omen": "The Lantern That Wants a Turn",
  "choice": "Ask what it has forgotten",
  "delta": {
    "glow": 0,
    "hush": 4,
    "spark": 1,
    "shadow": -1
  },
  "glintsGained": 2,
  "balanceAfter": "Lucid",
  "statsAfter": {
    "glow": 48,
    "hush": 48,
    "spark": 43,
    "shadow": 33
  },
  "timestamp": "2026-05-30T00:01:00.000Z"
}
```

## Final Entry

The final entry is saved at dawn, then updated if the oracle answers.

```json
{
  "ending": {
    "title": "Apprentice of the Sideways Dawn",
    "text": "Ending copy."
  },
  "glints": 9,
  "balance": "Lucid",
  "score": 76,
  "spread": 14,
  "stats": {
    "glow": 58,
    "hush": 54,
    "spark": 51,
    "shadow": 44
  },
  "oracleReading": "Optional reading text."
}
```

## Archive View

`archive.html` displays:

- Run count
- Average glints
- Average score
- Most common balance label
- Per-session ending, score, glints, spread, final stats, choices, and oracle reading

## Export And Clear

- Export copies the full JSON ledger to the clipboard.
- Clear removes `eNightenmentLedger` after browser confirmation.

## Future Backend Path

If this grows beyond local-only storage, keep the local shape and add an explicit sync layer:

- Netlify Function receives a sanitized session record.
- Backend storage can be Netlify Blobs, Supabase, Turso, or another small database.
- Add user consent before sending session data off-device.
- Keep oracle prompt payload separate from analytics payload.
