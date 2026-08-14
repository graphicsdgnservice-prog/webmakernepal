import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Web Maker Nepal | Web Design, Development & B2B SEO',
      },
      {
        name: 'description',
        content: 'Web Maker Nepal builds fast, secure, high-converting websites, custom WordPress solutions, and search strategies for ambitious B2B brands.',
      },
      {
        name: 'theme-color',
        content: '#050811',
      },
    ],
    links: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
