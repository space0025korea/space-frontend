import React, { ReactNode } from "react";
import Head from "next/head";

import Footer from "components/layout/footer";
import Navbar from "components/layout/nav";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  isMain?: boolean;
};

const Layout = ({ children, title, isMain }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `공간제작소 | ${title}` : "공간제작소"}</title>;
      </Head>
      <div className="min-h-screen">
        {!isMain && <Navbar />}
        <main className={isMain ? "" : "layout-min-height px-8 py-5"}>{children}</main>
        {!isMain && <Footer />}
      </div>
    </>
  );
};

export default Layout;
