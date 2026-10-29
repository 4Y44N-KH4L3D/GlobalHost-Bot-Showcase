---
title: Moderation Commands
description: Staff moderation commands and access rules for the GlobalHost server.
---

# Moderation Commands

These commands belong to the private bot used in GlobalHost. This reference is for the server's staff and is not an installation guide for other servers.

GlobalHost provides staff commands for member actions, channel controls and private staff notes.

## Command groups

| Area | Commands | Access |
| --- | --- | --- |
| Member actions | `/warn`, `/warnings`, `/clearwarnings`, `/history` | Trial Mod and above, with clearing restricted to Mod and above |
| Temporary restrictions | `/timeout`, `/untimeout` | Trial Mod and above |
| Permanent mute | `/mute`, `/unmute` | Trial Mod and above |
| Removal | `/kick`, `/ban`, `/unban` | Mod and above |
| Channel management | `/purge`, `/slowmode`, `/lock`, `/unlock` | Purge, slowmode and locks are Admin/Owner tools |
| Raid response | `/lockdown`, `/unlockdown` | Owner or Admin |
| Private staff notes | `/note add`, `/note remove` | Authorised staff |

## Safeguards

- The bot checks the caller's role access and the target's role hierarchy.
- Actions can fail if Discord permissions or the bot's role position are insufficient.
- Permanent mutes use the configured mute role and can restore saved roles when the member is unmuted.
- Raid alerts do not trigger lockdown automatically. Authorised staff decide when to use `/lockdown`.

For exact arguments, descriptions and role access for every command, use the [full Command Library](/commands/).
