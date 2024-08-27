import Image, { StaticImageData } from "next/image";
import BlackHeart from "./assets/black-heart.svg"
import RedHeart from "./assets/red-heart.svg"
interface OpportunityPropsType {
  pic: string | StaticImageData;
  amount: number;
  discription:string;
  name: string;
  from: string;
  to: string;
  isFavoriate: boolean;
  onClick?:(e:React.MouseEvent<HTMLDivElement>) => void
}
const OpportunityCard: React.FC<OpportunityPropsType> = ({
  amount,
  name,
  from = Date.now,
  to,
  isFavoriate,
  pic,
  discription,
  onClick
}) => {
  return <>
  <div className=" rounded-lg flex flex-row flex-wrap justify-between gap-5" onClick={onClick}>
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
            {discription}
        </div>
        <div className=" flex flex-row flex-wrap justify-between gap-3 items-center">
            <div className=" rounded-full px-2 bg-[#E8E8FE] text-[#5B56EF]">
                Open until <span className="text-[16px]">20 : 00, Tomorrow</span>
            </div>
            <Image src={!isFavoriate ? BlackHeart : RedHeart} alt=""/>
        </div>
    </div>
  </div>
  </>;
};
export default OpportunityCard;
