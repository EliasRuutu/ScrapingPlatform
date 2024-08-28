"use client";
import Layout from "@/app/components/Layout";
import FileItem from "@/app/components/opportunities/FileItem";
import ProjectDiv from "@/app/components/projects/ProjectDiv";
import UploadDiv from "@/app/components/projects/UploadDiv";
import UnderlineInput from "@/app/components/UnderlineInput";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
interface ProjectAddFormType {
  title: string;
  description: string;
  information: string;
  from: string;
  to: string;
}
const Page: React.FC = () => {
  const { handleSubmit, control } = useForm<ProjectAddFormType>();
  const onSubmit = (data: ProjectAddFormType) => {
    console.log(data);
  };
  return (
    <Layout isShowTabMenu>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="flex flex-col gap-5">
          <ProjectDiv>
            <div className="flex flex-row justify-between">
              <div className="flex-1 text-[24px] text-[#5B56EF]">Title:</div>
              <div className="flex-[5] ">
                <UnderlineInput />
              </div>
            </div>
          </ProjectDiv>
          <ProjectDiv>
            <div className="flex flex-row justify-between">
              <div className="flex-1 text-[24px] text-[#5B56EF]">
                Description
              </div>
              <div className="flex-[5]">
                <UnderlineInput />
              </div>
            </div>
          </ProjectDiv>
          <ProjectDiv>
            <div className="flex flex-row justify-between">
              <div className="flex-1 text-[24px] text-[#5B56EF]">
                Information:
              </div>
              <div className="flex-[5]">
                <UnderlineInput />
              </div>
            </div>
          </ProjectDiv>
          <ProjectDiv>
            <div className="flex flex-row justify-between">
              <div className="flex-1 text-[24px] text-[#5B56EF]">Files:</div>
              <div className="flex-[5] flex flex-col gap-5">
                <UploadDiv />
                <div className="flex flex-col gap-3">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <div key={index} className="flex flex-row justify-between">
                        <FileItem filename="Lorem ipum.pdf" />
                        <Image
                          src={"/assets/icons/delete_1.svg"}
                          width={60}
                          height={60}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ProjectDiv>
        </div>
      </form>
    </Layout>
  );
};
export default Page;
