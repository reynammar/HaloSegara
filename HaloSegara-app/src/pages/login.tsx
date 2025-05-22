import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router";
import bgImage from "../assets/background-photos.png";
import imageMain from "../assets/polaroid-photo.jpg";
import Button from "../components/atoms/Button";
import InputLabel from "../components/molecules/InputLabels";
import PasswordInput from "../components/molecules/PasswordInput";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center p-6 w-2/3 text-white relative">
          <Button
            onClick={() => window.history.back()}
            className="p-2.5 bg-primary500 hover:bg-primary700 rounded-md w-fit absolute top-6 left-6 cursor-pointer"
          >
            <ArrowLeft strokeWidth={3} />
          </Button>

          <div className="flex flex-col items-center gap-6">
            <div className="p-4 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.68)] max-w-[400px]">
              <img src={imageMain} alt="Dokumentasi Mitra" />
            </div>
            <p className="italic text-sm text-center max-w-[360px]">
              “Setiap langkah kecil mengumpulkan sampah adalah langkah besar
              menyelamatkan pantai.”
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white rounded-ss-[52px] rounded-es-[52px] p-28 w-1/2 h-full">
          <h1 className="font-poppins font-bold text-primary500 text-[40px] leading-12">
            Selamat Datang Kembali!
          </h1>
          <p className="text-neutral800 text-sm">
            Silahkan masukan alamat email dan kata sandi anda.
          </p>

          <form className="flex flex-col gap-3 mt-5">
            <InputLabel
              label="Email"
              id="email"
              type="email"
              placeholder="Alamat Email"
              icon={<Mail size={18} className="text-neutral500" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              label="Password"
              id="password"
              placeholder="Kata Sandi"
            />

            <Button
              type="submit"
              className="w-full bg-primary500 hover:bg-primary700 mt-6 text-white flex justify-center items-center gap-2 py-3 px-6 rounded-md cursor-pointer"
            >
              Masuk
              <ArrowLeft className="rotate-180" strokeWidth={2.5} />
            </Button>

            <p className="text-sm text-center mt-4 text-neutral800">
              Tidak mempunyai akun?{" "}
              <Link to="/register" className="text-primary500 hover:text-primary700 font-semibold">
                Daftar
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
