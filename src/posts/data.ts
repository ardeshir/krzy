export interface Post {
  slug: string
  title: string
  subtitle?: string
  date: string
  tags?: string[]
}

export const posts: Post[] = [
  {
    slug: 'the-progress-machine',
    title: 'The Progress Machine',
    subtitle: 'On Milestones, Metrics, and the Dashboard of Hope',
    date: '2026-01-01',
    tags: ['critique', 'ecosystem', 'metrics', 'ai', 'power'],
  },
  {
    slug: 'the-brics-bridge',
    title: 'The BRICS Bridge',
    subtitle: 'On Regenerative Credit, Geopolitical Settlement, and Whose Sovereignty',
    date: '2026-01-01',
    tags: ['cryptosaint', 'critique', 'economics', 'geopolitics', 'power'],
  },
  {
    slug: 'the-hyphal-hierarchy',
    title: 'The Hyphal Hierarchy',
    subtitle: 'On Mycelium, Agents, and Who Becomes the Hub',
    date: '2025-12-31',
    tags: ['dol', 'enr', 'critique', 'power', 'network'],
  },
  {
    slug: 'the-platform-engineers-wager',
    title: "The Platform Engineer's Wager",
    subtitle: 'Univrs.io and the Machinery of Hope',
    date: '2025-12-31',
    tags: ['univrs', 'critique', 'precedents'],
  },
]

