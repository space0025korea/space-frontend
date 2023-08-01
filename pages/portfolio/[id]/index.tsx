import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import Layout from "components/layout";
import FullpageSpinenr from "components/spinner/fullpage";
import InfoSection from "components/portfolio/info";
import Thumbnails from "components/portfolio/thumbnails";
import { GET_PROJECT_BY_ID } from "pages/api/portfolio";

export type ImgDataType = { id: number; attributes: { name: string; url: string } };

export type AttributeType = {
  area: string;
  category: string;
  description: string;
  drawing: {
    data: ImgDataType[];
  };
  location: string;
  photos: {
    data: ImgDataType[];
  };
  title: string;
  updatedAt: string;
};

type ProjectDataType = {
  attributes: AttributeType;
  id: string;
};

const Portfolio = () => {
  const { replace, query } = useRouter();
  const { data, loading } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id: query.id },
  });

  const project: ProjectDataType = data?.project?.data;

  if (loading) {
    return (
      <Layout title={"포트폴리오"}>
        <FullpageSpinenr />
      </Layout>
    );
  } else if (project) {
    return (
      <>
        <Layout title={"포트폴리오"}>
          <main className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="w-full md:w-5/12">
              <InfoSection attributes={project.attributes} />
            </div>
            <div className="w-full md:w-7/12">
              <Thumbnails images={project.attributes.photos.data} />
            </div>
          </main>
        </Layout>
      </>
    );
  } else {
    replace("/portfolio");
    return (
      <Layout title={"포트폴리오"}>
        <FullpageSpinenr />
      </Layout>
    );
  }
};

export default Portfolio;
