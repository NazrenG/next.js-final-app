"use client";
import React from "react";
import BlogCard from "@/components/BlogCard";
import { usePaginationStore } from "@/store/paginationStore";

export default function HomePage() {
  const [blogs, setBlogs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const {
    currentPage,
    searchTerm,
    selectedCategory,
    setCurrentPage,
    blogsPerPage,
  } = usePaginationStore();

  const handleGetBlogs = async () => {
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append("search", searchTerm);
      if (selectedCategory) params.append("category", selectedCategory);
      params.append("page", currentPage);
      params.append("limit", blogsPerPage);

      const res = await fetch(
        `http://localhost:3000/api/blogs?${params.toString()}`,
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
      setBlogs(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    handleGetBlogs();
  }, [searchTerm, selectedCategory, currentPage]);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? blog.categories.name === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {!isLoading && blogs[0]?.authors?.email && (
        <div
          className="w-full flex flex-col mb-8 h-72 p-10 relative rounded-lg shadow-md"
          style={{
            backgroundImage: `url(${blogs[0].thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-end items-start mb-10 px-6 text-center text-white z-10">
            <div className="p-[4px] mb-2 bg-[#4B6BFB] border rounded-lg border-transparent w-[fit-content]">
              <p className="text-white text-sm font-medium">
                {blogs[0].categories.name}
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {blogs[0].title}
            </h1>
            <div className="flex items-center gap-6 text-sm md:text-base text-gray-200">
              <span className="font-medium">{blogs[0].authors.email}</span>
              <div className="font-medium">
                {new Date(blogs[0].created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {isLoading && (
          <p className="text-2xl font-semibold text-center text-black dark:text-white">
            Loading...
          </p>
        )}
        {error && <p>Error: {error}</p>}
        {!isLoading &&
          !error &&
          currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>

      {!isLoading && !error && totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md border transition ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
