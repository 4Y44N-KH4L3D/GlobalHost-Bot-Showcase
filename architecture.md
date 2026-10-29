---
title: Architecture
description: A high-level overview of the private bot used in the GlobalHost Discord server.
---

# Architecture

GlobalHost uses a custom Discord bot built for its own server. This page documents the project at a high level; the bot is private and is not available for other servers to invite.

GlobalHost uses a custom Discord bot built for its own server. This page documents the project at a high level; the bot is private and is not available for other servers to invite.

GlobalHost Bot uses Python and discord.py to handle Discord events and commands. Feature-specific logic manages each workflow, while SQLite stores selected records between restarts.

## Main components

| Component | Purpose |
| --- | --- |
| Discord integration | Receives slash commands, context-menu actions, messages and member events. |
| Feature modules | Handle moderation, AutoMod, raid alerts, tickets, forum review and developer search. |
| SQLite | Stores selected cases, offence history, mute data and workflow records. |
| Actions and logs | Sends Discord replies, carries out permitted actions and writes logs to configured channels. |

## How a request is handled

1. Discord sends an event or command to the bot.
2. The relevant feature checks the request and its access rules.
3. The bot responds, records information or performs an allowed action.
4. Where needed, the action is written to the relevant log.

## Important behaviour

- Moderation actions depend on staff access, bot permissions and Discord role hierarchy.
- Raid alerts notify staff; they do not automatically lock the server.
- AI-assisted analysis can provide information, but does not replace a staff decision.

## Technology

- **Python** for bot logic.
- **discord.py** for Discord integration.
- **SQLite** for selected persistent records.
- **uv** for Python dependency and environment management.

Production configuration, secrets and database files are not included in this public showcase.
