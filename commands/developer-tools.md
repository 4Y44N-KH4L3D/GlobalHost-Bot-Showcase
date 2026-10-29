---
title: Developer Tools
description: Reference for the programming search commands available in the GlobalHost server.
---

# Developer Tools

These commands are part of the private bot used in the GlobalHost Discord server. They are documented here for members of this community; the bot is not available for other servers to invite.

These four slash commands let members search common programming resources from Discord. Each command takes a required `query` string and returns results in Discord. The quality and availability of results depend on the search provider and the query.

## `/search`

**Description:** Search the web for a general question, error message, library, concept or technical topic.

| Argument | Required | Description |
| --- | --- | --- |
| `query` | Yes | What you want to search for. |

**Example:** `/search query: Python asyncio task groups`

Use it for broad technical research, comparing approaches, finding tutorials or locating a source when you do not know which site is likely to help.

## `/stackoverflow`

**Description:** Search Stack Overflow for programming questions.

| Argument | Required | Description |
| --- | --- | --- |
| `query` | Yes | The programming question or error you want to find. |

**Example:** `/stackoverflow query: discord.py app command interaction failed`

Use it to find existing questions, answers and debugging discussions. Check the accepted answer's date and the versions involved before applying it.

## `/docs`

**Description:** Search developer documentation.

| Argument | Required | Description |
| --- | --- | --- |
| `query` | Yes | The API, library, framework or concept you want documented. |

**Example:** `/docs query: Python pathlib Path.read_text`

Use it to look up API behaviour, parameters, return values and usage guidance. Prefer the official documentation for the library or language version you are using.

## `/github`

**Description:** Search GitHub repositories.

| Argument | Required | Description |
| --- | --- | --- |
| `query` | Yes | The repository, project or topic you want to find. |

**Example:** `/github query: Python Discord bot moderation`

Use it to discover repositories and example implementations. Review a project's maintenance, licence, dependencies and code before reusing it.

## Access and limitations

All four commands are available to ordinary members and staff. They do not require a staff role. Search results are external information, so verify important details against the original source. Search commands are not a substitute for reading documentation or testing code.

For the full inventory, including staff-only commands and their arguments, see the [Command Library](/commands/).
