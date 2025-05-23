import { Award, Gift, Star, Sunrise } from "lucide-react";
import imagePantai1 from "../../assets/polaroid-photo2.png";
import imagePantai2 from "../../assets/polaroid-photo3.png";
import IconCard from "../atoms/IconCards";
import flag from "../../assets/Flag.svg";
import gift from "../../assets/Gift.svg";
import box from "../../assets/Package.svg";

const AboutContent = () => {
  return (
    <section className="flex flex-col gap-32 py-28 px-20">
      <div className="flex flex-col gap-28">
        <div className="flex gap-10">
          <div className="p-4 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.68)]">
            <img src={imagePantai1} alt="Foto Mitra" />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <h3 className="font-bold text-[40px] leading-12 max-w-[620px]">
              <span className="font-fraunces italic">Misi </span>Kami untuk
              Menciptakan Pantai Bebas Sampah
            </h3>
            <p className="leading-10 max-w-[620px]">
              Kami berkomitmen untuk membangun ekosistem pantai yang{" "}
              <b>bersih</b> dan bebas dari sampah plastik melalui{" "}
              <b>kolaborasi komunitas</b> dan <b>teknologi digital</b>. Setiap
              aksi kecil yang kamu lakukan akan membawa dampak besar bagi
              ekosistem laut.
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-4 justify-center">
            <h3 className="font-bold text-[40px] leading-12 max-w-[620px]">
              <span className="font-fraunces italic">Visi </span>Kami untuk
              Pantai yang Bersih & Dunia yang Lebih Hijau
            </h3>
            <p className="leading-10 max-w-[620px]">
              Menjadi platform <b>terdepan</b> dalam menjaga kebersihan pantai
              di seluruh dunia melalui <b>aksi nyata</b>, teknologi inovatif,
              dan <b>kolaborasi </b>
              masyarakat global.
            </p>
          </div>
          <div className="p-4 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.68)]">
            <img src={imagePantai2} alt="Foto Mitra" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 justify-center items-center">
        <h3 className="font-bold text-[40px]">
          Kenapa Harus Bergabung ke{" "}
          <span className="font-fraunces text-5xl font-black">HaloSagara</span>?
        </h3>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4 px-10 py-20 rounded-[52px] shadow-[0_0_5px_3px_rgba(107,107,107,0.48)]">
            <div className="p-[9px] border-2 border-danger500 bg-danger50 rounded-md w-fit">
              <Award size={40} strokeWidth={2.3} color="#DE1F1F" />
            </div>
            <div className="flex flex-col gap-4 max-w-[365px]">
              <h4 className="font-bold text-2xl">
                Aksi Nyata untuk Pantai Bersih
              </h4>
              <p className="font-inter text-navlink leading-8">
                Ikut serta dalam menjaga keindahan pantai dengan berpartisipasi
                dalam tantangan seru yang bisa kamu ikuti kapan saja, di mana
                saja.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-10 py-20 rounded-[52px] shadow-[0_0_5px_3px_rgba(107,107,107,0.48)]">
            <div className="p-[9px] border-2 border-warning700 bg-warning50 rounded-md w-fit">
              <Gift size={40} strokeWidth={2.3} color="#CCC500" />
            </div>
            <div className="flex flex-col gap-4 max-w-[340px]">
              <h4 className="font-bold text-2xl">Dapatkan Reward Menarik</h4>
              <p className="font-inter text-navlink leading-8">
                Setiap sampah yang kamu kumpulkan akan dikonversi menjadi poin
                yang bisa ditukar dengan berbagai reward eksklusif. Mulai dari
                diskon wisata pantai, merchandise keren, hingga akses event
                khusus dari HaloSagara.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-10 py-20 rounded-[52px] shadow-[0_0_5px_3px_rgba(107,107,107,0.48)]">
            <div className="p-[9px] border-2 border-primary500 bg-primary50 rounded-md w-fit">
              <Star size={40} strokeWidth={2.3} color="#083EA7" />
            </div>
            <div className="flex flex-col gap-4 max-w-[365px]">
              <h4 className="font-bold text-2xl">Akses ke pantai Terbaik</h4>
              <p className="font-inter text-navlink leading-8">
                Dapatkan rekomendasi pantai terbaik dengan informasi lengkap
                mengenai kebersihan dan keindahannya sebelum berkunjung. Pilih
                destinasi yang lebih bersih, nyaman, dan ramah lingkungan
                bersama HaloSagara.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-10 py-20 rounded-[52px] shadow-[0_0_5px_3px_rgba(107,107,107,0.48)]">
            <div className="p-[9px] border-2 border-secondary500 bg-secondary50 rounded-md w-fit">
              <Sunrise size={40} strokeWidth={2.3} color="#1FDE91" />
            </div>
            <div className="flex flex-col gap-4 max-w-[365px]">
              <h4 className="font-bold text-2xl">
                Jejak Kebaikan Terdokumentasi
              </h4>
              <p className="font-inter text-navlink leading-8">
                Pantau setiap aksi pedulimu melalui dashboard HaloSagara. Lihat
                berapa banyak sampah yang sudah kamu kumpulkan, dampak positif
                yang kamu hasilkan, dan bagikan kisah inspirasimu kepada
                komunitas!
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-8 items-start">
          {/* KIRI */}
          <div className="flex flex-col gap-4 max-w-[333px]">
            <h3 className="font-bold text-[40px] leading-12">
              Fitur <span className="font-fraunces italic">Interaktif </span>
              Kami
            </h3>
            <p className="leading-8">
              HaloSagara menghadirkan berbagai fitur interaktif yang mempermudah
              kamu untuk ikut menjaga kebersihan pantai sambil tetap
              bersenang-senang. Setiap langkah kecil yang kamu ambil membawa
              dampak besar bagi lingkungan.
            </p>
          </div>

          {/* KANAN */}
          <div className="flex gap-4">
            <IconCard
              title="Leaderboard"
              desc="Lihat peringkatmu dan temukan siapa yang paling aktif dalam membersihkan pantai!"
              bgColor="bg-primary50"
              textColor="text-info800"
              imgSrc={flag}
              imgClass="w-24"
              textSize="text-[23px]"
              cardSize="w-[240px] h-[251px]"
              descSize="text-[12px] leading-4"
            />
            <IconCard
              title="Eco Challenge"
              desc="Ikuti tantangan membersihkan pantai dan dapatkan reward."
              bgColor="bg-secondary50"
              textColor="text-secondary800"
              imgSrc={gift}
              imgClass="mt-5 ml-20 w-24"
              textSize="text-[23px]"
              cardSize="w-[240px] h-[251px]"
              descSize="text-[12px] leading-4"
            />
            <IconCard
              title="Mitra Penukaran Sampah"
              desc="Kumpulkan sampah di pantai dan langsung tukarkan di lokasi mitra penukaran terdekat."
              bgColor="bg-primary50"
              textColor="text-info800"
              imgSrc={box}
              imgClass="-mt-20 ml-24 w-24"
              textSize="text-[23px]"
              cardSize="w-[240px] h-[251px]"
              descSize="text-[12px] leading-4"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center my-28 shadow-[0px_2px_20px_1px_rgba(0,0,0,0.33)] px-16 py-10 rounded-[40px]">
          <div className="flex flex-col gap-1 text-center">
            <h3 className="font-bold text-5xl text-primary700">
              Pencapaian Kami
            </h3>
            <p className="text-navlink font-inter">
              Lihat bagaimana aksi kecil berdampak besar bagi lingkungan.
            </p>
          </div>
          <div className="flex justify-center items-center gap-12">
            <div className="flex flex-col gap-1 justify-center items-center">
              <h3 className="font-bold text-[40px] text-primary500">25.000+</h3>
              <p className="font-inter font-semibold text-xl text-center max-w-[120px]">
                Sampah Terkumpul
              </p>
            </div>

            {/* Garis vertikal */}
            <div className="w-[1px] h-[150px] bg-neutral100"></div>

            <div className="flex flex-col gap-1 justify-center items-center">
              <h3 className="font-bold text-[40px] text-primary500">40+</h3>
              <p className="font-inter font-semibold text-xl text-center max-w-[120px]">
                Mitra Berkolaborasi
              </p>
            </div>

            {/* Garis vertikal */}
            <div className="w-[1px] h-[150px] bg-neutral100"></div>

            <div className="flex flex-col gap-1 justify-center items-center">
              <h3 className="font-bold text-[40px] text-primary500">70%</h3>
              <p className="font-inter font-semibold text-xl text-center max-w-[120px]">
                Pantai Lebih Bersih
              </p>
            </div>

            {/* Garis vertikal */}
            <div className="w-[1px] h-[150px] bg-neutral100"></div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <h3 className="font-bold text-[40px] text-primary500">5.000+</h3>
              <p className="font-inter font-semibold text-xl text-center max-w-[120px]">
                Pengguna Aktif
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutContent;
