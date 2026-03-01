import HomeHero from "../components/HomeHero";
import HomeFeatures from "../components/HomeFeatures";
import HomeCTA from "../components/HomeCTA";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("PractiCloud");
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeCTA />
    </>
  );
};

export default Home;
