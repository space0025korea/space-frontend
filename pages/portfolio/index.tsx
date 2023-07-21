import React from "react";
import { useQuery } from "@apollo/client";
import Image from "next/image";

import { GET_PROJECTS } from "pages/api/portfolio";

type DataType = {
  attributes: {
    area: string;
    category: string;
    description: string;
    drawing: {
      data: { id: number; attributes: { name: string; url: string } }[];
    };
    location: string;
    photos: {
      data: { id: number; attributes: { name: string; url: string } }[];
    };
    title: string;
    updatedAt: string;
  };
  id: string;
};

const Portfolio = () => {
  const { data, loading } = useQuery(GET_PROJECTS);
  const projects: DataType[] = data?.projects?.data;

  if (loading) return <h1>loading</h1>;
  //TODO: loadingSpinner

  return (
    <>
      {projects.map(({ attributes, id }) => (
        <li key={id} className="= border-b-8 border-yellow-300">
          <h1>{attributes.title}</h1>
          <p>{attributes.description}</p>
          {attributes.photos.data.map((img) => (
            <Image
              src={img.attributes.url}
              // TODO: 이미지 반응형으로 수정
              width={200}
              height={200}
              alt="drawing images"
              key={img.id}
            />
          ))}
        </li>
      ))}
    </>
  );
};

export default Portfolio;
