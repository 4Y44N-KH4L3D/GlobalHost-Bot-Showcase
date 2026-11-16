---
title: Command Library
description: Current command reference for the private bot used in the GlobalHost Discord server.
---

# Command Reference

This reference documents the active commands and context-menu actions available in the GlobalHost server. The bot is private to this community and cannot be invited to other servers.

Discord may hide staff commands from members who do not have the required role. Role checks, Discord permissions, role hierarchy and channel context can impose additional restrictions.

## Role labels

- **Member:** ordinary server members.
- **Trial Mod:** the configured Trial Moderator role.
- **Mod:** the configured Moderator role.
- **Admin:** the configured Administrator role.
- **Owner:** the server Owner.
- **Support, Forum Manager, Event Manager and Post Reviewer:** specialist staff roles for their respective workflows.

## Member profiles

| Command | Arguments | Description | Access |
| --- | --- | --- | --- |
| `/profile` | `member` optional; defaults to you | View your own profile or another member's profile. Use the profile buttons to create or edit your own profile. | View: Member; create/edit: Level 1+ |
 
Profile editing includes an introduction, programming languages, interests, devices, favourite brands, favourite games, projects and GitHub details. Advanced customisation unlocks at Level 3.

## Challenges

Challenges are short technology trivia rounds and minigames. Members submit one answer per round using the button on the published challenge.

| Command | Arguments | Description | Access |
| --- | --- | --- | --- |
| `/createchallenge` | `challenge_type`, `topic`, `language`, `version`, `difficulty` required; `context` optional | Generate a private draft, review it and publish it to the challenge channel. | Mod, Admin, Owner, Event Manager, Support, Forum Manager, Post Reviewer |
| `/endchallenge` | `challenge_id` required | End an active challenge and disable submissions. | Same staff roles as create |
| `/reviewchallenge` | `challenge_id` required; `member` optional | Review challenge submissions and publish confirmed results. | Same staff roles as create |
| `/challengeleaderboard` | No arguments | View challenge wins and honourable mentions. | Member |
| `/challengehistory` | No arguments | View recent GlobalHost challenges. | Member |

Challenge formats include Quick Trivia, Guess the Output, Spot the Bug, Code Riddle, Guess the Device or Brand, and Odd One Out. Staff can choose a topic, difficulty, programming language and version where relevant.

## Developer search

All four commands are public and require a query.

| Command | Arguments | Description |
| --- | --- | --- |
| `/search` | `query` required | Search the web for a general topic, question or error. |
| `/stackoverflow` | `query` required | Search Stack Overflow for programming questions. |
| `/docs` | `query` required | Search developer documentation. |
| `/github` | `query` required | Search GitHub repositories. |

See [Developer Tools](/commands/developer-tools) for detailed examples.

## Moderation and channel controls

| Command | Arguments | Description | Access |
| --- | --- | --- | --- |
| `/ban` | `member` required; `reason` and `delete_messages` optional | Ban a server member, optionally deleting recent messages. | Mod, Admin, Owner |
| `/banuser` | `user_id` required; `reason` and `delete_messages` optional | Ban a Discord user by ID, including users who are not currently in the server. | Mod, Admin, Owner |
| `/unban` | `user_id` required; `reason` optional | Remove a ban using a Discord user ID. | Mod, Admin, Owner |
| `/timeout` | `member`, `duration` required; `reason` optional | Apply a temporary timeout. | Trial Mod, Mod, Admin, Owner |
| `/untimeout` | `member` required; `reason` optional | Remove a member's timeout. | Trial Mod, Mod, Admin, Owner |
| `/mute` | `member` required; `reason` optional | Apply the server's permanent mute role. | Mod, Admin, Owner |
| `/unmute` | `member` required; `reason` optional | Remove a permanent mute and restore saved roles where possible. | Mod, Admin, Owner |
| `/warn` | `member`, `reason` required | Record a warning for a member. | Mod, Admin, Owner |
| `/warnings` | `member` required | View a member's active warnings. | Trial Mod, Mod, Admin, Owner |
| `/clearwarnings` | `member` required; `reason` optional | Clear a member's active warnings. | Mod, Admin, Owner |
| `/history` | `member` required | View a member's recorded moderation history. | Trial Mod, Mod, Admin, Owner |
| `/purge` | `amount` required (1–100); `member` optional | Delete recent messages, optionally from one member. | Admin, Owner |
| `/slowmode` | `duration` required | Set the current text channel's slowmode, including turning it off. | Admin, Owner |
| `/lock` | No arguments | Prevent members from sending messages in the current channel. | Admin, Owner |
| `/unlock` | No arguments | Restore sending messages in the current channel. | Admin, Owner |
| `/lockdown` | `reason` optional | Restrict configured public channels during a raid response. | Admin, Owner |
| `/unlockdown` | `reason` optional | Manually lift an active lockdown. | Admin, Owner |
| `/note add` | `member`, `note` required | Add a private staff note about a member. | Mod, Admin, Owner |
| `/note remove` | `note_id` required | Remove a private staff note by its ID. | Mod, Admin, Owner |

