import Helmet from "../../components/helmet/Helmet";
import HomePageHeroSection from "./HomePageHeroSection";
import HomePageServicesSection from "./HomePageServicesSection";
import HomePageTrendingSection from "./HomePageTrendingSection";
import HomePageBestSalesSection from "./HomePageBestSalesSection";
import HomePageCountSection from "./HomePageCountSection";
import HomePageNewArrivalsSection from "./HomePageNewArrivalsSection";
import HomePagePopularCategorySection from "./HomePagePopularCategorySection";

const HomePage = () => {
  return (
    <Helmet title={"首頁"}>
      <HomePageHeroSection />
      <HomePageServicesSection />
      <HomePageTrendingSection />
      <HomePageBestSalesSection />
      <HomePageCountSection />
      <HomePageNewArrivalsSection />
      <HomePagePopularCategorySection />
    </Helmet>
  );
};

export default HomePage;
