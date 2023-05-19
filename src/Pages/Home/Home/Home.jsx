import Banner from "../Banner";
import ExtraSectionPartner from "../ExtraSectionPartner";
import ExtraSectionService from "../ExtraSectionService";
import GallerySection from "../GallerySection";
import ReactTab from "../ReactTab";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GallerySection></GallerySection>
      <ReactTab></ReactTab>
      <ExtraSectionPartner></ExtraSectionPartner>
      <ExtraSectionService></ExtraSectionService>
    </div>
  );
};

export default Home;
