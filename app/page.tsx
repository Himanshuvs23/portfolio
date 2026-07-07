import type { NextPage } from "next";
import { HomePageLayout } from "@/layouts";
import { portfolioData } from "@/utils/data/portfolio";

const Home: NextPage = () => {
  return (
    <HomePageLayout cmsApiResponse={portfolioData} cmsApiError={undefined} CmsApiLoading={false} />
  );
};

export default Home;
