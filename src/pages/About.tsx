export default function About() {
  return (
    <article>
      <h1 className="text-3xl font-mono font-bold text-accent mb-6">
        About krzy.ai
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-mono mb-4">The Luddite Question</h2>
        <p className="mb-4">
          In 1811, textile workers in Nottinghamshire began smashing the stocking frames
          that were eliminating their livelihoods. History has turned "Luddite" into an
          insult—a synonym for technophobe.
        </p>
        <p className="mb-4 text-accent font-bold">This is a lie.</p>
        <p className="mb-4">
          The Luddites weren't opposed to technology. They were opposed to the <em>deployment</em> of
          technology in ways that enriched factory owners while immiserating workers. They asked a
          question Silicon Valley has worked hard to suppress:
        </p>
        <p className="text-xl font-bold text-accent mb-4">
          Who benefits from this machine?
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-mono mb-4">The Critic's Mirror</h2>
        <p className="mb-4">
          This site exists as the shadow of{' '}
          <a href="https://univrs.io" className="text-link">Univrs.io</a>—every
          technical milestone questioned, every claim examined, every assumption challenged.
        </p>
        <p className="mb-4">
          The builder and the critic are the same person. The split is for clarity.
        </p>
        <p className="mb-4">
          If I stop being able to write these critiques, I've become the Winged Lion—projecting
          peace while building tyranny.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-mono mb-4">Influences</h2>
        <ul className="space-y-2">
          <li>
            <strong>Brian Merchant</strong> — <em>Blood in the Machine</em>: The true history of the Luddites
          </li>
          <li>
            <strong>Karen Hao</strong> — <em>Empire of AI</em>: Critical tech journalism, following power
          </li>
          <li>
            <strong>The original Luddites</strong> — The question that won't die
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-mono mb-4">Contact</h2>
        <ul className="space-y-2">
          <li>
            GitHub:{' '}
            <a href="https://github.com/ardeshir" className="text-link">@sepahsalar</a>
          </li>
          <li>
            Mastodon:{' '}
            <a href="https://hachyderm.io/@sepahsalar" className="text-link">@sepahsalar@hachyderm.io</a>
          </li>
        </ul>
        <p className="mt-4 text-muted italic">The critic welcomes critique.</p>
      </section>
    </article>
  )
}
