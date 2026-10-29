---
title: Setup
description: Technology and deployment notes for the private GlobalHost server bot.
---

# Setup and deployment

The bot described on this site runs in the GlobalHost Discord server. It is a private project, not a public bot that other server owners can install. This page records its general technology and operational considerations; it is not a public installation guide.

## Technology

| Technology | Purpose |
| --- | --- |
| Python | Bot logic |
| [discord.py](https://discordpy.readthedocs.io/) | Discord API and command handling |
| [SQLite](https://www.sqlite.org/) | Local records and workflow state |
| [uv](https://docs.astral.sh/uv/) | Python environment and dependency management |

## Before hosting

- Keep bot tokens and API keys out of Git. Use environment variables or a secret manager.
- Give the bot only the Discord permissions it needs.
- Check role access, logging channels and moderation behaviour in a test server.
- Back up the database and confirm that backups can be restored.
- Run the bot under a process supervisor and review logs when troubleshooting.

## Source code

The public [showcase repository](https://github.com/4Y44N-KH4L3D/GlobalHost-Bot-Showcase) contains documentation, not the production bot source or its configuration.
