"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-start justify-center w-full  ">
      {" "}
      <div className="p-[4px] mb-2 bg-[#4B6BFB] border rounded-lg border-transparent w-[fit-content]">
        <p className="text-white text-sm font-medium">Category</p>
      </div>
      <div className=" inset-0 flex flex-col justify-end items-start mb-10  text-center text-black ">
        <h1 className=" text-4xl font-semibold mb-4">
          The Impact of Technology on the Workplace
        </h1>
        <div className="flex items-center gap-6 text-sm md:text-base text-black">
          <span className="font-medium">Nezrin Quliyeva</span>
          <span className="font-medium">22-09-2023</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mb-8 bg-[url('https://helpx.adobe.com/content/dam/help/en/stock/how-to/open-in-app-purchase/jcr%3Acontent/main-pars/image_1981313668/open-in-app-purchase_1408x792.jpg.img.jpg')] bg-cover bg-center h-64  rounded-lg shadow-md">
        
      </div>
      {/* <div
    className="text-gray-600"
    dangerouslySetInnerHTML={{ __html: blog.body }}
  ></div> */}
    </div>
  );
};

export default page;
