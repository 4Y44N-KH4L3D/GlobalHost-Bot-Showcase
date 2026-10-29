---
title: Command Library
description: Command reference for the private bot used in the GlobalHost Discord server.
---

# Command Reference

This reference documents commands registered on the private bot used in the GlobalHost Discord server. It covers commands available within this community; the bot cannot be invited to other servers.

This is the reference for the bot's registered slash commands and message/member context-menu actions. Discord may hide staff commands from members who do not have the required role.

## Role labels

- **Member**: ordinary server members; public commands are also usable by staff.
- **Trial Mod**: the configured Trial Mod role.
- **Mod**: the configured Moderator role.
- **Admin**: the configured Admin role.
- **Owner**: the server owner / configured Owner role.
- **Support**, **Forum Manager** and **Event Manager**: specialist staff roles for their respective workflows.

Role access below reflects the bot's configured role checks. Discord permissions, role hierarchy, command context and bot permissions can impose additional restrictions.

## Developer search

All four commands are public and require a query.

| Command | Arguments | Description |
| --- | --- | --- |
| `/search` | `query` required | Searches the web for a general topic, question or error. |
| `/stackoverflow` | `query` required | Searches Stack Overflow for programming questions. |
| `/docs` | `query` required | Searches developer documentation. |
| `/github` | `query` required | Searches GitHub repositories. |

See [Developer Tools](/commands/developer-tools) for detailed use cases and examples.

## Moderation and channel controls

| Command | Arguments | Description | Roles |
| --- | --- | --- | --- |
| `/ban` | `member` required; `reason` optional; `delete_messages` optional (none, 1 day, 7 days) | Ban a member, optionally deleting recent messages. | Mod, Admin, Owner |
| `/unban` | `user_id` required; `reason` optional | Remove a ban using a Discord user ID. | Mod, Admin, Owner |
| `/kick` | `member` required; `reason` optional | Remove a member from the server. | Mod, Admin, Owner |
| `/timeout` | `member` required; `duration` required; `reason` optional | Apply a temporary timeout. | Trial Mod, Mod, Admin, Owner |
| `/untimeout` | `member` required; `reason` optional | Remove a member's timeout. | Trial Mod, Mod, Admin, Owner |
| `/mute` | `member` required; `reason` optional | Apply the server's permanent mute role. | Trial Mod, Mod, Admin, Owner |
| `/unmute` | `member` required; `reason` optional | Remove a permanent mute and restore saved roles where possible. | Trial Mod, Mod, Admin, Owner |
| `/warn` | `member` required; `reason` required | Record a warning for a member. | Trial Mod, Mod, Admin, Owner |
| `/warnings` | `member` required | View a member's active warnings. | Trial Mod, Mod, Admin, Owner |
| `/clearwarnings` | `member` required; `reason` optional | Clear a member's active warnings. | Mod, Admin, Owner |
| `/history` | `member` required | View a member's recorded moderation history. | Trial Mod, Mod, Admin, Owner |
| `/purge` | `amount` required (1–100); `member` optional | Delete recent messages, optionally from one member only. | Admin, Owner |
| `/slowmode` | `duration` required | Set the current text channel's slowmode, including turning it off. | Admin, Owner |
| `/lock` | No arguments | Prevent members from sending messages in the current text channel. | Admin, Owner |
| `/unlock` | No arguments | Restore sending messages in the current text channel. | Admin, Owner |
| `/lockdown` | `reason` optional | Start a server raid lockdown. | Admin, Owner |
| `/unlockdown` | `reason` optional | Manually lift an active lockdown. | Admin, Owner |
| `/note add` | `member` required; `note` required | Add a private staff note about a member. | Trial Mod, Mod, Admin, Owner |
| `/note remove` | `note_id` required | Remove a staff note by its ID. | Trial Mod, Mod, Admin, Owner |

**Important:** the mute workflow uses the configured permanent-mute role, and moderation targets must be within the staff member's role hierarchy. Lockdown commands are limited to the server Owner or an Admin.

## Support tickets

Ticket-management commands normally need to be run in the relevant ticket channel.

| Command | Arguments | Description | Roles |
| --- | --- | --- | --- |
| `/setup_tickets` | Interactive setup form | Configure and publish the ticket panel, including its title, description, colour, footer and ticket buttons. | Owner |
| `/claim` | No arguments | Claim the current ticket. | Support, Mod, Admin, Owner |
| `/unclaim` | No arguments | Release the current ticket claim. | Support, Mod, Admin, Owner |
| `/transfer` | No arguments; choose the target through the command workflow | Transfer the ticket to another staff member. | Support, Mod, Admin, Owner |
| `/invite` | No arguments; choose the member through the command workflow | Add a member to the current ticket. | Support, Mod, Admin, Owner |
| `/close` | No arguments | Close the current ticket. | Support, Mod, Admin, Owner |
| `/reopen` | No arguments | Reopen a closed ticket. | Support, Mod, Admin, Owner |
| `/ticketdelete` | No arguments | Delete the ticket channel while retaining its audit record. | Support, Mod, Admin, Owner |
| `/ticketinfo` | No arguments | View detailed information about the current ticket. | Support, Mod, Admin, Owner |
| `/priority` | `priority` required: low, normal, high or urgent | Change the current ticket's priority. | Admin, Owner |
| `/ticketsearch` | All optional: `number`, `creator`, `claimer`, `status`, `priority`, `ticket_type`, `tag`, `query`; `limit` optional (1–25, default 10) | Search ticket records, including deleted tickets. | Mod, Admin, Owner |
| `/ticketstats` | `period` optional: 7 days, 30 days, 90 days or all time | View ticket volume, statuses, priorities and ratings. | Mod, Admin, Owner |
| `/ticketnote add` | `note` required | Add an internal note to the current ticket. | Mod, Admin, Owner |
| `/ticketnote remove` | `note_id` required | Remove an internal ticket note by ID. | Mod, Admin, Owner |
| `/export_analytics` | No arguments | Export ticket analytics as a CSV file. | Owner |
| `/staffstats` | `period` optional: 7 days, 30 days, 90 days or all time | View support staff activity and ratings. | Trial Mod, Mod, Admin, Owner |

