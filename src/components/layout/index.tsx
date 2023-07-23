import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  noFooter?: boolean;
};

const Layout = ({ children, title, noFooter }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `329Design | ${title}` : "329Design"}</title>;
      </Head>
      <div className="min-h-full">
        {children}
        {!noFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
