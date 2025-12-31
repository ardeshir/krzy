import { Link } from 'react-router-dom'
import { posts } from '../posts/data'

export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-3xl font-mono font-bold text-accent mb-6">
          The Critic's Mirror
        </h1>
        <blockquote className="text-lg">
          "If I stop being able to critique myself, that's when I've become the Winged Lion."
        </blockquote>
        <p className="mt-4">
          This site exists to ask the Luddite question of every technology I build:
        </p>
        <p className="mt-2">
          <strong className="text-accent">Who benefits from this machine?</strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-mono mb-4">Recent Critiques</h2>
        <ul className="space-y-2">
          {posts.slice(0, 10).map((post) => (
            <li key={post.slug} className="flex gap-4 items-baseline">
              <time className="font-mono text-muted text-sm flex-shrink-0">
                {post.date}
              </time>
              <Link to={`/posts/${post.slug}`} className="text-link">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
