import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import Layout from "components/layout";
import FullpageSpinenr from "components/spinner/fullpage";
import InfoSection from "components/portfolio/info";
import Thumbnails from "components/portfolio/thumbnails";
import ImageDialog from "components/portfolio/dialog";
import Modal from "components/modal";
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
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

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
          <Link href={"/portfolio"} className="mb-8 flex items-center">
            <ChevronLeftIcon className="mr-1 h-6 w-6" />
            <h1 className="text-lg font-bold">Portfolio</h1>
          </Link>
          <main
            className={`flex flex-col justify-between gap-4 md:flex-row ${
              open ? "overflow-hidden" : ""
            }`}
          >
            <div className="w-full md:w-5/12">
              <InfoSection attributes={project.attributes} />
            </div>
            <div className="w-full md:w-7/12">
              <Thumbnails
                images={project.attributes.photos.data}
                setOpen={setOpen}
                setImageIndex={setImageIndex}
              />
            </div>
          </main>
          {open && (
            <Modal open={open} setOpen={setOpen}>
              <ImageDialog images={project.attributes.photos.data} imageIndex={imageIndex} />
            </Modal>
          )}
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
