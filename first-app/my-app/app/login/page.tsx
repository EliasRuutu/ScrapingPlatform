"use client"
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";
const Page: React.FC = () => {
  return (
    <div className="page bg-[url('/assets/login/back.png')] w-[100vw] h-[100vh] bg-no-repeat">
      <div className=" w-full flex-wrap flex flex-row justify-end h-full">
        <div className="flex-[3]"></div>
        <div className="flex flex-[2] flex-col justify-between self-center p-[10vw] min-w-[400px]">
          <div className="flex flex-row justify-center">
            <div className="text-left">
              <h2 className="text-[32px]">Welcome Back to</h2>
              <h1 className="text-[40px] text-[#5B56EF]">OMIN</h1>
            </div>
          </div>
          <div className="flex  w-full flex-col gap-5 pt-5">
            <Input
              type="text"
              placeholder="Enter your e-mail"
              image="at1.svg"
            />
            <Input
              type="password"
              placeholder="Enter your password"
              image="user-key.svg"
            />
          </div>
          <div className="pt-5">
            <Link href={"#"} className=" text-[#5B56EF] underline">
              Forget password
            </Link>
          </div>
          <div className="pt-5">
            <Button onClick={()=>{}} variant="fill"  color="#5B56EF">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
// export const getServerSideProps = async () =>{
//     return {
//         props: {},
//     }
// }
export default Page;
