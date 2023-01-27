import Helmet from "../../components/helmet/Helmet";
import HomePageHeroSection from "./HomePageHeroSection";
import HomePageServicesSection from "./HomePageServicesSection";
import HomePageTrendingSection from "./HomePageTrendingSection";

const HomePage = () => {
  

  return (
    <Helmet title={"首頁"}>
      <HomePageHeroSection />
      <HomePageServicesSection />
      <HomePageTrendingSection />
    </Helmet>
  );
};

export default HomePage;