The ticket setup flow supports a maximum of five ticket buttons. The ticket panel asks members to choose a type and describe their issue before the ticket is created.

## Forum Review

| Command | Arguments | Description | Roles |
| --- | --- | --- | --- |
| `/forumstats` | `days` optional, 1–365; default 30 | View submission counts, decisions, rates, average review time and pending reviews. | Forum Manager, Mod, Admin, Owner |
| `/forumhealth` | `days` optional, 1–365; default 30 | View processing events, failures, retries and average event time. | Forum Manager, Mod, Admin, Owner |
| `/forumhistory` | `query` optional; `status` optional; `member` optional; `limit` optional (1–15, default 10) | Search forum review history by content, status or author. | Forum Manager, Mod, Admin, Owner |
| `/solved` | No arguments | Mark the current forum question as solved. | Thread author; staff access follows the command's server context |

Forum review statuses include pending, approved, denied and blacklisted. AI-assisted analysis does not replace the staff decision.

## Scheduled events

All `/event` subcommands are available to Event Managers, Mods, Admins and the Owner.

| Command | Arguments | Description |
| --- | --- | --- |
| `/event create` | `name` required; `start` required; `end`, `description`, `location` optional | Create a scheduled community event. If omitted, the end time defaults to one hour after the start. |
| `/event list` | No arguments | List upcoming and active scheduled events. |
| `/event edit` | `event_id` required; `name`, `start`, `end`, `description`, `location` optional | Edit a scheduled event. |
| `/event cancel` | `event_id` required | Cancel a scheduled event. |
| `/event stats` | No arguments | View event status counts and total interest. |

Use an ISO 8601 start time, such as `2026-10-30T18:00+00:00`. Times without a timezone are interpreted as UTC.

## Sticky messages

All `/sticky` subcommands require Admin or Owner access and apply to the current channel.

| Command | Arguments | Description |
| --- | --- | --- |
| `/sticky text` | `message` required | Create or replace a text sticky, up to 2,000 characters. |
| `/sticky embed` | Interactive embed builder | Create an embed sticky. |
| `/sticky remove` | No arguments | Remove the sticky from the current channel. |

## Messaging and announcements

| Command | Arguments | Description | Roles |
| --- | --- | --- | --- |
| `/say` | `message` required | Send a message as the bot. | Admin, Owner |
| `/embed` | Interactive embed builder | Build and send a custom embed. | Admin, Owner |
| `/announce` | `title` required; `description` required | Send a formatted announcement. | Admin, Owner |
| `/contactuser` | `user_id` required; `message` required | Contact a Discord user through the bot. | Admin, Owner |

## Member and server information

These commands are public unless Discord's own permissions or context restrictions apply.

| Command | Arguments | Description |
| --- | --- | --- |
| `/help` | No arguments | Show the bot's command help. |
| `/userinfo` | `member` optional; defaults to you | Show a member's IDs, account dates, roles and status. |
| `/avatar` | `member` optional; defaults to you | Display a member's avatar. |
| `/serverinfo` | No arguments | Show server owner, creation date, member count, channels and roles. |
| `/roleinfo` | `role` required | Show role position, member count, settings and creation date. |
| `/channelinfo` | `channel` required | Show channel type, ID, category, position and relevant settings. |
| `/channels` | No arguments | List server channels and their IDs. |
| `/pingbot` | No arguments | Check whether the bot responds. |
| `/status` | No arguments | Check Discord readiness, database, GitHub, search and AI service health. |

## Message and member context menus

These actions appear when right-clicking a message or member in Discord, rather than being typed as slash commands.

| Context action | Target | Access | Description |
| --- | --- | --- | --- |
| **Contact User** | Member | Admin, Owner | Open the contact-user workflow. |
| **Delete Message** | Message | Trial Mod, Mod, Admin, Owner | Run the message deletion workflow. |
| **Mute** / **Unmute** | Member | Trial Mod, Mod, Admin, Owner | Apply or remove a permanent mute. |
| **User Info** | Member | Public | Show member information. |
| **Warnings** | Member | Trial Mod, Mod, Admin, Owner | View active warnings. |
| **Moderation History** | Member | Trial Mod, Mod, Admin, Owner | View recorded moderation actions. |
| **Warn** | Member | Trial Mod, Mod, Admin, Owner | Open the warning workflow. |
| **Kick** | Member | Mod, Admin, Owner | Open the kick workflow. |
| **Timeout** | Member | Trial Mod, Mod, Admin, Owner | Open the timeout workflow. |
| **Ban** | Member | Mod, Admin, Owner | Open the ban workflow. |
| **Search Message** | Message | Public | Search the web using the selected message text. |
| **Encode** / **Decode** | Message | Public | Encode or decode the selected message text. |
| **Check with AI** | Message | Trial Mod, Mod, Admin, Owner | Request AI-assisted analysis of a message. |
| **Check Code with AI** | Message | Trial Mod, Mod, Admin, Owner | Request AI-assisted analysis focused on code. |

## Notes on access

- Public commands are usable by members and staff.
- Specialist commands require their named role in addition to any role level shown.
- Commands may fail when the bot lacks a Discord permission, a target is above the caller in the role hierarchy, or the command is used outside its intended channel.
- This reference documents the commands registered in the current source. Discord's command picker remains the live view of the commands available to your account.
