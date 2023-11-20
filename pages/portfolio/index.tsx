import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { captureException } from "@sentry/nextjs";

import Layout from "components/layout";
import FullpageSpinenr from "components/spinner/fullpage";
import { GET_PROJECTS_LIST } from "pages/api/portfolio";

type CategoryType = "living" | "commercial";
type ProjectDataType = {
  attributes: {
    title: string;
    category: CategoryType;
  };
  id: string;
};

const PortfolioList = () => {
  const { replace } = useRouter();
  const { data, loading, error } = useQuery(GET_PROJECTS_LIST);

  const projects: ProjectDataType[] = data?.projects?.data;

  if (loading) {
    return (
      <Layout title={"Portfolio"}>
        <FullpageSpinenr />
      </Layout>
    );
  } else if (data) {
    return (
      <Layout title={"Portfolio"}>
        <div className="xl:mx-28">
          <h1 className="mb-6 text-lg font-bold xl:mt-8">Portfolio</h1>
          <ul className="flex flex-col gap-3">
            <div>
              <p className="mb-1 text-lg font-semibold">주거공간</p>
              {projects
                .filter(({ attributes }) => attributes.category === "living")
                .map(({ id, attributes }) => (
                  <Link key={id} href={`/portfolio/${id}`}>
                    {attributes.title}
                  </Link>
                ))}
            </div>
            <div>
              <p className="mb-1 text-lg font-semibold">상업공간</p>
              {projects
                .filter(({ attributes }) => attributes.category === "commercial")
                .map(({ id, attributes }) => (
                  <Link key={id} href={`/portfolio/${id}`}>
                    {attributes.title}
                  </Link>
                ))}
            </div>
          </ul>
        </div>
      </Layout>
    );
  } else if (error) {
    if (process.env.NODE_ENV === "production") {
      captureException(error);
    }
    replace("/404");
    return (
      <Layout title={"Portfolio"}>
        <FullpageSpinenr />
      </Layout>
    );
  }
};

export default PortfolioList;
