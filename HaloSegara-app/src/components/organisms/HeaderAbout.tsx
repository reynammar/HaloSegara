import spiral1 from "../../assets/Spiral1.svg";
import spiral2 from "../../assets/Spiral2.svg";

const HeaderAbout = () => {
  return (
    <section className="relative flex flex-col justify-center items-center rounded-ee-[100px] rounded-es-[100px] overflow-hidden h-screen bg-primary500">
      {/* Spiral 1 kiri atas */}
      <img
        src={spiral1}
        alt="Spiral 1"
        className="absolute top-28 left-10 opacity-70 w-[268px]"
      />

      <div className="flex flex-col gap-6 justify-center items-center text-center text-white px-4">
        <h1 className="font-bold text-[40px] leading-tight max-w-[700px]">
          Menghubungkan
          <span className="font-fraunces italic"> Komunitas</span>, Menjaga
          <span className="font-fraunces italic"> Lautan </span>Bersih
        </h1>
        <p className="text-base max-w-[750px] leading-relaxed">
          Menciptakan pantai yang bersih, indah, dan bebas dari sampah.
        </p>
      </div>

      {/* Spiral 2 kanan bawah */}
      <img
        src={spiral2}
        alt="Spiral 2"
        className="absolute bottom-28 right-10 opacity-70 w-[240px]"
      />
    </section>
  );
};

export default HeaderAbout;
