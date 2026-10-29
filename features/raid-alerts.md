---
title: Raid Alerts
description: Join-burst detection and staff-controlled server lockdown.
---

# Raid Alerts & Lockdown

**Spot unusual join bursts and give staff a clear response path.**

The GlobalHost server's bot monitors member joins and alerts staff when activity crosses the configured threshold. The feature is part of our private server setup.

## Detection and response

1. The bot tracks joins over a rolling **30-second window**.
2. At the configured threshold of **eight joins**, it raises a raid alert.
3. The alert notifies the authorised staff group so they can assess the activity.
4. Staff can trigger lockdown if the activity looks malicious, then lift it when the server is safe.

The threshold is a signal to investigate, not proof that every new member is malicious.

## What lockdown does

Lockdown restricts configured public channels while preserving access to announcements and staff-only areas where configured. The bot saves the relevant channel permissions so they can be restored when staff run the unlock command.

Starting and ending lockdown are staff-controlled actions. A raid alert **does not automatically lock the server**.

## Why staff stay in control

Join spikes can happen during a legitimate event or a popular announcement. Alerting first reduces the chance of an automatic lockdown disrupting genuine members. Staff can check the situation before deciding whether to restrict access.

## Compared with basic raid protection

Discord's safety and verification settings help reduce raid risks. Some specialist bots offer advanced anti-raid features. GlobalHost connects join-burst alerts directly to a reversible staff-controlled lockdown, using the configured channel permissions.

See [AutoMod](/features/automod) for message-level detection and [Moderation Tools](/features/moderation) for other staff actions.
