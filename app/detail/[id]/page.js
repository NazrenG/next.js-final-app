"use client";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = React.useState(null);
  const [category, setCategory] = React.useState(null);

  const handleGetBlog = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(data);
      setBlog(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleGetCategories = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/categories/${blog?.category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(data);
      setCategory(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  React.useEffect(() => {
    handleGetBlog();
  }, [id]);

  React.useEffect(() => {
    if (blog?.category) {
      handleGetCategories();
    }
  }, [blog?.category]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-2xl font-semibold  text-black  dark:text-white">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start justify-center w-[1000px] ">
      {" "}
      <div className="p-[4px] mb-2 bg-[#4B6BFB] border rounded-lg border-transparent w-[fit-content]">
        <p className="text-white text-sm font-medium">{category?.name}</p>
      </div>
      <div className=" inset-0 flex flex-col justify-end items-start mb-10  text-center text-black ">
        <h1 className=" text-4xl font-semibold mb-4 text-black dark:text-white">
          {blog.title}
        </h1>
        <div className="flex  gap-6 text-sm  text-black  dark:text-white">
          <span className="font-medium  text-gray-700 dark:text-white">
            {blog.authors.email}
          </span>
          <span className="font-medium  text-gray-700 dark:text-white">
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
      <img
        className="w-full   mb-8  h-96  rounded-lg shadow-md"
        src={blog.thumbnail}
        alt={blog.title}
      />
      <div
        id="headers"
        className=" w-full text-gray-700    dark:text-white"
        dangerouslySetInnerHTML={{ __html: blog?.body }}
      />
    </div>
  );
};

export default BlogDetail;
