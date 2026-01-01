export interface Post {
  slug: string
  title: string
  subtitle?: string
  date: string
  tags?: string[]
}

export const posts: Post[] = [
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
