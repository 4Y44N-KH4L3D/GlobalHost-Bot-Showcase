# Tools used in the GlobalHost server

The GlobalHost Discord server uses a custom bot to support moderation, member support, forum review and everyday community activity. The bot is private to this server and is not available for other servers to invite.

This page describes the tools members and staff use inside GlobalHost. It is a project overview, not an offer to provide or host the bot.

## Safety and moderation

### AutoMod

Checks messages and supported attachments against configured rules. Coverage includes repeated messages, floods, mention floods, prohibited language and common obfuscation, suspicious links and invites, configured scam or threat patterns, and attachment checks. Detections record the matched rule and evidence; enforcement depends on the rule and offence history.

**Compared with Discord AutoMod:** Discord's native tool is straightforward to set up for common keyword, spam and mention rules. GlobalHost adds configurable pattern checks, attachment checks and evidence-backed cases tied into its moderation workflow.

### Raid alerts and lockdown

Monitors member joins over a rolling 30-second window and raises an alert at the configured threshold of eight joins. An alert does not automatically lock the server. Owner/Admin staff can start or lift a lockdown; configured public channels are restricted while announcements and staff-only areas are preserved. Saved channel permissions allow restoration after lockdown.

### Moderation tools

Staff commands cover bans, unbans, kicks, timeouts, permanent mutes, warnings, warning review and clearing, moderation history, message purges, slowmode, channel locks, lockdown controls and private staff notes. Actions check role hierarchy and required Discord permissions.

## Forum Review

Configured forums use a structured review workflow. Submissions can be tracked as pending, approved, denied or blacklisted. The system records decisions and revisions, supports reminders for pending reviews, and provides search, statistics and health telemetry. AI-assisted analysis can help reviewers assess a submission, but staff make the final decision.

## Support ticket operations

Interactive ticket panels let members choose a request type and submit an issue. Staff can claim or release tickets, transfer ownership, invite another member, close or reopen a ticket, change priority, add internal notes, inspect ticket details, search records and review support statistics. Ticket deletion retains its audit record. Analytics can be exported as CSV by the Owner.

Compared with a basic private-channel ticket setup, GlobalHost puts more emphasis on handovers, prioritisation and records.

## Developer search and AI-assisted context tools

The four developer search commands are:

- **/search** — web search for a general query.
- **/stackoverflow** — search Stack Overflow for programming questions and answers.
- **/docs** — search developer documentation.
- **/github** — search GitHub repositories.

Message context menus also include **Search Message**, **Encode**, **Decode**, **Check with AI** and **Check Code with AI**. AI checks are staff-only and intended to assist review, not replace human judgement.

## Events and community management

- **Scheduled events:** create, list, edit, cancel and view statistics for community events.
- **Sticky messages:** create or replace a text sticky, build an embed sticky, and remove a channel's sticky. Stickies are restored after restart.
- **Announcements:** send formatted announcements.
- **Embed builder:** create custom embeds through an interactive interface.
- **Bot-authored messages:** authorised staff can use the message command for controlled announcements or utility posts.

## Member and server utilities

Commands provide member information, avatar viewing, server information, role details, channel details, channel listings, a command help view, and bot ping/status checks. The status command checks Discord readiness, database access, GitHub connectivity, search and AI services.

## What makes GlobalHost different?

GlobalHost's strongest point is the combination: AutoMod cases, raid response, staff moderation, support tickets, forum review, developer search and community utilities share one project. That means fewer separate bots and a more consistent staff workflow.

Discord's native tools are simpler for basic needs, while specialist bots may offer deeper integrations or more mature dashboards. GlobalHost stands out when you want these workflows connected in one bot.

## Logging and persistence

The bot keeps operational records for supported workflows, including moderation history, warnings, mutes, AutoMod cases, lockdown state, forum reviews and ticket activity. SQLite-backed records support continuity across restarts where applicable.

---

Browse the [community page](/why-globalhost) or the [command reference used in this server](/commands/).
