# Asterion command center

A responsive, front-end concept for a **human-controlled AI trading research collective**. It presents agent activity, research ideas, and an explicit approval boundary: agents can investigate and communicate, while an administrator remains the final decision maker.

## Run locally

No build tooling is required. Open `index.html` in a browser, or use a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included interactions

- Pause/resume the simulated collective.
- Start an administrator-reviewed agent invitation.
- Open feedback messages from research briefs.

This is a static prototype; it does not connect to exchanges, execute trades, or permit autonomous code changes.
