import { useParams, Link } from 'react-router-dom'
import { posts, getPostContent } from '../posts/data'

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div>
        <h1 className="text-3xl font-mono font-bold text-accent mb-6">Post Not Found</h1>
        <p>
          <Link to="/posts" className="text-link">Back to posts</Link>
        </p>
      </div>
    )
  }

  const content = getPostContent(post.slug)

  return (
    <article>
      <header className="mb-8 border-b border-muted pb-4">
        <h1 className="text-3xl font-mono font-bold text-accent mb-2">{post.title}</h1>
        <time className="font-mono text-muted text-sm">{post.date}</time>
        {post.subtitle && (
          <p className="text-muted mt-2">{post.subtitle}</p>
        )}
      </header>

      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {post.tags && post.tags.length > 0 && (
        <footer className="mt-8 pt-4 border-t border-muted">
          <p className="text-muted text-sm">
            Tags:{' '}
            {post.tags.map((tag) => (
              <span key={tag} className="bg-[#1a1a1a] px-2 py-1 font-mono text-xs mr-2">
                {tag}
              </span>
            ))}
          </p>
        </footer>
      )}
    </article>
  )
}
