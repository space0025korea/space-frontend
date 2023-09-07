import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ServerResponse } from "http";

import { GET_PROJECTS_LIST } from "pages/api/portfolio";

const URL = "https://329design.co.kr";

type DataType = {
  id: string;
};

const generateSiteMap = (projects: DataType[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${URL}</loc>
      </url>
      <url>
        <loc>${URL}/main</loc>
      </url>
      <url>
        <loc>${URL}/portfolio</loc>
      </url>
      <url>
        <loc>${URL}/contact</loc>
      </url>
      ${projects
        .map(({ id }) => {
          return `
        <url>
            <loc>${`${URL}/portfolio/${id}`}</loc>
        </url>
      `;
        })
        .join("")}
    </urlset>
  `;
};

export const getServerSideProps = async ({ res }: { res: ServerResponse }) => {
  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_PROJECTS_LIST,
  });
  const projects = await data.projects.data;
  const sitemap = generateSiteMap(projects);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

const SiteMap = () => {};
export default SiteMap;