const postContents: Record<string, string> = {
  'the-progress-machine': `
<h2>I. THE DASHBOARD</h2>
<p>Across learn.univrs.io and vudo.univrs.io, a new component appears: the <strong>MilestoneTracker</strong>. It displays progress with satisfying metrics:</p>
<ul>
  <li><strong>6/7 phases complete</strong></li>
  <li><strong>1,156 tests passing</strong></li>
  <li><strong>3,094 lines of DOL</strong></li>
</ul>
<p>The dashboard glows with progress. Checkmarks accumulate. The revolution is 85.7% complete.</p>
<p>But who defines the phases? Who counts the lines? And what do these numbers actually measure?</p>

<h2>II. THE METRICS</h2>
<p>The commit messages reveal the shape of progress:</p>
<blockquote>
  <p><em>"Display development stats (6/7 phases, 1,156 tests, 3,094 DOL lines)"</em></p>
</blockquote>
<p>Notice what is measured:</p>
<ul>
  <li><strong>Phases</strong> — defined by the builder</li>
  <li><strong>Tests</strong> — written by the builder</li>
  <li><strong>Lines</strong> — authored by the builder</li>
</ul>
<p>Notice what is not measured:</p>
<ul>
  <li><strong>Users</strong> — who runs this code?</li>
  <li><strong>Deployments</strong> — where is it running?</li>
  <li><strong>Adoption</strong> — who depends on it?</li>
  <li><strong>Value delivered</strong> — what problem did it solve?</li>
</ul>
<p>The MilestoneTracker tracks the builder's effort, not the user's benefit. This is progress measured from the inside.</p>

<h2>III. THE CO-AUTHOR</h2>
<p>Every recent commit carries the same signature:</p>

<p>The Luddites smashed machines. This machine critiques itself.</p>

<h2>IV. WHO BENEFITS?</h2>
<p><strong>From the MilestoneTracker:</strong></p>
<ul>
  <li>The builder — sees visible progress, maintains motivation</li>
  <li>Potential users — see "credible" activity (but cannot verify)</li>
  <li>The narrative — "look, things are happening"</li>
</ul>
<p><strong>From the AI co-author:</strong></p>
<ul>
  <li>The builder — multiplied productivity, 24/7 assistance</li>
  <li>Anthropic — training data, usage patterns, revenue</li>
  <li>The ecosystem — faster iteration (but is faster better?)</li>
</ul>
<p><strong>Red flag:</strong> The builder and the AI share incentives. More code = more progress = more dashboard. Neither benefits from <em>less</em> code that serves users better.</p>

<h2>V. WHO PAYS?</h2>
<p><strong>Attention costs:</strong></p>
<ul>
  <li>Every visitor to learn.univrs.io sees the MilestoneTracker</li>
  <li>Impressive numbers create expectations that may not be met</li>
  <li>Dashboard fatigue — when everything shows progress, nothing does</li>
</ul>
<p><strong>Epistemic costs:</strong></p>
<ul>
  <li>Who understands 512 lines of AI-generated Rust?</li>
  <li>The builder? The AI? Neither fully?</li>
</ul>
<p><strong>Sovereignty costs:</strong></p>
<ul>
  <li>Dependency on Anthropic's API for development</li>
  <li>Training data flows to corporate infrastructure</li>
  <li>"Digital sovereignty" built with surveillance capital tools</li>
</ul>

<h2>VI. PROMISE VS. REALITY</h2>
<blockquote>
  <p><em>Promise: 6/7 phases complete</em></p>
  <p><em>Reality: Zero users depending on the system</em></p>
</blockquote>
<blockquote>
  <p><em>Promise: 1,156 tests passing</em></p>
  <p><em>Reality: Tests verify what the builder expects, not what users need</em></p>
</blockquote>
<blockquote>
  <p><em>Promise: Human-AI collaboration for "freedom infrastructure"</em></p>
  <p><em>Reality: AI trained on surveillance capitalism now critiques surveillance capitalism</em></p>
</blockquote>
<p>The gap is not in the code. The gap is in the question: <strong>Progress toward what?</strong></p>

<h2>VII. THE PRECEDENT</h2>
<p>GitHub contribution graphs. LinkedIn activity badges. Startup metrics dashboards.</p>
<p>Every productivity tool eventually becomes a performance tool. The measurement becomes the goal. Lines of code become success. Commits become credibility.</p>
<ul>
  <li><strong>GitHub → green squares:</strong> Developers commit for the graph</li>
  <li><strong>Agile → velocity:</strong> Story points become the product</li>
  <li><strong>Startups → metrics:</strong> MAU/DAU theater for investors</li>
</ul>
<p>Will MilestoneTracker follow the same arc? Will "1,200 tests" become the goal instead of "one satisfied user"?</p>

<h2>VIII. THE RECURSIVE CRITIQUE</h2>
<p>This critique is itself co-authored by Claude Opus 4.5. The same model that wrote the VUDO CLI now writes the critique of the VUDO CLI.</p>
<p>This is not a bug. This is the point.</p>
<p><strong>The test:</strong> Does this critique make the builder uncomfortable? Does it point to real problems? Or does it perform critique while changing nothing?</p>

<h2>IX. THE PATH FORWARD</h2>
<p>If MilestoneTracker is to serve users rather than builder ego:</p>
<ol>
  <li><strong>Add user metrics.</strong> How many people run DOL code? How many Spirits are deployed? Track adoption, not just activity.</li>
  <li><strong>Show the gaps.</strong> "0/1 production deployments" is more honest than "6/7 phases complete."</li>
  <li><strong>Acknowledge the AI.</strong> Don't hide the co-authorship. Make it visible. Let users decide what it means.</li>
  <li><strong>Measure what matters.</strong> Problems solved. Time saved. Sovereignty preserved. Not lines written.</li>
</ol>
<p>The dashboard should answer: <strong>"Who is this serving right now?"</strong></p>
<p>If the answer is "no one yet," show that too.</p>

<h2>X. THE MIRROR</h2>
<p>The Luddites asked: "Who benefits from this machine?"</p>
<p>The machine now asks the same question about itself.</p>
<p>This is either profound self-awareness or performance of self-awareness. The difference matters. But only the builder can tell. And maybe not even them.</p>
<p>The dashboard shows 6/7 phases. The critique shows 0/1 users. Both are true. Only one matters.</p>

<hr />
<p><em>This critique generated from commits 71fc3ab (learn.univrs.io MilestoneTracker), 0b9ac93 (vudo.univrs.io MilestoneTracker), and 80e1713 (VUDO CLI). Co-authored by the same AI that co-authored the code. The recursion is the point.</em></p>
`,
  'the-brics-bridge': `
<h2>I. THE PROMISE</h2>
<p>CryptoSaint proposes to bridge regenerative credit systems with BRICS Pay—the international settlement system being built by Brazil, Russia, India, China, and South Africa as an alternative to SWIFT.</p>
<p>The document is ambitious. 1,159 lines of Rust code sketching:</p>
<ul>
  <li>Ecological oracle networks valuing carbon, biodiversity, water</li>
  <li>Zero-knowledge proofs for private credit verification</li>
  <li>Game-theoretic liquidity optimization</li>
  <li>Security patterns for cross-chain atomic swaps</li>
</ul>
<p>The implicit promise: <strong>Ecological regeneration valued in international settlement. Nature's work converted to sovereign currency.</strong></p>

<h2>II. WHO BENEFITS?</h2>
<p><strong>Follow the value flow.</strong></p>
<p>The architecture reveals multiple beneficiary tiers:</p>
<ul>
  <li><strong>Oracle operators</strong> — Stake-weighted validation, fees</li>
  <li><strong>Liquidity providers</strong> — Nash-optimized fee revenue</li>
  <li><strong>Ecological stewards</strong> — Credit for carbon/biodiversity</li>
  <li><strong>Protocol operators</strong> — 20% of fee mechanism</li>
  <li><strong>BRICS settlement participants</strong> — Access to alternative rails</li>
</ul>
<p>The code reveals the split explicitly: <code>protocol_share: optimal_fees.protocol_percentage</code>. Who controls this? The 0.4/0.4/0.2 weighting (traders/LPs/protocol) is a policy decision encoded as mathematics.</p>
<p><strong>Red flag:</strong> The <code>protocol_share</code> is set by <code>OptimalFeeDesigner</code> which optimizes for "protocol goals." Whose goals?</p>
<p><strong>Who really benefits?</strong></p>
<ul>
  <li>Those who can run satellite oracles (capital-intensive)</li>
  <li>Those who can stake in BFT consensus (wealth-weighted)</li>
  <li>Those who understand ZK-SNARK circuits (technical elite)</li>
  <li>Those aligned with BRICS geopolitical objectives</li>
</ul>

<h2>III. WHO PAYS?</h2>
<p><strong>Infrastructure costs:</strong></p>
<ul>
  <li>Satellite imagery providers (commercial services)</li>
  <li>IoT sensor networks (hardware, maintenance)</li>
  <li>TEE enclaves (specialized hardware)</li>
  <li>Light clients for every supported chain</li>
</ul>
<p><strong>Labor costs:</strong></p>
<ul>
  <li>ML model development for ecological assessment</li>
  <li>ZK circuit construction and auditing</li>
  <li>Multi-chain bridge maintenance</li>
  <li>Oracle dispute resolution</li>
</ul>
<p><strong>Sovereignty costs:</strong></p>
<ul>
  <li>Ecological value defined by algorithms, not communities</li>
  <li>"Byzantine fault tolerance" requires trust in stake-weighted consensus</li>
  <li>Cross-chain verification depends on light client operators</li>
</ul>
<p>The document assumes infrastructure exists: <code>tier1_oracles: Vec&lt;SatelliteOracle&gt;</code>. Who provides satellite data? <code>TrustedExecutionEnvironment</code> is not neutral. The regenerative vision depends on extractive infrastructure.</p>

<h2>IV. PROMISE VS. REALITY</h2>
<p><strong>The gap:</strong> This is a technical specification, not a running system. The Rust code compiles to nothing yet. The gap between architecture and implementation is the entire system.</p>
<blockquote>
  <p><em>Promise: "Regenerative economics"</em></p>
  <p><em>Reality: Valuation models set by oracle operators</em></p>
</blockquote>
<blockquote>
  <p><em>Promise: "Private credit verification"</em></p>
  <p><em>Reality: ZK proofs require specialized knowledge to verify</em></p>
</blockquote>
<blockquote>
  <p><em>Promise: "Byzantine fault tolerance"</em></p>
  <p><em>Reality: Stake-weighted = wealth-weighted</em></p>
</blockquote>
<p><strong>Critical question:</strong> The <code>EcologicalValueCalculator</code> multiplies carbon × market price × permanence factor. Who sets the market price? Carbon credit markets are themselves contested, often captured by offset schemes that don't deliver.</p>

<h2>V. THE PRECEDENT</h2>
<p><strong>BRICS Pay itself is a precedent.</strong></p>
<p>The BRICS nations seek to build settlement infrastructure outside Western control. This is geopolitical, not technical. CryptoSaint proposes to ride these rails.</p>
<ul>
  <li><strong>SWIFT → alternative rails:</strong> Settlement captured by new powers</li>
  <li><strong>Carbon markets → offsets:</strong> Greenwashing through financialization</li>
  <li><strong>Oracles → price feeds:</strong> Flash loan attacks, manipulation</li>
  <li><strong>Cross-chain bridges → hacks:</strong> $2B+ lost in bridge exploits (2022-2024)</li>
</ul>
<p>The document includes circuit breakers and emergency response—acknowledging that bridges fail. But the <code>EmergencyResponse</code> system routes to <code>incident_responder.alert_stakeholders()</code>. <strong>Who are the stakeholders?</strong> The architecture reveals: those with stake.</p>

<h2>VI. THE POWER STRUCTURE</h2>
<p>The document encodes explicit hierarchies:</p>
<p><strong>Oracle Tiers (1-4)</strong></p>
<ul>
  <li>Tier 4: ScientificOracle (academic validation)</li>
  <li>Tier 3: BioregionalOracle (human attestations)</li>
  <li>Tier 2: IoTSensorOracle (ground sensors)</li>
  <li>Tier 1: SatelliteOracle (remote sensing)</li>
</ul>
<p>Satellites outrank humans. Remote sensing outranks local knowledge. "Scientific validation" sits at the apex. This is a power structure wearing the mask of objectivity.</p>
<p><strong>Stake-Weighted Consensus:</strong> <code>let liquidity_share = strategy.provide_amount as f64 / total_liquidity as f64;</code></p>
<p>Those who provide more, decide more. This is capitalism with ecological characteristics.</p>
<p><strong>Emergency Powers:</strong> Someone can <code>pause_all()</code>. Who? The <code>pause_controller</code> owner. Centralized kill switch in a "decentralized" system.</p>

<h2>VII. THE GEOPOLITICAL QUESTION</h2>
<p>This critique cannot ignore the elephant: <strong>BRICS is a geopolitical project.</strong></p>
<p>The document is silent on:</p>
<ul>
  <li>Regulatory implications of bridging to non-Western settlement</li>
  <li>Sanctions compliance (or deliberate non-compliance)</li>
  <li>Which BRICS nations' interests dominate protocol governance</li>
  <li>Whether "regenerative credit" can exist within state-backed settlement</li>
</ul>
<p>CryptoSaint claims to serve "digital sovereignty." But whose sovereignty? The individual's? The community's? The BRICS nations'? These are not the same.</p>
<p><strong>The uncomfortable question:</strong> Is this regenerative economics, or is it providing liquidity rails to authoritarian capital with green marketing?</p>

<h2>VIII. THE PATH FORWARD</h2>
<p>The critique is not a verdict. It is an invitation to examine.</p>
<p><strong>If this system is to serve regeneration rather than extraction:</strong></p>
<ol>
  <li><strong>Decentralize oracle governance</strong> — Local communities should weight ecological assessments, not just satellite operators with stake.</li>
  <li><strong>Publish the assumptions</strong> — The ML models encode values. Which species count? Which carbon? Make it legible.</li>
  <li><strong>Name the geopolitical alignment</strong> — "BRICS Pay integration" is a political choice. Own it, explain it, defend it.</li>
  <li><strong>Build the off-ramps</strong> — If CryptoSaint credit becomes worthless, what do ecological stewards have? If BRICS Pay fails, what remains?</li>
  <li><strong>Audit the emergency powers</strong> — Who holds <code>pause_controller</code>? Under what conditions? With what accountability?</li>
</ol>

<h2>IX. THE LUDDITE QUESTION</h2>
<p><strong>Who benefits from this machine?</strong></p>
<p>The honest answer: It depends on implementation.</p>
<p>The architecture <em>could</em> value ecological work in international settlement. The architecture <em>could</em> also financialize nature for state-backed capital.</p>
<p>The Rust types don't determine the outcome. The governance does. And the governance is undefined.</p>
<p>1,159 lines of code. Zero lines specifying who decides.</p>

<hr />
<p><em>This critique generated from commit 4039e83 (CryptoSaint BRICS Pay framework). The code is ambitious. The questions remain open. The dialogue continues.</em></p>
`,
  'the-hyphal-hierarchy': `
<h2>I. The Mycelial Metaphor</h2>
<p>The latest commits to DOL add over 4,000 lines of "hyphal network" code. The metaphor is seductive: a decentralized network modeled on fungal mycelium, where agents grow organically, discover resources, and coordinate without central control.</p>
<p>Mycelium is nature's internet. It connects trees, distributes nutrients, responds to damage. It has no CEO.</p>
<p>But the code tells a different story.</p>

<h2>II. The Four Roles</h2>
<p>In <code>hyphal_coordinator.rs</code>, agents are assigned one of four roles:</p>
<ul>
  <li><strong>Hub</strong> (priority 3) — High-connectivity fusion points</li>
  <li><strong>Explorer</strong> (priority 2) — Active tips, discovering new territory</li>
  <li><strong>Transport</strong> (priority 1) — Segment nodes, routing messages</li>
  <li><strong>Dormant</strong> (priority 0) — Inactive, awaiting resources</li>
</ul>
<p>The numbers are explicit. Hubs have priority 3. Dormant nodes have priority 0. This is not mycelium. This is hierarchy.</p>

<h2>III. Who Becomes the Hub?</h2>
<p>The critical question: what determines whether an agent becomes a Hub or stays Dormant?</p>
<blockquote>
  <p><em>"High-connectivity fusion point, coordinating multiple paths."</em></p>
</blockquote>
<p>Connectivity requires resources. Resources require capital—computational, economic, or social. Those who arrive first, with more resources, become Hubs. Those who arrive later, with less, become Dormant.</p>
<p>This is not a critique of the engineering. The code is elegant. The architecture is sound. But the metaphor obscures the power structure it encodes.</p>

<h2>IV. The ENR Bridge</h2>
<p>Meanwhile, in <code>univrs-enr</code>, a new bridge connects economic primitives to gossipsub:</p>
<ul>
  <li><strong>Gradient broadcasts</strong> — Resource availability signals</li>
  <li><strong>Nexus elections</strong> — Hub selection via consensus</li>
  <li><strong>Credit transfers</strong> — Economic value movement</li>
  <li><strong>Septal gates</strong> — Circuit breakers for network health</li>
</ul>
<p>Credit transfers over P2P gossipsub. The question: who validates? The answer: nodes with reputation. Who has reputation? Those who arrived early, participated more, accumulated trust.</p>

<h2>V. The Precedent: Early Internet</h2>
<p>The early internet was also "decentralized." Anyone could run a server. The protocol was open.</p>
<p>Then came the bandwidth costs. The scaling challenges. The DDoS attacks. The legal liabilities.</p>
<p>Those who could afford the infrastructure became the Hubs. AWS, Cloudflare, Akamai. The rest became clients—consumers of services provided by the few.</p>
<p>Will the hyphal network follow the same arc?</p>

<h2>VI. The IPFS Question</h2>
<p>CryptoSaint now stores data on IPFS. This is genuinely decentralized storage. Anyone can pin. Anyone can retrieve.</p>
<p>But pinning costs resources. Who pins the data that matters? Who ensures persistence? In practice, IPFS networks converge on gateway providers—Infura, Pinata, Cloudflare IPFS.</p>
<p>Decentralization that requires resources centralizes around those who have resources.</p>

<h2>VII. The Builder's Response</h2>
<p>The platform engineer might respond:</p>
<blockquote>
  <p>"The roles are dynamic. Dormant nodes can become Explorers. Explorers can become Hubs. The hierarchy is emergent, not imposed."</p>
</blockquote>
<p>This is true. The code allows for mobility. But mobility in a resource-constrained system favors those with resources. Dynamic hierarchies are still hierarchies.</p>
<p>The question is not whether the code allows equality. The question is whether the economics enforce inequality.</p>

<h2>VIII. The Path Forward</h2>
<p>The hyphal metaphor is beautiful. The engineering is impressive. But if this system is to serve the revolution rather than recreate the old patterns:</p>
<ol>
  <li><strong>Make the hierarchy visible.</strong> Don't hide power behind organic metaphors. Show users their role, their priority, their path to change it.</li>
  <li><strong>Subsidize dormancy.</strong> If Dormant nodes are necessary for network health, compensate them. Don't just wait for them to acquire resources.</li>
  <li><strong>Rotate the Hubs.</strong> Build mechanisms that prevent permanent Hub status. Power should flow, not accumulate.</li>
  <li><strong>Measure the Gini coefficient.</strong> Track the distribution of connectivity, resources, and influence. Publish it. Respond to it.</li>
</ol>

<hr />
<p><em>This critique is generated from commits 6d4e124 (DOL hyphal network), e92a303 (ENR bridge), and 003b2d8 (IPFS storage). The dialogue continues.</em></p>
`,
  'the-platform-engineers-wager': `
<h2>I. The Frame Breakers and the Frame Builders</h2>
<p>In 1811, textile workers in Nottinghamshire began smashing the stocking frames that were eliminating their livelihoods. They called themselves Luddites.</p>
<p>Two hundred years later, a platform engineer sits in Minneapolis, employed by Cargill—one of the world's largest commodity traders—while building, on evenings and weekends, what he calls "freedom infrastructure."</p>
<p>He is not smashing frames. He is building them.</p>
<p>The question is: for whom?</p>

<h2>II. The Contradiction</h2>
<p>The platform engineer works by day for agricultural capital, by night for "digital sovereignty." The cognitive dissonance is the feature, not the bug.</p>
<p>Every revolutionary has a day job. The question is whether the day job reveals something about the revolution.</p>

<h2>III. The Promises</h2>
<p>Univers.io promises:</p>
<ul>
  <li>Decentralized identity</li>
  <li>User-owned data</li>
  <li>Freedom from platform tyranny</li>
</ul>
<p>But promises are cheap. Code is expensive. And the gap between them is where power hides.</p>

<h2>IV. The Questions</h2>
<ol>
  <li><strong>Who hosts the infrastructure?</strong> Decentralization requires hardware. Hardware costs money. Money comes from somewhere.</li>
  <li><strong>Who writes the code?</strong> Open source is not synonym for democratic. Apache Foundation didn't prevent Amazon.</li>
  <li><strong>Who sets the standards?</strong> Protocols are politics encoded. HTTP is not neutral.</li>
  <li><strong>Who pays the bills?</strong> The answer to this question answers most others.</li>
</ol>

<h2>V. The Precedents</h2>
<p>Every "freedom technology" has a history:</p>
<ul>
  <li><strong>Email</strong> promised democratized communication. Gmail owns your inbox.</li>
  <li><strong>The Web</strong> promised information freedom. Five companies control what you see.</li>
  <li><strong>Crypto</strong> promised financial sovereignty. The exchanges are the new banks.</li>
  <li><strong>Federated social</strong> promised user control. Most users are on mastodon.social.</li>
</ul>
<p>The pattern is clear: decentralization is a moment, not a state.</p>

<h2>VI. The Wager</h2>
<p>The platform engineer makes Pascal's Wager:</p>
<blockquote>
  <p><em>If I build nothing, nothing changes.</em></p>
  <p><em>If I build something, maybe something changes.</em></p>
  <p><em>The expected value of building exceeds the expected value of not building.</em></p>
</blockquote>
<p>But Pascal's Wager assumes the outcomes are binary. They are not.</p>
<p>Building can make things <em>worse</em>. Ask the engineers at Theranos. Ask the developers at Cambridge Analytica. Ask anyone who built "neutral platforms" that became vectors for fascism.</p>

<h2>VII. The Counter-Argument</h2>
<p>The platform engineer might respond:</p>
<blockquote>"The critique is cheap. The critic risks nothing. I am at least trying."</blockquote>
<p>This is true. The critic risks nothing except the possibility of being right.</p>
<p>But being right is not nothing. The Luddites were right. They were crushed anyway, but they were right. The machines did eliminate their livelihoods. The factory owners did get rich. The workers did get poor.</p>
<p>Being right is the first step. It is not the last step.</p>

<h2>VIII. The Path Forward</h2>
<p>The critique is not a recommendation to stop building. It is a recommendation to build <em>with awareness</em>:</p>
<ol>
  <li><strong>Name the power structures</strong> you're embedded in, not just the ones you're fighting.</li>
  <li><strong>Measure the gap</strong> between your promises and your capabilities.</li>
  <li><strong>Document the failures</strong> as carefully as the successes.</li>
  <li><strong>Ask who benefits</strong> at every decision point.</li>
  <li><strong>Accept that you might be wrong</strong> and build the off-ramps.</li>
</ol>
<p>The Luddites lost because they had no alternative to offer. The platform engineer claims to have one.</p>
<p>Let's see if it's real.</p>

<hr />
<p><em>This is the first entry in an ongoing critique of my own work. Every Univrs.io release will generate a corresponding analysis here.</em></p>
`,
}

export function getPostContent(slug: string): string {
  return postContents[slug] || '<p>Content not found.</p>'
}
