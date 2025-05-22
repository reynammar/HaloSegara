interface IconCardProps {
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  imgSrc: string;
  imgClass?: string;
  extraClass?: string;
}

const IconCard = ({
  title,
  desc,
  bgColor,
  textColor,
  imgSrc,
  imgClass,
  extraClass,
}: IconCardProps) => (
  <div className={`relative flex flex-col ${bgColor} py-10 px-8 w-[356px] h-[371px] rounded-[50px] ${extraClass}`}>
    <div className="flex flex-col justify-between h-full">
      <h3 className={`font-bold ${textColor} text-[40px]`}>{title}</h3>
      <p className="font-inter text-[18px] leading-8">{desc}</p>
      <img src={imgSrc} alt="" className={`w-40 ${imgClass}`} />
    </div>
  </div>
);

export default IconCard;
