export interface Post {
  slug: string
  title: string
  subtitle?: string
  date: string
  tags?: string[]
}

export const posts: Post[] = [
  {
    slug: 'the-platform-engineers-wager',
    title: "The Platform Engineer's Wager",
    subtitle: 'Univrs.io and the Machinery of Hope',
    date: '2024-12-31',
    tags: ['univrs', 'critique', 'precedents'],
  },
]

const postContents: Record<string, string> = {
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
