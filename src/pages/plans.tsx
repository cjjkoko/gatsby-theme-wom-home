import React from "react";

import SEO from "plans/components/marketing/seo";
import "./index.scss";
import Layout from "plans/components/marketing/layout-marketing";
import Banner from "plans/components/marketing/banner";
import BannerDes from "plans/components/marketing/banner-des";
import ProductList from "plans/components/marketing/product-list";
import Aticle from "plans/components/marketing/article";
class Plans extends React.Component {
  public props: any;

  public componentDidMount() {

  }

  public render() {

    return (
      <Layout>
        <SEO title="Marketing"/>
        <Banner/>
        <BannerDes/>
        <ProductList/>
        <Aticle/>
      </Layout>
    );
  }
}

export default Plans;
