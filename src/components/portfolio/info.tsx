import React from "react";
import Image from "next/image";

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
          <strong>범주&nbsp;</strong>
          <span className="text-gray-600">{attributes?.category}</span>
        </li>
        <li>
          <strong>면적&nbsp;</strong>
          <span className="text-gray-600">{attributes?.area}</span>
        </li>
      </ul>
      <div>
        <p className="mb-2">
          <strong>설계도면</strong>
        </p>
        <ul>
          {attributes?.drawing.data.map(({ attributes, id }) => (
            <Image src={attributes.url} alt="drawing" width={400} height={200} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InfoSection;
