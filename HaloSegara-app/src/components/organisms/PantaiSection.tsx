import { useState } from "react";
import BeachCard from "../molecules/BeachCard";
import { beachData } from "../../data/beachData";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import HeaderSearch from "../organisms/HeaderSearch";
import Modal from "../molecules/ModalMaps";
import mapImage from "../../assets/PetaMalang.png"

const PantaiSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const [searchTerm, setSearchTerm] = useState("");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false); // modal state

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
      <HeaderSearch onSearch={handleSearch} onMapClick={handleMapClick} />

      <section className="flex flex-col gap-10 py-14 px-20">
        <div className="grid grid-cols-4 gap-x-12 gap-y-8">
          {currentItems.length > 0 ? (
            currentItems.map((beach) => (
              <BeachCard
                key={beach.id}
                title={beach.title}
                location={beach.location}
                imageUrl={beach.imageUrl}
              />
            ))
          ) : (
            <p className="text-black col-span-4 text-center font-semibold text-5xl leading-tight">
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

      {/* Modal peta statis */}
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

export default PantaiSection;
