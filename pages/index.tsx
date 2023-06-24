import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeBasicPage } from "components/node--basic-page"

interface NodePageProps {
  node: DrupalNode
}

export default function IndexPage({ node }: NodePageProps) {
  return (
    <Layout>
      <Head>
        <title>Abhisek Mazumdar - abhisek.xyz</title>
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

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
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
