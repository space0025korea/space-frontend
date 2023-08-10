import React, { ReactNode } from "react";
import Head from "next/head";

import Navbar from "components/nav";

type FullPageLayoutProps = {
  children: ReactNode;
};

const FullPageLayout = ({ children }: FullPageLayoutProps) => {
  return (
    <>
      <Head>
        <title>329Design</title>;
      </Head>
      <div
        // eslint-disable-next-line quotes
        style={{ backgroundImage: 'url("/images/main1.jpeg")' }}
        className="min-h-screen bg-cover bg-local bg-center bg-no-repeat"
      >
        {<Navbar noBorder />}
        <main>{children}</main>
      </div>
    </>
  );
};

export default FullPageLayout;
