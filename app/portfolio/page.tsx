import React from "react";

import { getContent } from "src/api/portfolio";

const Page = async () => {
  const data = await getContent();

  return (
    <>
      {data.map(({ attributes, id }: { attributes: any; id: string }) => (
        <div key={id} className="border-b-8">
          <h1>{attributes.title}</h1>
          <p>{attributes.description}</p>
        </div>
      ))}
    </>
  );
};
export default Page;
