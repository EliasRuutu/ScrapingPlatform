"use client";
import OpportunityCard from "@/app/components/opportunities/oportunityCard";
import Input from "@/app/components/Input";
import { useRouter } from "next/navigation";
import Data from "@/db/data.json"
const Page: React.FC = () => {
  const now = Date.now().toLocaleString();
  const navigator = useRouter();
  return (
    <div>
      <div className="w-[300px]">
        <Input image="search.svg" />
      </div>
      <div className="max-h-[600px] flex flex-row mt-5 flex-wrap gap-5 py-5 pl-5 border-l-[#5B56EF] border-l-[5px] overflow-y-auto border-[1px]">
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <OpportunityCard
                onClick={(e) => {                                                                                                                                   
                  navigator.push(`/opportunities/allOpportunities/${index}`);
                }}
                amount={300}
                name={item.title}
                pic={"/assets/opportunities/default.png"}
                description={"sssss"}
                isFavoriate={false}
                from={item.published}
                to={item.updated}
                
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
