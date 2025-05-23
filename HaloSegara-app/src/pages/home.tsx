import HomeSection from "../components/organisms/HeroSection";
import FeatureSection from "../components/organisms/FeatureSection";
import MitraSection from "../components/organisms/MitraSection";
import mitraImage from "../assets/MitraImage.jpg"

const Home = () => {
  return (
    <main className="font-poppins text-black">
      <HomeSection />
      <FeatureSection />
      <MitraSection backgroundImage={mitraImage} />
    </main>
  );
};

export default Home;
