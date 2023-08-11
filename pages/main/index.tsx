import React from "react";
import { useQuery } from "@apollo/client";

import FullPageLayout from "components/layout/full";
import FullpageSpinenr from "components/spinner/fullpage";
import Layout from "components/layout";
import { GET_MAIN_IMAGE } from "pages/api/mainImage";

const Main = () => {
  const { data, loading } = useQuery(GET_MAIN_IMAGE);

  if (loading) {
    return (
      <Layout>
        <FullpageSpinenr />
      </Layout>
    );
  }
  if (data) {
    return (
      <FullPageLayout
        imgUrl={data.mainImage.data.attributes.image.data.attributes.url}
      ></FullPageLayout>
    );
  } else {
    return <FullPageLayout imgUrl={"/images/main1.jpeg"}></FullPageLayout>;
  }
};

export default Main;
