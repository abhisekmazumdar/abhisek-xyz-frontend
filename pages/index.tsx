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
        <link rel='icon' href='/icon.png'/>
        <meta
          name="description"
          content="I'm a proud Drupal Developer based in Pune, India with 6+ years of experience in site building, backend development, theming, and also WordPress plugin dev. For the past 3 years, I have worked with Drupal distributions and profiles."
        />
        <meta name="keywords" content="Abhisek, Mazumdar, Drupal, React, NextJS" />
        <meta property="og:title" content="Abhisek Mazumdar - Freelancer Drupal Developer" />
        <meta property="og:description" content="I'm a proud Drupal Developer based in Pune, India with 6+ years of experience in site building, backend development, theming, and also WordPress plugin dev. For the past 3 years, I have worked with Drupal distributions and profiles." />
        <meta property="og:image" content="/icon.png" />
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
