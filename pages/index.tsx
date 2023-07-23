import React from "react";
import Link from "next/link";

import Carousel from "components/carousel";
import Layout from "components/layout";

const page = () => {
  return (
    <Layout noNavbar noFooter>
      <Link href={"/portfolio"}>
        <div className="relative">
          <Carousel />
          {/* TODO: 로고 디자인 나오면 추가 */}
          <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl">
            329Design
          </h1>
        </div>
      </Link>
    </Layout>
  );
};

export default page;
