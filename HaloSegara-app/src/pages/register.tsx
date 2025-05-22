import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router";
import bgImage from "../assets/background-photos.png";
import imageMain from "../assets/polaroid-photo.jpg";
import Button from "../components/atoms/Button";
import InputLabel from "../components/molecules/InputLabels";
import PasswordInput from "../components/molecules/PasswordInput";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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

        <div className="flex flex-col bg-white rounded-ss-[52px] rounded-es-[52px] p-14 w-1/2 h-full overflow-hidden">
          <div className="flex flex-col justify-center p-12 h-full overflow-y-auto">
            <h1 className="font-poppins font-bold text-primary500 text-[40px] leading-12 whitespace-nowrap">
              Gabung dan <br />
              Selamatkan Pantai
            </h1>
            <p className="text-neutral800 text-sm">
              Dapatkan akses ke tantangan seru, kumpulkan poin, dan jadilah
              pahlawan lingkungan.
            </p>
            <div className="flex flex-col flex-grow overflow-y-auto pr-2">
              <form className="flex flex-col gap-3 mt-5">
                <InputLabel
                  label="Nama"
                  id="name"
                  type="text"
                  placeholder="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <InputLabel
                  label="Username"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

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
                  label="Kata Sandi"
                  id="password"
                  name={password}
                  placeholder="Masukkan Kata Sandi"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <PasswordInput
                  label="Konfirmasi Kata Sandi"
                  id="password"
                  name={confirmPassword}
                  placeholder="Ulangi Kata Sandi"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <div className="flex gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="w-4 h-4 text-primary500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="text-[12px] text-neutral800"
                  >
                    Dengan mendaftar, kamu setuju dengan Kebijakan Privasi dan{" "}
                    <a href="#" className="text-primary500">
                      Syarat & Ketentuan
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary500 mt-6 hover:bg-primary700 text-white flex justify-center items-center gap-2 py-3 px-6 rounded-md cursor-pointer"
                >
                  Masuk
                  <ArrowLeft className="rotate-180" strokeWidth={2.5} />
                </Button>

                <p className="text-sm text-center mt-4 text-neutral800">
                  Sudah punya akun?{" "}
                  <Link
                    to="/login"
                    className="text-primary500 hover:text-primary700 font-semibold"
                  >
                    Masuk
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
