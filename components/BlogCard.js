import { useRouter } from "next/navigation";
import React from "react";

const BlogCard = ({ blog }) => {
  const router = useRouter();
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
      onClick={() => {
        router.push(`/detail/${blog.id}`);
      }}
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

      <h2 className="text-base font-semibold">{blog.title}</h2>

      <div className="flex items-center gap-4 mt-4 justify-between">
        <span className="font-medium text-base text-[#97989F]">nvg</span>
        <span className="text-sm text-[#97989F] font-medium">
          {new Date(blog.created_at).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
