/*
    This is Register Page
*/
"use client";
import Image from "next/image";
import Button from "../components/Button";
import Step1 from "./step_1";
import Step2 from "./step_2";
import Link from "next/link";
import { useState } from "react";
const Page: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const handleNextStep = () => {
    setStep((step) => step + 1);
  };
  const handleBackStep = () => {
    setStep((step) => step - 1);
  };
  return (
    <div className="page bg-[url('/assets/register/back.png')] w-[100vw] h-[100vh] bg-no-repeat">
      <div className=" w-full flex-wrap flex flex-row justify-end h-full">
        <div className="flex-[3]"></div>
        <div className="flex flex-[2] flex-col justify-between self-center px-[10vw] min-w-[400px]">
          <div className="flex flex-row justify-center">
            <div className="text-left">
              <h2 className="text-[32px]">Welcome to join</h2>
              <h1 className="text-[40px] text-[#5B56EF]">OMIN</h1>
            </div>
          </div>
          <div className="flex w-full flex-col gap-10 pt-5">
            {step === 0 ? <Step1 /> : step === 1 ? <Step2 /> : ""}
          </div>
          <div className="flex flex-row gap-5 justify-center p-5">
            {[0, 1, 2].map((v) => {
              const element =
                v === step ? (
                  <div className="h-[10px] w-[40px] bg-[#5B56EF] rounded-full"></div>
                ) : (
                  <div className="h-[10px] w-[10px] bg-[#D9D9D9] rounded-full"></div>
                );
              return <>{element}</>;
            })}
          </div>
          <div className="pt-5 flex flex-row justify-between gap-5">
            {step !== 0 && (
              <Button
                variant="outline"
                color="#5B56EF"
                onClick={handleBackStep}
              >
                <div className="flex flex-row gap-5 justify-center">
                  <Image
                    src={"/assets/icons/arrow-small-left.svg"}
                    width={"16"}
                    height={"16"}
                    alt=""
                  />
                  <div>Back</div>
                </div>
              </Button>
            )}
            <Button variant="fill" color="#5B56EF" onClick={handleNextStep}>
              <div className="flex flex-row gap-5 justify-center">
                <div>Next</div>
                <Image
                  src={"/assets/icons/arrow-small-right.svg"}
                  width={"16"}
                  height={"16"}
                  alt=""
                />
              </div>
            </Button>
          </div>
          <div className="pt-5">
            If you already have an account,
            <Link href={"#"} className=" text-[#5B56EF] underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
