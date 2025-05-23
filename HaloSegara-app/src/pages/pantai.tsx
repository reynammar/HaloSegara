import PantaiSection from "../components/organisms/PantaiSection";
import MitraSection from "../components/organisms/MitraSection";
import mitraImage from "../assets/MitraImage.jpg";

const Pantai = () => {
  return (
    <main className="font-poppins text-black">
      <PantaiSection />
      <MitraSection backgroundImage={mitraImage} />
    </main>
  );
};

export default Pantai;
