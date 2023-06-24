import { Layout } from "components/layout";
import Head from "next/head";
import { DrupalNode } from "next-drupal"
import { NodeArticleTeaser } from "components/node--article--teaser"
import { GetStaticPropsResult } from "next"
import { drupal } from "lib/drupal"

interface IndexPageProps {
  nodes: DrupalNode[]
}

export default function Thoughts({ nodes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>my latest thoughts - abhisek.xyz</title>
        <meta
          name="description"
          content="Abhisek showing off his thoughts here."
        />
      </Head>
        <div>
          <h1 className="mb-10 text-6xl font-black">my latest thoughts</h1>
          {nodes?.length ? (
            nodes.map((node) => (
              <div key={node.id}>
                <NodeArticleTeaser node={node} />
                <hr className="my-20" />
              </div>
            ))
          ) : (
            <p className="py-4">no thoughts yet</p>
          )}
        </div>
    </Layout>
  );
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]": "title,path,field_image,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
    }
  )

  return {
    props: {
      nodes,
    },
  }
}