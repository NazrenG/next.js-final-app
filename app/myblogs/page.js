"use client";
import React from "react";
import { blogs } from "../../data";
import BlogCard from "@/components/BlogCard";
const MyBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  ">
      <div className="w-full flex items-center justify-center mb-8 bg-[#F6F6F7] p-12 rounded-lg shadow-md">
        <p className="text-xl font-medium">Nezrin Quliyeva</p>
      </div>

      <div className="  text-start w-full mb-4">
        <p className="font-bold text-xl mb-4 items-start">Latest Post</p>
      </div>

      <div className=" w-full   grid grid-cols-3 gap-12 ">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
