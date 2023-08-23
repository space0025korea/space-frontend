import React from "react";
import Link from "next/link";
import Image from "next/image";

import Carousel from "components/carousel";
import Layout from "components/layout";

const page = () => {
  return (
    <Layout isMain={true}>
      <Link href={"/main"}>
        <div className="relative">
          <Carousel />
          <Image
            src="/images/logo/main.png"
            alt="main logo"
            width={48}
            height={48}
            priority
            className="absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </Link>
    </Layout>
  );
};

export default page;
