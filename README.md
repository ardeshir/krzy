# krzy.ai Content Management Guide

A step-by-step guide for developers, AI agents, and CMS admins to update and maintain the krzy.ai blog site.

---

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Adding New Blog Posts](#adding-new-blog-posts)
4. [Managing Tags](#managing-tags)
5. [Updating Navigation](#updating-navigation)
6. [Editing Existing Content](#editing-existing-content)
7. [Styling and Theming](#styling-and-theming)
8. [Local Development](#local-development)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## Overview

krzy.ai is built with:
- **Vite** - Build tool and dev server
- **React** - UI framework
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS
- **TypeScript** - Type safety

The site deploys automatically to GitHub Pages/Cloudflare when changes are pushed to `main`.

---

## Project Structure

```
krzy/
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Router configuration
│   ├── index.css             # Global styles + Tailwind
│   ├── components/
│   │   └── Layout.tsx        # Header, footer, navigation
│   ├── pages/
│   │   ├── Home.tsx          # Landing page
│   │   ├── About.tsx         # About page
│   │   ├── Posts.tsx         # Post listing page
│   │   └── Post.tsx          # Single post view
│   └── posts/
│       └── data.ts           # ⭐ POST CONTENT LIVES HERE
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind theme config
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies
```

---

## Adding New Blog Posts

### Step 1: Open the Posts Data File

All posts are defined in `src/posts/data.ts`. This is the **single source of truth** for blog content.

### Step 2: Add Post Metadata

Add a new entry to the `posts` array at the TOP (newest first):

```typescript
export const posts: Post[] = [
  // ⬇️ ADD NEW POSTS HERE (newest first)
  {
    slug: 'your-post-slug',           // URL-friendly identifier (no spaces)
    title: 'Your Post Title',          // Display title
    subtitle: 'Optional subtitle',     // Optional - appears below title
    date: '2025-01-15',               // YYYY-MM-DD format
    tags: ['univrs', 'critique'],      // Array of tag strings
  },
  // ... existing posts below
]
```

### Step 3: Add Post Content

Add the HTML content to the `postContents` object using your slug as the key:

```typescript
const postContents: Record<string, string> = {
  'your-post-slug': `
<h2>Section Heading</h2>
<p>Your paragraph content here.</p>

<h2>Another Section</h2>
<p>More content...</p>

<blockquote>
  <p>A quote styled with the accent color.</p>
</blockquote>

<ul>
  <li>Bullet point one</li>
  <li>Bullet point two</li>
</ul>

<ol>
  <li><strong>Numbered item</strong> with bold text</li>
  <li><em>Numbered item</em> with italic text</li>
</ol>

<hr />
<p><em>Footer note in italics.</em></p>
`,
  // ... existing post content
}
```

### Step 4: Verify Locally

```bash
npm run dev
```

Visit `http://localhost:3000/posts/your-post-slug` to preview.

---

## Managing Tags

Tags are simple strings defined in each post's metadata.

### Adding Tags to a Post

```typescript
{
  slug: 'example-post',
  title: 'Example',
  date: '2025-01-15',
  tags: ['univrs', 'critique', 'ai', 'precedents'],  // Add tags here
}
```

### Common Tags

| Tag | Use For |
|-----|---------|
| `univrs` | Critiques of Univrs.io projects |
| `critique` | General critical analysis |
| `precedents` | Historical comparisons |
| `ai` | AI-related topics |
| `luddite` | Luddite philosophy content |
| `vudo` | Vudo-specific critiques |
| `learn` | Learn.univrs.io critiques |

### Creating New Tags

Simply add any new tag string to a post's `tags` array. No registration required.

---

## Updating Navigation

Navigation links are defined in `src/components/Layout.tsx`.

### Current Navigation Structure

```tsx
<nav className="flex flex-wrap gap-4 items-baseline">
  <Link to="/" className="...">krzy.ai</Link>
  <span className="tagline">Who benefits from this machine?</span>
  <Link to="/posts">Posts</Link>
  <Link to="/about">About</Link>
  <a href="https://univrs.io">Univrs.io</a>
</nav>
```

### Adding a New Navigation Link

**Internal link (same site):**
```tsx
<Link to="/new-page" className="text-link">New Page</Link>
```

**External link:**
```tsx
<a href="https://example.com" className="text-link" target="_blank" rel="noopener noreferrer">
  External Site
</a>
```

### Adding a New Page

1. Create the page component in `src/pages/NewPage.tsx`
2. Add the route in `src/App.tsx`:
   ```tsx
   <Route path="new-page" element={<NewPage />} />
   ```
3. Add navigation link in `src/components/Layout.tsx`

---

## Editing Existing Content

### Edit a Blog Post

1. Open `src/posts/data.ts`
2. Find the post by its `slug` in both:
   - The `posts` array (for metadata)
   - The `postContents` object (for HTML content)
3. Make your changes
4. Test locally with `npm run dev`

### Edit the About Page

Open `src/pages/About.tsx` and edit the JSX content directly.

### Edit the Home Page

Open `src/pages/Home.tsx` to modify:
- The intro section
- The tagline/quote
- How recent posts are displayed

---

## Styling and Theming

### Color Palette

Defined in `tailwind.config.js` and `src/index.css`:

| Variable | Color | Usage |
|----------|-------|-------|
| `bg` | `#0a0a0a` | Page background (near black) |
| `fg` | `#e0e0e0` | Main text color (light gray) |
| `accent` | `#d97706` | Headings, site title (amber orange) |
| `muted` | `#666666` | Secondary text, dates |
| `link` | `#33ff33` | Links (terminal green) |

### Changing Colors

Edit both files to keep them in sync:

**tailwind.config.js:**
```javascript
colors: {
  bg: '#0a0a0a',
  fg: '#e0e0e0',
  accent: '#d97706',    // Change accent here
  muted: '#666666',
  link: '#33ff33',      // Change link color here
},
```

**src/index.css:**
```css
:root {
  --bg: #0a0a0a;
  --fg: #e0e0e0;
  --accent: #d97706;    /* Change accent here */
  --muted: #666;
  --link: #33ff33;      /* Change link color here */
}
```

### Fonts

The site uses IBM Plex fonts (loaded from Google Fonts in `index.html`):
- **IBM Plex Mono** - Headings, code, navigation
- **IBM Plex Serif** - Body text

---

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/ardeshir/krzy.git
cd krzy

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at http://localhost:3000 |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |

---

## Deployment

### Automatic Deployment

The site deploys automatically when changes are pushed to `main`:

1. GitHub Actions runs the build (`npm run build`)
2. The `dist/` folder is deployed to GitHub Pages
3. Cloudflare serves the site at krzy.ai

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy to Cloudflare Pages (if wrangler configured)
npm run deploy
```

### Deployment Workflow

The workflow is defined in `.github/workflows/deploy.yml`:

```yaml
- Install Node.js 20
- npm ci (install dependencies)
- npm run build (create dist/)
- Deploy dist/ to GitHub Pages
```

---

## Troubleshooting

### Changes Not Showing Locally

1. **Hard refresh the browser:** Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. **Restart the dev server:**
   ```bash
   # Kill the running server (Ctrl+C) then:
   npm run dev
   ```
3. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules
   npm install
   npm run dev
   ```

### Build Errors

**TypeScript errors:**
```bash
# Check for type errors
npx tsc --noEmit
```

**Missing dependencies:**
```bash
npm install
```

### Deployment Failures

1. Check GitHub Actions logs at: `https://github.com/ardeshir/krzy/actions`
2. Common issues:
   - TypeScript errors (fix locally first)
   - Missing dependencies in `package.json`
   - Invalid HTML in post content

### Post Not Appearing

1. Verify the slug matches in both `posts` array AND `postContents` object
2. Check the date format is `YYYY-MM-DD`
3. Ensure the post is at the TOP of the `posts` array for it to appear first

### Styling Issues

1. Check TailwindCSS classes are valid
2. Ensure color variables match between `tailwind.config.js` and `index.css`
3. Verify fonts are loading (check Network tab in browser dev tools)

---

## Quick Reference: Adding a Post

```typescript
// src/posts/data.ts

// 1. Add metadata (at TOP of posts array)
export const posts: Post[] = [
  {
    slug: 'new-critique-2025',
    title: 'New Critique Title',
    subtitle: 'The Subtitle Here',
    date: '2025-01-15',
    tags: ['univrs', 'critique'],
  },
  // ... rest of posts
]

// 2. Add content (in postContents object)
const postContents: Record<string, string> = {
  'new-critique-2025': `
<h2>Introduction</h2>
<p>Your content here...</p>
`,
  // ... rest of content
}
```

---

## For AI Agents

When updating krzy.ai programmatically:

1. **Always read `src/posts/data.ts` first** to understand current structure
2. **Add new posts at the TOP** of the `posts` array
3. **Use consistent slug format:** lowercase, hyphens, no special characters
4. **Match the slug exactly** in both `posts` array and `postContents`
5. **Use valid HTML** in post content (close all tags properly)
6. **Test with `npm run dev`** before committing
7. **Create a PR** for review rather than pushing directly to main

---

*Last updated: December 2024*
