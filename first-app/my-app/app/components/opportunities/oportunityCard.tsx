import Image, { StaticImageData } from "next/image";
import BlackHeart from "./assets/black-heart.svg"
import RedHeart from "./assets/red-heart.svg"
interface OpportunityPropsType {
  pic: string | StaticImageData;
  amount: number;
  description:string;
  name: string;
  from: string;
  to: string;
  info?:Array<any>;
  isFavoriate: boolean;
  onClick?:(e:React.MouseEvent<HTMLDivElement>) => void
}
const OpportunityCard: React.FC<OpportunityPropsType> = ({
  amount,
  name,
  from,
  to,
  isFavoriate,
  pic,
  description,
  onClick
}) => {
  return <>
  <div className=" rounded-lg flex flex-row flex-wrap justify-between gap-5 p-4 border-[1px] transition-all border-[#45454520] hover:shadow-md hover:scale-[1.01]" onClick={onClick}>
    <Image src={pic} width={"100"} height={"100"} alt=""/>
    <div className=" flex flex-col flex-wrap justify-between">
        <div className=" flex flex-row flex-wrap items-center justify-between text-[#5B56EF] text-[16px]">
            <div>
                {name}
            </div>
            <div className="text-right">
                {amount} USD
            </div>
        </div>
        <div className="text-[12px] text-[#777D87]">
            {name}
        </div>
        <div className=" text-[#454545]">
            {description}
        </div>
        <div className=" flex flex-row flex-wrap justify-between gap-3 items-center">
            <div className=" rounded-full px-2 bg-[#E8E8FE] text-[#5B56EF]">
              Published: <span className="text-[16px]">{from}</span>  Updated: <span className="text-[16px]">{to}</span>
            </div>
            <Image src={!isFavoriate ? BlackHeart : RedHeart} className="animate-pulse hover:animate-none cursor-pointer" alt=""/>
        </div>
    </div>
  </div>
  </>;
};
export default OpportunityCard;
