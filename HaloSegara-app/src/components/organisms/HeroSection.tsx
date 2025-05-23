import { useNavigate } from "react-router";
import { useRef } from "react";
import heroImage from "../../assets/hero.png";
import Button from "../atoms/Button";
import IconCard from "../atoms/IconCards";
import BeachCard from "../molecules/BeachCard";
import {
  CircleArrowRight,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import flag from "../../assets/Flag.svg";
import gift from "../../assets/Gift.svg";
import box from "../../assets/Package.svg";
import Medal from "../../assets/medali.svg";
import { beachData } from "../../data/beachData";

const HeroSection = () => {
  const navigate = useNavigate();

  const cardContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      {/* Hero section */}
      <div className="h-50 w-full bg-primary1000"></div>
      <div className="relative">
        <img src={heroImage} alt="" />
        <div className="absolute -top-5 left-28 w-[555px] flex flex-col gap-3">
          <h1 className="font-bold text-[40px] leading-15">
            Satu Langkah untuk Pantai Lebih Baik!
          </h1>
          <p className="font-inter">
            Bergabung dengan ribuan pejuang pantai dalam mengurangi sampah dan
            menjaga keindahan pantai. Bersihkan pantai, kumpulkan poin, dan
            dapatkan hadiah menarik!
          </p>
          <Button
            onClick={() => navigate("/login")}
            className="bg-primary500 hover:bg-primary700 transition-all duration-300 ease-in-out text-white font-bold rounded-[6px] w-fit flex items-center py-3 px-6 text-base cursor-pointer"
            type="button"
          >
            Bergabung
            <CircleArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
      <div className="h-28 w-full bg-linear-to-b from-[#FEDCEC] to-white"></div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-2 text-center">
          <h4 className="font-bold text-extralarge">
            Fitur <span className="font-fraunces italic">Interaktif</span> Kami
          </h4>
          <p className="text-navlink">
            Inovasi Terbaik untuk Menjaga Pantai Tetap Bersih dan Indah
          </p>
        </div>
        <div className="flex gap-4 mb-36">
          <IconCard
            title="Leaderboard"
            desc="Lihat peringkatmu dan temukan siapa yang paling aktif dalam membersihkan pantai!"
            bgColor="bg-primary50"
            textColor="text-info800"
            imgSrc={flag}
            extraClass="mt-14"
            textSize="text-[40px]"
            imgClass="w-40"
            cardSize="w-[356px] h-[371px]"
            descSize="text-[18px] leading-8"
          />
          <IconCard
            title="Eco Challenge"
            desc="Ikuti tantangan membersihkan pantai dan dapatkan reward."
            bgColor="bg-secondary50"
            textColor="text-secondary800"
            imgSrc={gift}
            imgClass="ml-36"
            textSize="text-[40px]"
            cardSize="w-[356px] h-[371px]"
            descSize="text-[18px] leading-8"
          />
          <IconCard
            title="Mitra Penukaran Sampah"
            desc="Kumpulkan sampah di pantai dan langsung tukarkan di lokasi mitra."
            bgColor="bg-primary50"
            textColor="text-info800"
            imgSrc={box}
            imgClass="-mt-32 ml-36"
            extraClass="mt-14"
            textSize="text-[40px]"
            cardSize="w-[356px] h-[371px]"
            descSize="text-[18px] leading-8"
          />
        </div>
      </div>

      {/* Jelajahi pantai */}
      <div className="flex flex-col gap-14 bg-primary50 py-20">
        <div className="flex justify-between items-center px-14">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-extralarge">
              Jelajahi <span className="font-fraunces italic">Pantai</span>{" "}
              Terindah
            </h4>
            <p className="font-inter text-[18px] leading-8">
              Temukan Surga Tersembunyi dan Pantai Terbersih dengan Mudah
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              type="button"
              onClick={() => {
                if (cardContainerRef.current) {
                  cardContainerRef.current.scrollBy({
                    left: -320,
                    behavior: "smooth",
                  });
                }
              }}
              className="border-2 border-primary500 hover:bg-primary500 transition-all duration-300 ease-in-out h-fit p-2 text-primary500 hover:text-white cursor-pointer"
            >
              <ChevronLeft />
            </Button>
            <Button
              type="button"
              onClick={() => {
                if (cardContainerRef.current) {
                  cardContainerRef.current.scrollBy({
                    left: 320,
                    behavior: "smooth",
                  });
                }
              }}
              className="border-2 border-primary500 hover:bg-primary500 transition-all duration-300 ease-in-out h-fit p-2 text-primary500 hover:text-white cursor-pointer"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div
          ref={cardContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pl-14 pr-14 pb-8"
        >
          {beachData.slice(0, 10).map((beach) => (
            <BeachCard
              key={beach.id}
              title={beach.title}
              location={beach.location}
              imageUrl={beach.imageUrl}
            />
          ))}
        </div>
      </div>
      {/* Akhir Jelajahi pantai */}

      {/* Fitur unggulan */}
      <div className="flex flex-col gap-36 py-36 justify-center items-center">
        <div className="flex flex-col gap-4 w-[936px]">
          <div className="flex gap-2">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-extralarge">
                <span className="font-fraunces italic">Eco</span> Challenge
              </h4>
              <p className="font-inter text-[19.5px] leading-8">
                Eco Challenge mengubah kegiatan bersih-bersih pantai menjadi
                petualangan seru dan bermakna. Kamu bisa ikut serta membersihkan
                pantai favoritmu, sekaligus mengumpulkan poin yang bisa ditukar
                dengan berbagai hadiah menarik. Setiap kilogram sampah yang kamu
                kumpulkan bukan hanya sekadar angka, tapi juga kontribusi nyata
                untuk masa depan pantai yang lebih bersih dan indah.
              </p>
            </div>
            <img src={Medal} alt="medaliicon" className="" />
          </div>
          <Button
            onClick={() => navigate("/register")}
            className="bg-secondary500 hover:bg-secondary700 transition-all duration-300 ease-in-out text-black font-bold rounded-[6px] w-fit flex items-center py-4 px-6 text-base cursor-pointer"
            type="button"
          >
            Ikuti Eco Challenge Sekarang!
            <ArrowRight className="w-4 h-4 ml-1" strokeWidth={3} />
          </Button>
        </div>
        <div className="flex flex-col gap-4 w-[1152px] px-12">
          <div className="flex gap-2">
            <img src={Medal} alt="medaliicon" className="" />
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-extralarge">Leaderboard</h4>
              <p className="font-inter text-[19.5px] leading-8">
                Lihat peringkat para pejuang HaloSagara yang telah berkontribusi
                dalam menjaga kebersihan pantai. Raih posisi teratas dengan
                mengumpulkan lebih banyak sampah dan ikuti tantangan Eco
                Challenge untuk mendapatkan poin tambahan. Ayo buktikan
                kontribusimu! Bersihkan pantai, kumpulkan poin, dan naikkan
                peringkatmu di HaloSagara!
              </p>
              <Button
                onClick={() => navigate("/register")}
                className="bg-secondary500 hover:bg-secondary700 transition-all duration-300 ease-in-out text-black font-bold rounded-[6px] w-fit flex items-center py-4 px-6 text-base cursor-pointer"
                type="button"
              >
                Lihat Leaderboard Lengkap
                <ArrowRight className="w-4 h-4 ml-1" strokeWidth={3} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir fitur unggukan */}
    </section>
  );
};

export default HeroSection;
