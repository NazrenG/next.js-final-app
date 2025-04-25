import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const BlogCard = ({ blog }) => {
  const [category, setCategory] = React.useState(null);
  const handleGetCategories = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/categories/${blog.category}`,
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
    handleGetCategories();
  }, [blog.category]);
  return (
    <div
      key={blog.id}
      className="flex flex-col  gap-4 p-4 border rounded-xl shadow-md"
    >
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-[6px]"
      />
      {category ? (
        <div className="p-3 bg-[#4B6BFB0D] border rounded-lg border-transparent w-[fit-content]">
          <p className="text-[#4B6BFB] text-sm font-medium">{category.name}</p>
        </div>
      ) : (
        <div className="p-3 bg-[#4B6BFB0D] border rounded-lg border-transparent w-[fit-content]">
          <p className="text-[#4B6BFB] text-sm font-medium">Loading...</p>
        </div>
      )}

      <Link href={"/detail/" + blog.id} className="text-base font-semibold">
        {blog.title}
      </Link>

      <div className="flex items-center gap-2 ">
        <img
          src="https://img.favpng.com/17/1/20/user-interface-design-computer-icons-default-png-favpng-A0tt8aVzdqP30RjwFGhjNABpm.jpg"

          alt="user"
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div className="flex flex-col justify-center">
          <Link
            href={"/myblogs/" + blog.authors.id}
            className="text-sm font-semibold text-gray-500"
          >
            {blog.authors.email}
          </Link>
          <span className="text-sm font-semibold text-gray-700">
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
