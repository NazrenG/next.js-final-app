"use client";
import React from "react";
import { blogs } from "../../data";
import BlogCard from "@/components/BlogCard";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full  ">
      <div className="w-full flex flex-col items-center justify-center mb-8 bg-[url('https://helpx.adobe.com/content/dam/help/en/stock/how-to/open-in-app-purchase/jcr%3Acontent/main-pars/image_1981313668/open-in-app-purchase_1408x792.jpg.img.jpg')] bg-cover bg-center h-72  p-10 relative rounded-lg shadow-md">
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />

        <div className="absolute inset-0 flex flex-col justify-end items-start mb-10 px-6 text-center text-white z-10">
          <div className="p-[4px] mb-2 bg-[#4B6BFB] border rounded-lg border-transparent w-[fit-content]">
            <p className="text-white text-sm font-medium">Category</p>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The Impact of Technology on the Workplace
          </h1>
          <div className="flex items-center gap-6 text-sm md:text-base text-gray-200">
            <span className="font-medium">Nezrin Quliyeva</span>
            <span className="font-medium">22-09-2023</span>
          </div>
        </div>
      </div>

      <div className=" w-full   grid grid-cols-3 gap-12 ">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
