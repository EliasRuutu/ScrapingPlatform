"use client";
import Button from "@/app/components/Button";
import FileItem from "@/app/components/opportunities/FileItem";
import ProjectDiv from "@/app/components/projects/ProjectDiv";
import UploadDiv from "@/app/components/projects/UploadDiv";
import UnderlineInput from "@/app/components/UnderlineInput";
import ReactSelect from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { useRef } from "react";
import { ProjecDocument } from "@/models/Project";
const schema = yup
  .object({
    name: yup.string().required(),
    provider: yup.string().required(),
    amount: yup.number().required(),
    from: yup.date().required(),
    to: yup.date().required(),
    opportunity: yup.string().required(),
  })
  .required();
const Page: React.FC = () => {
  const { handleSubmit, control } = useForm<ProjecDocument>();
  const options = [
    { value: "Opportunity1", label: "Opportunity1" },
    { value: "Opportunity2", label: "Opportunity2" },
    { value: "Opportunity3", label: "Opportunity3" },
  ];
  const inputFileRef = useRef(null);
  const fileSelectOpenDialg = () => {
    (inputFileRef.current as unknown as HTMLInputElement).click();
  };
  const onSubmit = (data: ProjecDocument) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        hidden
        ref={inputFileRef}
        onChange={() => {
          console.log("sdf");
        }}
      ></input>
      <div className="flex flex-col gap-5">
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">
              Opportunity:
            </div>
            <div className="flex-[5] ">
              <Controller
                name="opportunity"
                rules={{ required: true }}
                defaultValue={""}
                render={({
                  field: { onChange },
                  fieldState: { error },
                  formState,
                }) => {
                  return (
                    <>
                      <ReactSelect options={options} />
                      <p className=" text-[red]">{error?.message as string}</p>
                    </>
                  );
                }}
              />
            </div>
          </div>
        </ProjectDiv>
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">Title:</div>
            <div className="flex-[5] ">
              <UnderlineInput />
            </div>
          </div>
        </ProjectDiv>
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">Description</div>
            <div className="flex-[5]">
              <UnderlineInput />
            </div>
          </div>
        </ProjectDiv>
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">
              Information:
            </div>
            <div className="flex-[5]">
              <UnderlineInput />
            </div>
          </div>
        </ProjectDiv>
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">Files:</div>
            <div className="flex-[5] flex flex-col gap-5">
              <UploadDiv onClick={fileSelectOpenDialg} />
              <div className="flex flex-col gap-3">
                {[1, 2, 3, 4, 5].map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row justify-between">
                      <FileItem filename="Lorem ipum.pdf" />
                      <Image
                        src={"/assets/icons/delete_1.svg"}
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ProjectDiv>
        <div className="flex flex-row justify-end items-center gap-5">
          <Button
            width="w-[200px]"
            variant="outline"
            onClick={() => {}}
            color="#5B56EF"
          >
            Draft
          </Button>
          <Button
            width="w-[200px]"
            variant="fill"
            onClick={() => {}}
            color="#5B56EF"
          >
            Apply
          </Button>
        </div>
      </div>
    </form>
  );
};
export default Page;
