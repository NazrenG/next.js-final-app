"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import { useParams } from "next/navigation";
const UserBlog = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false); 
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:3000/api/users/" + id);
      const data = await res.json();
      setBlogs(data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  if (isLoading) return <p>Yükleniyor...</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full  ">
      {!isLoading && blogs[0]?.authors?.email && (
        <div className="w-full flex items-center justify-center mb-8 bg-[#F6F6F7] dark:bg-gray-700 p-12 rounded-lg shadow-md">
          <p className="text-xl font-medium text-gray-600 dark:text-white">
            {blogs[0].authors.email}
          </p>
        </div>
      )}

      <div className="  text-start w-full mb-4">
        <p className="font-bold text-xl mb-4 items-start">Latest Post</p>
      </div>

      <div className="w-full grid grid-cols-3 gap-12">
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default UserBlog;
