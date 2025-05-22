import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CircleArrowRight,
  MapPin,
  Star,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import bankMitra from "../../assets/bankSampah.jpg";
import Button from "../atoms/Button";
import avatar from "../../assets/Avatar.png";

const testimonials = [
  {
    name: "Syauqi Sitohang",
    role: "Volunteer HaloSagara",
    photo: avatar,
    rating: 5,
    text: '"HaloSagara mengubah cara saya menikmati pantai. Sekarang, setiap kunjungan bukan hanya tentang bersantai, tapi juga aksi nyata untuk membersihkan sampah. Menyenangkan dan bermanfaat!"',
  },
  {
    name: "Nina Larasati",
    role: "Volunteer HaloSagara",
    photo: avatar,
    rating: 5,
    text: '"Saya sangat terinspirasi dengan gerakan ini, sangat membantu lingkungan dan komunitas!"',
  },
  {
    name: "Budi Santoso",
    role: "Volunteer HaloSagara",
    photo: avatar,
    rating: 5,
    text: '"Kegiatan yang sangat bermanfaat dan menyenangkan, membuat saya lebih peduli dengan lingkungan sekitar."',
  },
  {
    name: "Rina Setiawati",
    role: "Volunteer HaloSagara",
    photo: avatar,
    rating: 5,
    text: '"Membantu membersihkan pantai membuat saya merasa lebih dekat dengan alam."',
  },
];

const FeatureSection = () => {
  // state index testimoni pertama yang ditampilkan
  const [startIndex, setStartIndex] = useState(0);

  // tombol prev (geser 2 testimoni ke kiri)
  const handlePrev = () => {
    setStartIndex((prev) => (prev - 2 < 0 ? 0 : prev - 2));
  };

  // tombol next (geser 2 testimoni ke kanan)
  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 2 >= testimonials.length ? prev : prev + 2
    );
  };

  // dapatkan 2 testimoni mulai dari startIndex
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 2);
  return (
    <section className="rounded-t-[60px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center">
      <div className="flex flex-col py-20 px-20 justify-center items-center gap-10">
        <div className="flex flex-col gap-4 items-center">
          <h4 className="font-bold text-extralarge">
            Cari
            <span className="font-fraunces italic">Mitra</span> Terdekat
          </h4>
          <p className="text-navlink">
            Ubah Sampah Jadi Berkah, Lebih Mudah dan Dekat
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {[...Array(4)].map((_, index) => (
            <div
              className="flex flex-col font-inter rounded-4xl shadow-lg bg-white w-[550px] h-[450px] overflow-hidden"
              key={index}
            >
              <img
                src={bankMitra}
                alt="Bank Sampah"
                className="w-full h-[240px] object-cover"
              />
              <div className="flex flex-col gap-[60px] px-5 py-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-2xl">
                    Bank Ceria {index + 1}
                  </h3>
                  <div className="flex items-center gap-1">
                    <MapPin className="text-danger500 w-4 h-4" />
                    <p className="text-sm text-neutral800">
                      Tulungagung, Jawa Timur
                    </p>
                  </div>
                </div>
                <Button className="bg-primary500 hover:bg-primary700 transition-all duration-300 ease-in-out text-white font-semibold rounded-4xl flex items-center justify-center py-3 px-6 text-base w-full cursor-pointer">
                  Lihat Lokasi
                  <CircleArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button className="font-inter border-4 border-primary500 hover:bg-primary500 transition-all duration-300 ease-in-out text-primary500 hover:text-white font-semibold rounded-md flex items-center justify-center py-3 px-6 text-base w-full cursor-pointer">
          Lihat Lebih Banyak
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>

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

        <div className="flex flex-col max-w-[1000px] gap-8 justify-center items-center">
          <div className="flex flex-col gap-4 items-center text-center max-w-[750px]">
            <h4 className="font-bold text-extralarge">
              Apa Kata
              <span className="font-fraunces italic"> Mereka</span>?
            </h4>
            <p className="text-navlink">
              Lihat bagaimana HaloSegara telah menginspirasi banyak orang untuk
              menjaga kebersihan pantai dan menciptakan dampak positif di
              lingkungan sekitar
            </p>
          </div>

          {/* Bagian Swiper Testimoni */}
          <div className="flex items-center gap-16">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="flex items-center gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col max-w-[500px] min-h-[400px] gap-4"
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          color="#444955"
                          size={21}
                          className="fill-warning100"
                        />
                      ))}
                    </div>
                    <p>{testimonial.text}</p>
                  </div>

                  {/* Avatar section */}
                  <div className="flex items-center gap-2 mt-6">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="rounded-full w-[60px]"
                    />
                    <div className="flex flex-col gap-1 items-center justify-center">
                      <h5 className="font-semibold text-navlink">
                        {testimonial.name}
                      </h5>
                      <p className="font-inter italic text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {index === 0 && (
                  <div className="w-[1px] h-[350px] bg-neutral100"></div>
                )}
              </div>
            ))}
          </div>

          {/* Navigasi Tombol */}
          <div className="flex gap-3">
            <Button
              type="button"
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`border-2 border-primary500 transition-all duration-300 ease-in-out h-fit p-2 ${
                startIndex === 0
                  ? "text-white bg-primary500 cursor-not-allowed"
                  : "text-primary500 hover:bg-primary500 hover:text-white cursor-pointer"
              }`}
            >
              <ChevronLeft />
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              disabled={startIndex + 2 >= testimonials.length}
              className={`border-2 border-primary500 transition-all duration-300 ease-in-out h-fit p-2 ${
                startIndex + 2 >= testimonials.length
                  ? "text-white bg-primary500 cursor-not-allowed"
                  : "text-primary500 hover:bg-primary500 hover:text-white cursor-pointer"
              }`}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
