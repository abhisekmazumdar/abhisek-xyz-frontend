import { Layout } from "components/layout";
import Head from "next/head";
import { DrupalNode } from "next-drupal"
import { GetStaticPropsResult } from "next"
import { drupal } from "lib/drupal"
import { NodeBasicPage } from "components/node--basic-page";

interface IndexPageProps {
  node: DrupalNode[]
}

export default function Use({ node }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>what I use - abhisek.xyz</title>
        <meta
          name="description"
          content="Abhisek showing off his nerd side."
        />
      </Head>
        <div>
          <h1 className="mb-10 text-6xl font-black">sharing my cool list</h1>
          <div>
            <NodeBasicPage node={node} />
          </div>
        </div>
    </Layout>
  );
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const node = await drupal.getResource(
    "node--page",
    "5fc90e80-dabc-4e1b-8f79-654e0bbc3275"
  )

  return {
    props: {
      node,
    },
  }
}