import { ArrowRight } from "lucide-react";
import Button from "../atoms/Button";
import image from "../../assets/MitraImage.jpg";

const MitraSection = () => {
  return (
    <section className="relative flex flex-col gap-8 justify-center items-center">
      <img src={image} alt="Mitra Section" className="w-full h-auto block" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute flex flex-col gap-4 justify-center items-center text-center max-w-[750px] text-white px-4">
        <h4 className="font-bold text-extralarge">
          Bergabung Menjadi
          <span className="font-fraunces italic"> Mitra</span>
        </h4>
        <p className="text-navlink">
          Ingin berkontribusi lebih dalam menjaga keindahan pantai sekaligus
          memperluas jangkauan bisnismu? Bergabunglah sebagai{" "}
          <b>Mitra HaloSagara </b>
          dan ambil peran dalam ekosistem peduli lingkungan.
        </p>
        <div className="flex gap-4 mt-4">
          <Button
            className="px-6 py-3 border-2 border-secondary500 text-secondary500 hover:bg-secondary50 rounded-md font-inter font-semibold min-w-[223px] text-center cursor-pointer"
            type="button"
          >
            Pelajari Lebih Lanjut
          </Button>
          <Button
            className="px-6 py-3 bg-secondary500 text-black rounded-md font-inter font-semibold flex items-center min-w-[223px] justify-center"
            type="button"
          >
            Gabung
            <ArrowRight strokeWidth={3} className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MitraSection;