Permanent mutes use the configured Muted role. Moderation actions are subject to staff role hierarchy and the bot's Discord permissions.

## Support tickets

Ticket-management commands are normally used in the relevant ticket channel. Members open tickets through the published ticket panel.

| Command | Arguments | Description | Access |
| --- | --- | --- | --- |
| `/claim` | No arguments | Claim the current ticket. | Support, Mod, Admin, Owner |
| `/unclaim` | No arguments | Release the current ticket claim. | Support, Mod, Admin, Owner |
| `/transfer` | Choose a staff member in the workflow | Transfer the ticket to another staff member. | Support, Mod, Admin, Owner |
| `/invite` | Choose a member in the workflow | Add a member to the current ticket. | Support, Mod, Admin, Owner |
| `/close` | No arguments | Close the current ticket. | Support, Mod, Admin, Owner |
| `/reopen` | No arguments | Reopen a closed ticket. | Support, Mod, Admin, Owner |
| `/ticketdelete` | No arguments | Delete the ticket channel while retaining its audit record. | Support, Mod, Admin, Owner |
| `/ticketinfo` | No arguments | View detailed information about the current ticket. | Support, Mod, Admin, Owner |
| `/priority` | `priority` required: low, normal, high or urgent | Change the current ticket's priority. | Admin, Owner |
| `/ticketsearch` | Filters optional: `number`, `creator`, `claimer`, `status`, `priority`, `ticket_type`, `tag`, `query`; `limit` optional | Search ticket records, including deleted tickets. | Mod, Admin, Owner |
| `/ticketstats` | `period` optional: 7 days, 30 days, 90 days or all time | View ticket volume, statuses, priorities and ratings. | Mod, Admin, Owner |
| `/ticketnote add` | `note` required | Add an internal note to the current ticket. | Mod, Admin, Owner |
| `/ticketnote list` | No arguments | View internal notes on the current ticket. | Mod, Admin, Owner |
| `/ticketnote remove` | `note_id` required | Remove an internal ticket note by ID. | Mod, Admin, Owner |
| `/export_analytics` | No arguments | Export ticket analytics as a CSV file. | Owner |
| `/staffstats` | `period` optional: 7 days, 30 days, 90 days or all time | View support staff activity and ratings. | Mod, Admin, Owner |

## Staff applications

| Command | Arguments | Description | Access |
| --- | --- | --- | --- |
| `/staffapplications` | `status` required: Open or Closed | Open or close GlobalHost staff applications. | Admin, Owner |

The application workflow includes eligibility checks, application review, interview tickets and application records. The panel itself is maintained by server staff.

## Forum Review

