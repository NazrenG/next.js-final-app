"use client";
import React from "react";
import TextEditor from "@/components/TextEditor";
const page = () => {
  const [categories, setCategories] = React.useState([]);
  const handleGetCategories = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  React.useEffect(() => {
    handleGetCategories();
  }, []);
  return (
    <div className="flex flex-col   justify-center w-full  ">
      <p className="font-bold text-5xl text-center mb-10">Write a new blog</p>
      <form className="flex flex-col gap-4 w-[768px] ">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-sm p-6"
        />

        <input
          type="text"
          placeholder="Description"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-sm p-6"
        />

        <select
          id="category"
          name="category"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-sm p-6"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <div>
          <TextEditor />
        </div>
        <button className="bg-[#FFD050] text-black rounded-sm p-3 text-base font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
