"use client";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import Button from "@/app/components/Button";
import FileItem from "@/app/components/opportunities/FileItem";
import Contacts from "@/app/components/opportunities/Contacts";
import facebook from "@/public/assets/icons/facebook.svg";
import twitter from "@/public/assets/icons/twitter.svg";
import medium from "@/public/assets/icons/medium.svg";
import linkedin from "@/public/assets/icons/linkedin.svg";
const Page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-[105px]">
        <div className=" rounded-xl w-full h-[200px] overflow-hidden">
          <Image
            src={"/assets/opportunities/cover.webp"}
            width={400}
            height={400}
            className=" w-full"
            alt=""
          />
        </div>
        <div className=" flex flex-row flex-wrap gap-5">
          <div className="flex-[3] flex flex-col gap-5">
            <div className="flex flex-row flex-wrap rounded-lg border-[#5B56EF] border-[1px] py-[30px] h-fit">
              <div className="flex-[3] flex flex-col gap-[7px] px-5 border-r-[1px] border-r-[#454545]">
                <div className="text-[24px] text-[#5B56EF]">
                  Application opens on:
                </div>
                <div className=" pl-5 flex flex-col gap-[7px]">
                  <div className="text-[32px]">
                    20/08/2024 18:00 to 29/08/2024 06:00
                  </div>
                  <div className="text-[16px] opacity-40">
                    GMT+10 (AM Vladivostok Standard Time)
                  </div>
                </div>
              </div>
              <div className=" flex-1 flex flex-row align-middle items-center justify-center px-10">
                <Button variant="fill" color="#5B56EF" onClick={() => {}}>
                  Access
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" border-b-[1px]">
                <div className=" border-b-4 border-b-[#5B56EF] w-fit px-5 text-[16px]">
                  Description
                </div>
              </div>
              <div className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est
                neque totam perferendis quos eaque nesciunt assumenda impedit
                non quidem omnis, ad, cupiditate maiores ipsam culpa sequi a
                modi mollitia.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="rounded-lg border-[#5B56EF] border-[1px] py-[30px] flex flex-col gap-5">
              <div className="flex flex-row justify-center">
                <Image
                  src={"/assets/opportunities/cover.webp"}
                  width={100}
                  height={100}
                  className=" w-[263px] h-[263px]  rounded-lg"
                  alt=""
                />
              </div>
              <div className="text-center text-[24px]">
                Support Company Support Company
              </div>
              <div className="text-[18px] opacity-40 text-center">
                Support Company
              </div>
            </div>
            <div className="rounded-lg flex flex-col border-[#5B56EF] border-[1px] py-[30px] px-6 text-center gap-5">
              <div className="text-[24px]">Additional Files</div>
              <hr></hr>
              <div className="flex flex-col gap-[30px]">
                {[1, 2, 3, 4, 5].map((item, index) => {
                  return (
                    <div key={index}>
                      <FileItem filename="Document.pdf" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <Contacts
                items={[
                  { icon: facebook, path: "" },
                  { icon: twitter, path: "" },
                  { icon: linkedin, path: "" },
                  { icon: medium, path: "" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
