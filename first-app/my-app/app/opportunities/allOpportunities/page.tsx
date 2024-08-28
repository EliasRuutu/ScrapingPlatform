"use client"
import Layout from "@/app/components/Layout";
import OpportunityCard from "@/app/components/opportunities/oportunityCard";
import Input from "@/app/components/Input";
import { useRouter } from "next/navigation";
const Page: React.FC = () => {
  const now = Date.now().toLocaleString();
  const navigator = useRouter();
  return (
    <Layout>
      <div className="mt-10 w-[300px]">
        <Input image="search.svg"/>
      </div>
      <div className="max-h-[600px] flex flex-row mt-5 flex-wrap gap-5 py-5 pl-5 border-l-[#5B56EF] border-l-[5px] overflow-y-auto border-[1px]">
        {[
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 1, 1, 1, 1, 1,
          1,
        ].map((item, index) => {
          return (
            <div key={index}>
              <OpportunityCard
                onClick={(e) => {navigator.push("/opportunities/allOpportunities/asdfasfd")}}
                amount={300}
                name="XXXXXX"
                pic={"/assets/opportunities/default.png"}
                discription="asdfasdfasdfasdfasdf"
                isFavoriate={false}
                from={now}
                to={now}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
export default Page;