| Command | Arguments | Description | Access |
| --- | --- | --- | --- |
| `/forumstats` | `days` optional (1–365; default 30) | View submission counts, decisions, rates and average review time. | Forum Manager, Mod, Admin, Owner |
| `/forumhealth` | `days` optional (1–365; default 30) | View processing events, failures, retries and average event time. | Forum Manager, Mod, Admin, Owner |
| `/forumhistory` | `query`, `status`, `member` optional; `limit` optional (1–15; default 10) | Search forum review history by content, status or author. | Forum Manager, Mod, Admin, Owner |
| `/solved` | No arguments | Mark your current forum question as solved. | Thread author |

Forum review statuses include pending, approved, denied and blacklisted. AI-assisted analysis can provide context, but staff make the final decision.

## Scheduled events

All `/event` subcommands are available to Event Managers, Mods, Admins and the Owner.

| Command | Arguments | Description |
| --- | --- | --- |
| `/event create` | `name`, `start` required; `end`, `description`, `location` optional | Create a scheduled community event. |
| `/event list` | No arguments | List upcoming and active scheduled events. |
| `/event edit` | `event_id` required; other event details optional | Edit a scheduled event. |
| `/event cancel` | `event_id` required | Cancel a scheduled event. |
| `/event stats` | No arguments | View event statistics. |

Use an ISO 8601 start time, such as `2026-10-30T18:00+00:00`. Times without a timezone are interpreted as UTC.

## Sticky messages

All `/sticky` subcommands require Admin or Owner access and apply to the current channel.

| Command | Arguments | Description |
| --- | --- | --- |
| `/sticky text` | `message` required | Create or replace a text sticky, up to 2,000 characters. |
| `/sticky embed` | Interactive embed builder | Create an embed sticky. |
| `/sticky remove` | No arguments | Remove the sticky from the current channel. |

## Messaging and announcements

| Command | Arguments | Description | Access |
| --- | --- | --- | --- |
| `/say` | `message` required | Send a message as the bot. | Admin, Owner |
| `/embed` | Interactive embed builder | Build and send a custom embed. | Admin, Owner |
| `/announce` | `title`, `description` required | Send a formatted announcement. | Admin, Owner |
| `/contactuser` | `user_id`, `message` required | Contact a Discord user through the bot. | Admin, Owner |

## Member and server information

These commands are public unless Discord's own permissions or context restrictions apply.

| Command | Arguments | Description |
| --- | --- | --- |
| `/help` | No arguments | Show the bot's command help. |
| `/userinfo` | `member` optional; defaults to you | Show a user's IDs, account dates, roles and status. |
| `/avatar` | `member` optional; defaults to you | Display a user's avatar. |
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
| **Delete Message** | Message | Mod, Admin, Owner | Delete the selected message. |
| **Mute** / **Unmute** | Member | Mod, Admin, Owner | Apply or remove a permanent mute. |
| **User Info** | Member | Public | Show user information. |
| **Warnings** | Member | Trial Mod, Mod, Admin, Owner | View active warnings. |
| **Moderation History** | Member | Trial Mod, Mod, Admin, Owner | View recorded moderation actions. |
| **Warn** | Member | Mod, Admin, Owner | Open the warning workflow. |
| **Timeout** | Member | Trial Mod, Mod, Admin, Owner | Open the timeout workflow. |
| **Ban** | Member | Mod, Admin, Owner | Open the ban workflow. |
| **Search Message** | Message | Public | Search the web using the selected message text. |
| **Encode** / **Decode** | Message | Public | Encode or decode the selected message text as Base64. |
| **Check with AI** | Message | Mod, Admin, Owner | Request AI-assisted analysis of a message. |
| **Check Code with AI** | Message | Mod, Admin, Owner | Request AI-assisted analysis focused on code. |

## Notes on access

- Public commands are usable by members and staff.
- Specialist commands require the relevant staff role.
- Some profile editing features require Level 1 or Level 3.
- Commands may fail when the bot lacks a Discord permission, a target is above the caller in the role hierarchy, or the command is used outside its intended channel.
- Discord's command picker is the live view of commands available to your account.
