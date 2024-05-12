import Head from "next/head"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeBasicPage } from "components/node--basic-page"

interface NodeBasicPageProps {
  node: DrupalNode
}

export default function IndexPage({ node }: NodeBasicPageProps) {
  return (
    <Layout>
      <Head>
        <title>Abhisek Mazumdar - Freelancer Drupal Developer</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="title" content="Abhisek Mazumdar - Drupal Developer" />
        <meta
          name="description"
          content={node.body?.summary}
        />
        <meta name="keywords" content="Abhisek, Mazumdar, Drupal, React, NextJS" />
        <meta property="og:title" content="Abhisek Mazumdar - Drupal Developer" />
        <meta property="og:description" content={node.body?.summary} />
        <meta property="og:image" content="/abhisek.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://www.abhisek.xyz/" />
        <meta property="twitter:title" content="Abhisek Mazumdar - Drupal Developer" />
        <meta property="twitter:description" content={node.body?.summary} />
        <meta property="twitter:image" content="/abhisek.jpg" />
      </Head>
      <div>
        <NodeBasicPage node={node} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Fetch the node from Drupal.
  const node = await drupal.getResource(
    "node--page",
    "c3e8796e-caae-4237-86c7-a52867139720"
  )

  return {
    props: {
      node,
    },
  }
}
