import React from "react";
import Head from "next/head";

import Navbar from "components/layout/nav";

type FullPageLayoutProps = {
  imgUrl: string;
};

const FullPageLayout = ({ imgUrl }: FullPageLayoutProps) => {
  return (
    <>
      <Head>
        <title>공간제작소</title>;
      </Head>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="min-h-screen bg-cover bg-local bg-center bg-no-repeat"
      >
        {<Navbar noBorder />}
      </div>
    </>
  );
};

export default FullPageLayout;
