import Button from "../atoms/Button";
import { CircleArrowRight, MapPin } from "lucide-react";
import imagepantai from "../../assets/Pantai.jpg";

interface BeachCardProps {
  index: number;
}

const BeachCard = ({ index }: BeachCardProps) => (
  <div className="flex-shrink-0 w-[275px] shadow-lg rounded-2xl overflow-hidden bg-white">
    <img src={imagepantai} alt={`Pantai ${index}`} className="object-cover h-52 w-full" />
    <div className="flex flex-col gap-5 px-5 py-6">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl">Pantai Ceria {index}</h3>
        <div className="flex items-center gap-1">
          <MapPin className="text-danger500 w-4 h-4" />
          <p className="text-sm text-neutral800">Tulungagung, Jawa Timur</p>
        </div>
      </div>
      <Button className="bg-primary500 hover:bg-primary700 text-white font-semibold rounded-4xl w-fit flex items-center py-3 px-6 text-base">
        Lihat Selengkapnya
        <CircleArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  </div>
);

export default BeachCard;
