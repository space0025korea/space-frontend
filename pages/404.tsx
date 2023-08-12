import React from "react";
import Link from "next/link";

import Layout from "components/layout";

const NotFound = () => {
  return (
    <Layout title="Not Found">
      <div className="mt-10 flex flex-col items-center gap-y-10 text-center font-bold">
        <p className="text-lg">찾으시는 페이지가 없어요!</p>
        <Link
          href={"/main"}
          className="w-40 rounded-md border-[1px] border-solid border-gray-200 p-3"
        >
          메인 페이지로 가기
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
