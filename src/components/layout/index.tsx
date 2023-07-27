import React, { ReactNode } from "react";
import Head from "next/head";

import Footer from "components/layout/footer";
import Navbar from "components/nav";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  noNavbar?: boolean;
  noFooter?: boolean;
};

const Layout = ({ children, title, noNavbar, noFooter }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `329Design | ${title}` : "329Design"}</title>;
      </Head>
      <div className="min-h-screen ">
        {!noNavbar && <Navbar />}
        <main className="px-10 py-5">{children}</main>
        {!noFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
