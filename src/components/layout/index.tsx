import React, { ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `329Design | ${title}` : "329Design"}</title>;
      </Head>
      {children}
    </>
  );
};

export default Layout;
