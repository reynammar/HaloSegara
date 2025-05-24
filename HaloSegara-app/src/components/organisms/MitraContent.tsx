import HeaderSearch from "./HeaderSearch";
import { beachData } from "../../data/beachData";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleArrowRight,
  MapPin,
} from "lucide-react";
import Button from "../atoms/Button";
import Modal from "../molecules/ModalMaps";
import mapImage from "../../assets/PetaMalang.png";
import headerImage from "../../assets/Header2.jpg";

const MitraContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    setCurrentPage(1);
  };

  const handleMapClick = () => {
    setIsMapModalOpen(true);
  };

  const closeModal = () => {
    setIsMapModalOpen(false);
  };

  const filteredData = beachData.filter(
    (beach) =>
      beach.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      beach.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <HeaderSearch
        onSearch={handleSearch}
        onMapClick={handleMapClick}
        title={
          <>
            Temukan{" "}
            <span className="font-fraunces italic">Mitra HaloSegara </span>di
            Sekitarmu!
          </>
        }
        description={
          <>
            Dapatkan kemudahan menukar sampah yang kamu kumpulkan dengan
            berbagai reward menarik di lokasi mitra pilihan kami.
          </>
        }
        imageSrc={headerImage}
      />

      <section className="flex flex-col px-20 pt-10 pb-20 gap-10">
        <div className="grid grid-cols-2 gap-8">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div
                className="flex flex-col font-inter rounded-4xl shadow-lg bg-white w-[550px] h-[450px] overflow-hidden"
                key={item.id}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[240px] object-cover"
                />
                <div className="flex flex-col gap-[60px] px-5 py-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-2xl">{item.title}</h3>
                    <div className="flex items-center gap-1">
                      <MapPin className="text-danger500 w-4 h-4" />
                      <p className="text-sm text-neutral800">{item.location}</p>
                    </div>
                  </div>
                  <Button
                    className="bg-primary500 hover:bg-primary700 transition-all duration-300 ease-in-out text-white font-semibold rounded-4xl flex items-center justify-center py-3 px-6 text-base w-full cursor-pointer"
                    onClick={handleMapClick}
                  >
                    Lihat Lokasi
                    <CircleArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-black col-span-2 text-center font-semibold text-5xl leading-tight">
              Woopss.. Maaf Ya Pantai Yang Kamu Cari Tidak Ada
            </p>
          )}
        </div>

        {filteredData.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 rounded-md p-[9px] text-white transition ${
                currentPage === 1
                  ? "bg-neutral100 cursor-not-allowed"
                  : "bg-primary500 hover:bg-primary700"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Circle
                  key={index}
                  size={10}
                  className={`transition stroke-none ${
                    currentPage === index + 1
                      ? "fill-primary500"
                      : "fill-neutral50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 rounded-md p-[9px] text-white transition ${
                currentPage === totalPages
                  ? "bg-neutral100 cursor-not-allowed"
                  : "bg-primary500 hover:bg-primary700"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      <Modal isOpen={isMapModalOpen} onClose={closeModal}>
        <h2 className="font-inter text-4xl font-bold mb-8 text-center">
          Pilih Pantai Lewat Peta
        </h2>
        <img
          src={mapImage}
          alt="Static Map of Indonesia"
          className="w-full h-auto rounded-md"
        />
      </Modal>
    </>
  );
};

export default MitraContent;
