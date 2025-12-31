import { Link } from 'react-router-dom'
import { posts } from '../posts/data'

export default function Posts() {
  return (
    <div>
      <h1 className="text-3xl font-mono font-bold text-accent mb-6">Posts</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug} className="flex gap-4 items-baseline">
            <time className="font-mono text-muted text-sm flex-shrink-0">
              {post.date}
            </time>
            <div>
              <Link to={`/posts/${post.slug}`} className="text-link">
                {post.title}
              </Link>
              {post.subtitle && (
                <span className="text-muted ml-2">— {post.subtitle}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
