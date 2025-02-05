import { useState, useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { components } from '../mdx-components'
import { useParams } from 'react-router-dom'

export default function BlogPost() {

  const { slug } = useParams()
  const [Content, setContent] = useState<React.ComponentType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadContent() {
      try {
        const module = await import(`../blogs/${slug}.mdx`)
        setContent(() => module.default)
      } catch (err) {
        setError('Failed to load content')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [slug])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!Content) return <div>Content not found</div>

  return (
    <MDXProvider components={components}>
      <article className="max-w-3xl mx-auto px-4 py-8">
        <Content />
      </article>
    </MDXProvider>
  )
}