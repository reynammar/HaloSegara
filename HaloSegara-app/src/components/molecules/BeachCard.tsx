import Button from "../atoms/Button";
import { CircleArrowRight, MapPin } from "lucide-react";

interface BeachCardProps {
  index?: number;
  title: string;
  location: string;
  imageUrl: string;
  onClick?: () => void;
  buttonText?: string;
}

const BeachCard = ({
  title,
  location,
  imageUrl,
  onClick,
  buttonText = "Lihat Selengkapnya",
}: BeachCardProps) => (
  <div className="flex-shrink-0 w-[275px] shadow-lg rounded-2xl overflow-hidden bg-white flex flex-col">
    <img src={imageUrl} alt={title} className="object-cover h-52 w-full" />

    <div className="flex flex-col justify-between flex-grow px-5 py-6 min-h-[230px]">
      {/* area title & location dengan tinggi fix */}
      <div className="flex flex-col flex-grow min-h-[100px]">
        <h3 className="font-semibold text-2xl leading-snug">{title}</h3>
        <div className="flex items-center gap-1 mt-2">
          <MapPin className="text-danger500 w-4 h-4" />
          <p className="text-sm text-neutral800">{location}</p>
        </div>
      </div>

      <Button
        onClick={onClick}
        className="bg-primary500 hover:bg-primary700 text-white font-semibold rounded-4xl w-fit flex items-center py-3 px-6 text-base cursor-pointer"
      >
        {buttonText}
        <CircleArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  </div>
);

export default BeachCard;
