"use client"
import Layout from "@/app/components/Layout";
import FavouriteOpportunityCard from "@/app/components/opportunities/favouriteOpportunityCard";
import { useRouter } from "next/navigation";
const Page: React.FC = () => {
    const now = Date.now().toLocaleString();
    const navigator = useRouter();
  return (
    <Layout>
      <div className="max-h-[400px] flex flex-row mt-5 flex-wrap gap-5 pt-5 overflow-y-auto">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14,1, 1, 1, 1, 1, 1].map((item, index) => {
          return (
            <>
              <FavouriteOpportunityCard
              onClick={(e)=>{
                navigator.push("/opportunities/asdfasdf/projects")
              }}
                amount={300}
                name="XXXXXX"
                pic={"/assets/oppportunities/default.png"}
                discription="asdfasdfasdfasdfasdf"
                from={now}
                to={now}
              />
            </>
          );
        })}
      </div>
    </Layout>
  );
};
export default Page;
