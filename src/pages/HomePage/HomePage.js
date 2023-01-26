import Helmet from "../../components/helmet/Helmet";
import HomePageHeroSection from "./HomePageHeroSection";

const HomePage = () => {
  

  return (
    <Helmet title={"首頁"}>
      <HomePageHeroSection></HomePageHeroSection>
    </Helmet>
  );
};

export default HomePage;
