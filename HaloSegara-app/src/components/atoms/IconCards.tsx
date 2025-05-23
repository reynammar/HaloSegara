interface IconCardProps {
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  textSize: string;
  imgSrc: string;
  imgClass?: string;
  extraClass?: string;
  cardSize: string;
  descSize: string;
}

const IconCard = ({
  title,
  desc,
  bgColor,
  textColor,
  imgSrc,
  imgClass,
  extraClass,
  textSize,
  cardSize,
  descSize
}: IconCardProps) => (
  <div className={`relative flex flex-col ${bgColor} py-10 px-8 ${cardSize} rounded-[50px] ${extraClass}`}>
    <div className="flex flex-col justify-between h-full">
      <h3 className={`font-bold ${textColor} ${textSize}`}>{title}</h3>
      <p className={`font-inter ${descSize}`}>{desc}</p>
      <img src={imgSrc} alt="" className={`${imgClass}`} />
    </div>
  </div>
);

export default IconCard;
