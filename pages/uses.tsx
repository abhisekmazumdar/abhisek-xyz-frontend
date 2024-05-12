import { Layout } from "components/layout";
import Head from "next/head";
import { DrupalNode } from "next-drupal"
import { GetStaticPropsResult } from "next"
import { drupal } from "lib/drupal"
import { NodeBasicPage } from "components/node--basic-page";

interface NodeBasicPageProps {
  node: DrupalNode
}

export default function Use({ node }: NodeBasicPageProps) {
  return (
    <Layout>
      <Head>
        <title>what I use - abhisek.xyz</title>
        <meta name="description" content="Abhisek showing off his nerd side." />
        <link rel='icon' href='/icon.png'/>
        <meta property="og:title" content="what I use - abhisek.xyz" />
        <meta property="og:description" content="Abhisek showing off his nerd side." />
        <meta property="og:image" content="/abhisek.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://www.abhisek.xyz/uses" />
        <meta property="twitter:title" content="what I use - abhisek.xyz" />
        <meta property="twitter:description" content="Abhisek showing off his nerd side." />
        <meta property="twitter:image" content="/abhisek.jpg" />
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

export async function getStaticProps() {
  // Fetch the node from Drupal.
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