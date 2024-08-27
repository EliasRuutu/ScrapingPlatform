"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
interface TabMenuPropsType {
  items: Array<{lable:string, url:string}>;
}
const TabMenu: React.FC<TabMenuPropsType> = ({ items }) => {
    const [active, ] = useState<number>(0);
    const navigator = useRouter();
  return (
    <>
      <div className="flex flex-row flex-wrap border-b-[1px] w-fit border-b-[#D9D9D9]">
        {items &&
          items.map((item, index) => {
            return <div key={index} className={`px-[20px] pb-[9px] text-[16px] cursor-pointer ${index === active ? "text-[#5B56EF] border-b-[3px] border-b-[#5B56EF]" : ""}`} onClick={(e)=>{navigator.push(item.url)}}>{item.lable}</div>;
          })}
      </div>
    </>
  );
};
export default TabMenu;
