import React from "react";

import { AttributeType } from "pages/portfolio/[id]";

type PropsType = {
  attributes: AttributeType;
};

const InfoSection = ({ attributes }: PropsType) => {
  return (
    <section className="flex flex-col gap-y-6">
      <h1 className="text-lg">{attributes?.title}</h1>
      <p className="text-gray-600">{attributes?.description}</p>
      <ul>
        <li>
          <strong>위치&nbsp;</strong>
          <span className="text-gray-600">{attributes?.location}</span>
        </li>
        <li>
          <strong>면적&nbsp;</strong>
          <span className="text-gray-600">{attributes?.area}</span>
        </li>
      </ul>
    </section>
  );
};

export default InfoSection;
