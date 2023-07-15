import React from "react";

import { getContent } from "pages/api/portfolio";

const Portfolio = ({ contents }: { contents: any }) => {
  return (
    <>
      <h1>dd</h1>
      {contents.data.map(({ attributes, id }: { attributes: any; id: string }) => (
        <li key={id} className="border-b-8 border-yellow-300 bg-yellow-50">
          <h1>{attributes.title}</h1>
          <p>{attributes.description}</p>
        </li>
      ))}
    </>
  );
};
export const getServerSideProps = async () => getContent();
export default Portfolio;
