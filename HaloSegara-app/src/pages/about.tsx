import AboutContent from "../components/organisms/AboutContent";
import HeaderAbout from "../components/organisms/HeaderAbout";
import MitraSection from "../components/organisms/MitraSection";
import mitraImage from "../assets/MitraImage3.png";

const About = () => {
  return (
    <main className="font-poppins text-black">
      <HeaderAbout />
      <AboutContent />
      <MitraSection
        backgroundImage={mitraImage}
        descMitra="Setiap orang memiliki peran penting dalam menjaga keindahan pantai. Bergabung dengan EcoBeach tidak hanya memberikan dampak positif bagi alam, tetapi juga memberikanmu pengalaman seru dan reward menarik. Mari kumpulkan sampah, dapatkan poin, dan jadilah bagian dari komunitas peduli lingkungan."
      />
    </main>
  );
};

export default About;
