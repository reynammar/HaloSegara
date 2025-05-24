import MitraSection from "../components/organisms/MitraSection";
import mitraImage from "../assets/MitraImage2.jpg";
import MitraContent from "../components/organisms/MitraContent";

const Mitra = () => {
  return (
    <main className="font-poppins text-black">
      <MitraContent />
      <MitraSection
        backgroundImage={mitraImage}
      />
    </main>
  );
};

export default Mitra;
