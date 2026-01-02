
# How Skills Work in Claude Code

## Invocation Methods

### Method 1: Slash command
  /critique recent
  /respond the-hyphal-hierarchy

### Method 2: Natural language (Claude auto-matches)
  "critique the last week of commits"  # → triggers /critique
  "add builder reflections to the post" # → triggers /respond

### Method 3: Skills discovery
  /skills              # List all available skills
  /skill critique      # Show skill details

  Skill Anatomy

  Every skill has a SKILL.md with YAML frontmatter:
```text
  ---
  name: "critique"
  description: "Generate critical analyses of Univrs.io... Use when critiquing DOL, VUDO..."
  allowed-tools: Read, Glob, Grep, Bash(git:*), Write, Edit
  ---

  - name: Display name (max 64 chars)
  - description: What + When triggers it (max 1024 chars) - loaded into system prompt
  - allowed-tools: Optional sandbox restrictions

  Skill Locations

  | Location               | Scope                   |
  |------------------------|-------------------------|
  | ~/.claude/skills/      | Personal (all projects) |
  | <repo>/.claude/skills/ | Project-specific (team) |

  ---
  Skills Inventory Across ~/repos

  Total Count: 78 SKILL.md files

  | Repository                 | Count | Purpose                          |
  |----------------------------|-------|----------------------------------|
  | univrs-network             | 26    | Core network development         |
  | llvm-translation-mcp       | 26    | LLVM translation (duplicate set) |
  | OLD-MycelialNetwork-Skills | 26    | Legacy/archive                   |
  | krzy                       | 2     | Critique workflow                |

```

###  Skill Categories

  AgentDB (5 skills)
  - agentdb-advanced - Advanced memory patterns
  - agentdb-memory-patterns - Memory storage strategies
  - agentdb-vector-search - Semantic search
  - agentdb-optimization - Performance tuning
  - agentdb-learning - Agent learning from experience

  Flow/Swarm (5 skills)
  - flow-nexus-swarm - Multi-agent coordination
  - flow-nexus-neural - Neural-style topology
  - flow-nexus-platform - Platform integration
  - swarm-orchestration - Mesh/hierarchical/adaptive topologies
  - swarm-advanced - Complex swarm patterns

  GitHub Integration (5 skills)
  - github-code-review - PR review automation
  - github-multi-repo - Cross-repo operations
  - github-project-management - Issue/project tracking
  - github-workflow-automation - CI/CD workflows
  - github-release-management - Release automation

  Development Process (4 skills)
  - pair-programming - Collaborative coding
  - performance-analysis - Profiling/optimization
  - skill-builder - Create new skills (meta!)
  - verification-quality - Testing verification

  ReasoningBank (2 skills)
  - reasoningbank-agentdb - Reasoning storage
  - reasoningbank-intelligence - Reasoning retrieval

  Methodology (2 skills)
  - sparc-methodology - SPARC development flow
  - agentic-jujutsu - Agentic patterns

  Other (3 skills)
  - hive-mind-advanced - Collective intelligence
  - hooks-automation - Claude Code hooks
  - stream-chain - Streaming pipelines

  krzy.ai-specific (3 skills)
  - critique - Generate Luddite analyses of Univrs.io
  - respond - Add builder exegesis to critiques
  - evolve - Self-evolving skill feedback loop

  ---
  ### Claude-Flow Swarm Automation
```text
  .flows YAML Files Found: 22

  | Repository           | Files | Purpose                   |
  |----------------------|-------|---------------------------|
  | univrs-vudo          | 6     | VUDO platform development |
  | learn.univrs.io      | 3     | Tutorial generation       |
  | univrs-enr           | 3     | ENR economic primitives   |
  | univrs-orchestration | 2     | Orchestration tasks       |
  | univrs-dol           | 2     | DOL language development  |
  | dol-flows-scratch    | 1     | HIR development           |
  | vudo.univrs.io       | 1     | Web portal                |
  | krzy                 | 1     | Critique site automation  |
```

  How to Run a Swarm
```text
  npx claude-flow@alpha swarm "read .flows/krzy-ai-swarm.yaml --workflow krzy-site"
```

  Swarm YAML Structure (from krzy-ai-swarm.yaml)
```yaml
  name: "krzy.ai: The Critic's Mirror"
  version: "1.0.0"

  workflows:
    krzy-site:
      phases: [site_structure, content_system, style_design, deployment]

    critique-cycle:
      phases: [gather_facts, historical_research, write_critique, publish]

  agents:
    site_architect:
      role: "Design minimal static site structure"
      model: "claude-sonnet-4-20250514"
      workflow: krzy-site
      phase: site_structure
      tasks: [...]

  coordination:
    strategy: "sequential"
    sync_points: [...]
```

  ---
  ### krzy/.claude/skills/* Deep Dive

```text
  krzy/.claude/skills/
  ├── critique/           # /critique skill
  │   ├── SKILL.md        # Main skill definition
  │   ├── framework.md    # Luddite 6-question framework
  │   ├── sources.md      # Ecosystem repos mapping
  │   └── post-template.md # HTML post structure
  ├── respond/            # /respond skill
  │   └── SKILL.md        # Exegesis workflow
  └── meta/               # /evolve skill
      ├── SKILL.md        # Self-evolving feedback loop
      ├── CLAUDE.md       # Evolution framework reference
      ├── meta.md         # Meta documentation
      └── planetserve-integration.md  # Integration guide
```
  ---
  ### Building New Skills for the Ecosystem

  Potential New Skills for Univrs.io

  | Skill Idea          | Purpose                     | Triggers                 | Status      |
  |---------------------|-----------------------------|--------------------------|-------------|
  | /dol-compile        | Compile DOL to Rust/TS/WASM | "compile this schema"    | planned     |
  | /spirit-package     | Create Spirit packages      | "package this as Spirit" | planned     |
  | /enr-analyze        | Analyze economic flows      | "review pricing model"   | planned     |
  | /vudo-sandbox       | Run WASM in VUDO            | "execute in sandbox"     | planned     |
  | /cryptosaint-credit | Manage mutual credit        | "check credit balance"   | planned     |
  | /learn-tutorial     | Generate tutorials          | "create tutorial for"    | planned     |
  | /ecosystem-health   | Cross-repo health check     | "ecosystem status"       | implemented |

### Skill Creation Workflow

```text

  # 1. Create skill directory
  mkdir -p ~/repos/[project]/.claude/skills/[skill-name]

  # 2. Create SKILL.md with proper frontmatter
  cat > SKILL.md << 'EOF'
  ---
  name: "My Skill"
  description: "What it does. When to use it."
  allowed-tools: Read, Glob, Grep, Bash(git:*)
  ---

  # My Skill

  
  ## What This Skill Does

  
  ## Quick Start
  

  EOF

  # 3. Restart Claude Code to load skills
```

### Connecting Skills to Claude-Flow

  Skills and swarms complement each other:

  - Skills = Single Claude Code session, human-interactive
  - Swarms = Multi-agent orchestration, automated pipelines



```yaml
  Example integration:
  # In .flows/my-swarm.yaml
  hooks:
    on_release:
      workflow: "critique-cycle"  # Uses /critique skill patterns
```

  The krzy skills (/critique and /respond) demonstrate a complete workflow pattern: automated analysis → draft PR → human review → merge. This pattern can be extended to other ecosystem tools with skills like /dol-lint, /vudo-test, /enr-simulate.
