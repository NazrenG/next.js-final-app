import { useRouter } from "next/navigation";
import React from "react";

const BlogCard = ({ blog }) => {
  const router = useRouter();
  return (
    <div
      key={blog.id}
      className="flex flex-col  gap-4 p-4 border rounded-xl shadow-md"
      onClick={() => {
        router.push(`/detail/${blog.id}`);
      }}
    >
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-[6px]"
      />
      <div className="p-3 bg-[#4B6BFB0D] border rounded-lg border-transparent w-[fit-content]">
        <p className="text-[#4B6BFB] text-sm font-medium">{blog.category}</p>
      </div>

      <h2 className="text-base font-semibold">{blog.title}</h2>

      {/* <div
    className="text-gray-600"
    dangerouslySetInnerHTML={{ __html: blog.body }}
  ></div> */}

      <div className="flex items-center gap-4 mt-4 justify-between">
        <span className="font-medium text-base text-[#97989F]">
          {blog.author.name}
        </span>
        <span className="text-sm text-[#97989F] font-medium">
          {new Date(blog.timestamp).toISOString().split("T")[0]}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
