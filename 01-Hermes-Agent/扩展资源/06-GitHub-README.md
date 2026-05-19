# Hermes Agent - GitHub README

> 来源：https://github.com/NousResearch/hermes-agent

---

## Overview

Hermes Agent 是由 [Nous Research](https://nousresearch.com) 构建的**自进化 AI Agent**。它具有内置的学习循环，可以从经验中创建技能、在使用中改进技能、持久化知识、搜索过往对话，并构建跨会话的用户模型。

它可以在 $5 VPS、GPU 集群或低成本无服务器基础设施上运行，可通过 Telegram 访问，同时运行在云 VM 上。

支持通过多个提供商（Nous Portal、OpenRouter 200+ 模型、NovitaAI、NVIDIA NIM、Xiaomi MiMo、z.ai/GLM、Kimi/Moonshot、MiniMax、Hugging Face、OpenAI 或自定义端点）使用任何模型，无需代码更改或锁定，使用 `hermes model` 即可切换。

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Real terminal interface** | Full TUI with multiline editing, slash-command autocomplete, conversation history, interrupt-and-redirect, and streaming tool output. |
| **Cross-platform availability** | Accessible via Telegram, Discord, Slack, WhatsApp, Signal, and CLI from a single gateway process, with voice memo transcription and cross-platform conversation continuity. |
| **Closed learning loop** | Agent-curated memory with periodic nudges, autonomous skill creation after complex tasks, self-improving skills, FTS5 session search with LLM summarization for cross-session recall, [Honcho](https://github.com/plastic-labs/honcho) dialectic user modeling, and compatibility with the [agentskills.io](https://agentskills.io) open standard. |
| **Scheduled automations** | Built-in cron scheduler with delivery to any platform, supporting unattended natural language scheduled tasks (daily reports, nightly backups, weekly audits). |
| **Delegation and parallelization** | Spawns isolated subagents for parallel workstreams; supports Python scripts that call tools via RPC to collapse multi-step pipelines into zero-context-cost turns. |
| **Flexible deployment** | Seven terminal backends: local, Docker, SSH, Singularity, Modal, Daytona, and Vercel Sandbox. Daytona and Modal offer serverless persistence (hibernates when idle, wakes on demand, low cost between sessions). |
| **Research-ready** | Batch trajectory generation and trajectory compression for training next-generation tool-calling models. |

---

## Quick Install

### Linux, macOS, WSL2, Termux

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

After installation, reload your shell and start the agent:

```bash
source ~/.bashrc    # or source ~/.zshrc for zsh
hermes              # start chatting
```

### Windows (Native, PowerShell) – Early Beta

> **Note:** Native Windows support is early beta. For the most stable Windows experience, use the Linux installer inside WSL2.

```powershell
iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)
```

The installer automatically handles dependencies: uv, Python 3.11, Node.js, ripgrep, ffmpeg, and a portable Git Bash (MinGit, unpacked to `%LOCALAPPDATA%\hermes\git`, no admin required, isolated from system Git). If system Git is already installed, it uses that instead.

### Android / Termux

Follow the [Termux guide](https://hermes-agent.nousresearch.com/docs/getting-started/termux). Hermes installs a curated `.[termux]` extra on Termux to avoid incompatible voice dependencies.

---

## Getting Started Core Commands

| Command | Purpose |
|---------|---------|
| `hermes` | Start interactive CLI conversation |
| `hermes model` | Choose LLM provider and model |
| `hermes tools` | Configure enabled tools |
| `hermes config set` | Set individual config values |
| `hermes gateway` | Start messaging gateway (Telegram, Discord, etc.) |
| `hermes setup` | Run full setup wizard (configures all settings at once) |
| `hermes claw migrate` | Migrate from OpenClaw (if applicable) |
| `hermes update` | Update to the latest version |
| `hermes doctor` | Diagnose issues |

Full documentation is available at [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/).

---

## CLI vs Messaging Platform Quick Reference

| Action | CLI | Messaging Platforms |
|---------|-----|---------------------|
| Start chatting | `hermes` | Run `hermes gateway setup` + `hermes gateway start`, then send the bot a message |
| Start fresh conversation | `/new` or `/reset` | `/new` or `/reset` |
| Change model | `/model [provider:model]` | `/model [provider:model]` |
| Set a personality | `/personality [name]` | `/personality [name]` |
| Retry or undo last turn | `/retry`, `/undo` | `/retry`, `/undo` |
| Compress context / check usage | `/compress`, `/usage`, `/insights [--days N]` | `/compress`, `/usage`, `/insights [days]` |
| Browse skills | `/skills` or `/<skill-name>` | `/<skill-name>` |
| Interrupt current work | `Ctrl+C` or send a new message | `/stop` or send a new message |
| Platform-specific status | `/platforms` | `/status`, `/sethome` |

---

## Migrating from OpenClaw

Hermes automatically imports settings, memories, skills, and API keys from OpenClaw:

### Run migration

- **During first-time setup:** The `hermes setup` wizard automatically detects `~/.openclaw` and offers to migrate before configuration.
- **Anytime after install:**

```bash
hermes claw migrate              # Interactive full migration
hermes claw migrate --dry-run    # Preview what would be migrated
hermes claw migrate --preset user-data   # Migrate without secrets
hermes claw migrate --overwrite  # Overwrite existing conflicts
```

### Imported content

- Persona file (`SOUL.md`)
- Memories (entries from `MEMORY.md` and `USER.md`)
- User-created skills (migrated to `~/.hermes/skills/openclaw-imports/`)
- Command allowlist (approval patterns)
- Messaging settings (platform configs, allowed users, working directory)
- Allowlisted API keys (Telegram, OpenRouter, OpenAI, Anthropic, ElevenLabs)
- TTS assets (workspace audio files)
- Workspace instructions (`AGENTS.md`, with `--workspace-target` flag)

Use `hermes claw migrate --help` for all options, or the `openclaw-migration` skill for an interactive agent-guided migration with dry-run previews.

---

## Documentation Sections

All documentation lives at [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs):

| Section | Coverage |
|---------|----------|
| [Quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart) | Install → setup → first conversation in 2 minutes |
| [CLI Usage](https://hermes-agent.nousresearch.com/docs/user-guide/cli) | Commands, keybindings, personalities, sessions |
| [Configuration](https://hermes-agent.nousresearch.com/docs/user-guide/configuration) | Config file, providers, models, all options |
| [Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging) | Telegram, Discord, Slack, WhatsApp, Signal, Home Assistant setup |
| [Security](https://hermes-agent.nousresearch.com/docs/user-guide/security) | Command approval, DM pairing, container isolation |
| [Tools & Toolsets](https://hermes-agent.nousresearch.com/docs/user-guide/features/tools) | 40+ tools, toolset system, terminal backends |
| [Skills System](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) | Procedural memory, Skills Hub, creating skills |
| [Memory](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory) | Persistent memory, user profiles, best practices |
| [MCP Integration](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp) | Connect any MCP server for extended capabilities |
| [Cron Scheduling](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) | Scheduled tasks with platform delivery |
| [Context Files](https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files) | Project context that shapes every conversation |
| [Architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture) | Project structure, agent loop, key classes |
| [Contributing](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing) | Development setup, PR process, code style |
| [CLI Reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands) | All commands and flags |
| [Environment Variables](https://hermes-agent.nousresearch.com/docs/reference/environment-variables) | Complete env var reference |

---

## Contributing

Contributions are welcome. Follow the [Contributing Guide](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing) for development setup, code style, and PR process.

### Quick contributor setup

```bash
git clone https://github.com/NousResearch/hermes-agent.git
cd hermes-agent
./setup-hermes.sh     # Installs uv, creates venv, installs .[all], symlinks ~/.local/bin/hermes
./hermes              # Auto-detects the venv, no need to source first
```

### Manual setup (equivalent to above)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv venv .venv --python 3.11
source .venv/bin/activate
uv pip install -e ".[all,dev]"
scripts/run_tests.sh
```

---

## Community Resources

- 💬 [Discord](https://discord.gg/NousResearch)
- 📚 [Skills Hub](https://agentskills.io)
- 🐛 [Issue Tracker](https://github.com/NousResearch/hermes-agent/issues)
- 🔌 [computer-use-linux](https://github.com/avifenesh/computer-use-linux): Linux desktop-control MCP server for Hermes and other MCP hosts, with AT-SPI accessibility trees, Wayland/X11 input, screenshots, and compositor window targeting.
- 🔌 [HermesClaw](https://github.com/AaronWong1999/hermesclaw): Community WeChat bridge to run Hermes Agent and OpenClaw on the same WeChat account.

---

## License

MIT – see [LICENSE](LICENSE).

---
Built by [Nous Research](https://nousresearch.com).
