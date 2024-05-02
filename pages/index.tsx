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
        <title>Abhisek Mazumdar - abhisek.xyz</title>
        <link rel='icon' href='/icon.png'/>
        <meta
          name="description"
          content="Know about Abhisek Mazumdar and his work."
        />
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
