---
title: Moderation Tools
description: Member moderation, channel controls and persistent staff records.
---

# Moderation Tools

**Routine moderation jobs in one consistent toolkit.**

GlobalHost uses a custom staff toolkit for member actions, channel controls and moderation history. The bot is private to this server; this page documents our setup rather than offering a bot for other servers. Access depends on staff role, target hierarchy and the bot's Discord permissions.

## Member actions

- **Warnings:** issue a warning, review active warnings, clear warnings where authorised, and inspect a member's moderation history.
- **Timeouts:** apply a temporary timeout or remove an existing timeout.
- **Permanent mute:** apply the configured mute role and save eligible roles so they can be restored after an unmute.
- **Kick and ban:** remove a member from the server or ban them. Authorised staff can also unban by user ID.
- **Staff notes:** add private notes about a member and remove notes by ID.

## Channel controls

- **Purge:** remove up to 100 recent messages, optionally from a selected member.
- **Slowmode:** set or disable slowmode in the current channel.
- **Lock / unlock:** stop or restore member message sending in the current text channel.
- **Raid lockdown:** restrict configured public channels during a raid response. This is a manual staff action, not an automatic result of receiving an alert.

## Context-menu actions

Right-click actions on members or messages cover common workflows such as warning, timeout, mute, ban, deleting a message, viewing warnings and checking moderation history. Staff can act directly from the relevant member or message.

## Records and safeguards

Moderation actions are logged, and relevant actions are stored in the bot's records. The bot checks role hierarchy and required permissions before acting. Staff cannot moderate a member with an equal or higher role, and the bot cannot act above its own highest role.

## Why use GlobalHost for moderation?

Discord provides essential moderation controls. GlobalHost brings common actions, staff notes, warning history, mute-role handling and related moderation workflows into the same bot, alongside AutoMod and raid response.

See the [Command Library](/commands/) for command arguments and role requirements.
