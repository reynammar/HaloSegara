import { MapPin, Search } from "lucide-react";
import { useState, type ReactNode } from "react";

interface HeaderSearchProps {
  onSearch: (query: string) => void;
  onMapClick?: () => void;
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
}

const HeaderSearch = ({
  onSearch,
  onMapClick,
  title,
  description,
  imageSrc
}: HeaderSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="relative flex flex-col justify-center items-center rounded-ee-[100px] rounded-es-[100px] mb-10 overflow-hidden h-screen">
      <img
        src={imageSrc}
        alt="Hero Section"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col gap-6 justify-center items-center text-center text-white px-4">
        <h1 className="font-bold text-[40px] leading-tight max-w-[950px]">
          {title}
        </h1>
        <p className="text-base max-w-[750px] leading-relaxed">{description}</p>

        {/* Search form */}
        <form
          onSubmit={handleSearch}
          className="flex gap-3 w-full max-w-[740px] mt-6"
        >
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Cari Pantai"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-neutral100 bg-white px-4 py-3 pr-12 rounded-md text-sm text-neutral800 focus:outline-primary500 font-inter"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-neutral500 hover:text-neutral800"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          <button
            type="button"
            onClick={onMapClick}
            className="flex items-center gap-3 border-1 border-neutral100 bg-white hover:bg-neutral50 transition-all duration-300 text-neutral300 rounded-sm px-3 py-2 text-sm font-inter cursor-pointer"
          >
            Pilih Lewat Peta
            <MapPin className="w-5 h-5" color="#444955" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeaderSearch;
