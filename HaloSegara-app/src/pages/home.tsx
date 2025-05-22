import HomeSection from "../components/organisms/HeroSection";
import FeatureSection from "../components/organisms/FeatureSection";
import MitraSection from "../components/organisms/MitraSection";

const Home = () => {
  return(
    <main className="font-poppins text-black">
      <HomeSection/>
      <FeatureSection/>
      <MitraSection/>
    </main>
  )
}

export default Home