---
title: AutoMod
description: Rule-based message and attachment checks with evidence-backed moderation records.
---

# AutoMod

**Catch patterns, keep evidence, apply consistent actions.**

The GlobalHost server uses custom AutoMod checks to help staff manage spam, prohibited content and suspicious activity. This is part of a private bot built for our server, not a public bot that other servers can add.

## Detection coverage

- **Spam and floods:** repeated messages and bursts of mentions.
- **Prohibited language:** configured terms and common attempts to disguise them.
- **Links and invites:** suspicious links and unapproved Discord invites.
- **Scam and threat patterns:** configured patterns that warrant moderation.
- **Attachments:** checks for configured file types, including video attachments.

Detection coverage depends on the configured rules and patterns. No filter catches everything, and context can still matter.

## What happens after a detection?

GlobalHost records the matched rule and supporting evidence in staff logs. Depending on the rule and offence history, an action can include:

- **Delete** the message.
- **Warn** the member.
- **Permanently mute** the member using the configured mute role.

Actions are rule-driven, so not every detection receives the same punishment.

## GlobalHost AutoMod vs Discord AutoMod

Discord's built-in AutoMod is a strong starting point for common keyword, spam and mention rules. GlobalHost goes further with configurable pattern checks, supported attachment checks and evidence-backed cases tied into its moderation workflow.

| Capability | Discord AutoMod | GlobalHost AutoMod |
| --- | --- | --- |
| Native Discord setup | Built in | Runs through the bot |
| Common keyword and spam rules | Yes | Yes, through configured rules |
| Custom pattern checks and obfuscation handling | Depends on available native rules | Configurable patterns and common obfuscation |
| Attachment checks | Limited compared with a custom bot workflow | Configured attachment checks |
| Evidence-backed cases in bot logs | Native alerts and actions | Records the matched rule and evidence |
| Offence-aware actions | Native action options and configuration | Rule and offence history can affect delete, warn or permanent mute |

Discord AutoMod is easier to enable. GlobalHost is more flexible when you want custom checks and records linked to the rest of your moderation tools, but it needs correct permissions, testing and maintenance.

## Setup advice

Test rules in a controlled channel, check the bot's role and permissions, and review false positives. A detection is a signal for a configured action, not proof of intent.

See [Moderation Tools](/features/moderation) and [Raid Alerts & Lockdown](/features/raid-alerts).
