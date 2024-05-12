import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import Head from "next/head"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { NodeArticle } from "components/node--article"
import { NodeBasicPage } from "components/node--basic-page"
import { Layout } from "components/layout"

const RESOURCE_TYPES = ["node--page", "node--article"]

interface NodePageProps {
  resource: DrupalNode
}

export default function NodePage({ resource }: NodePageProps) {
  if (!resource) return null

  return (
    <Layout>
      <Head>
        <title>{resource.title}</title>
        <meta name="title" content={resource.title} />
        <meta name="description" content={resource.body?.summary} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content={resource.title} />
        <meta property="og:description" content={resource.body?.summary} />
        <meta property="og:image" content="/abhisek.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={`https://www.abhisek.xyz/${resource.id}`} />
        <meta property="twitter:title" content={resource.title} />
        <meta property="twitter:description" content={resource.body?.summary} />
        <meta property="twitter:image" content="/abhisek.jpg" />
      </Head>
      {resource.type === "node--page" && <NodeBasicPage node={resource} />}
      {resource.type === "node--article" && <NodeArticle node={resource} />}
    </Layout>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  if (!path) {
    return {
      notFound: true,
    }
  }

  const type = path.jsonapi.resourceName

  let params = {}
  if (type === "node--article") {
    params = {
      include: "field_image,uid",
    }
  }

  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params,
    }
  )

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      resource,
    },
  }
}
