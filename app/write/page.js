"use client";

import React, { useState, useEffect } from "react";
import TextEditor from "@/components/TextEditor";
import { createClient } from "@/utils/supabase/client";

const WriteBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    category: "category",
    thumbnail: "",
    body: "",
  });

  const [blogBody, setBlogBody] = useState("");

  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({});

  const getCategories = async () => {
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

  const addBlog = async () => {
    if (
      !blog.title ||
      blog.category == "category" ||
      !blog.thumbnail ||
      !blog.body
    ) {
      alert("Please fill all the fields!");
      return;
    }

    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    if (response.ok) {
      setBlog({ title: "", category: "category", thumbnail: "", body: "" });
      setBlogBody("");
      alert("Blog added successfully!");
    }
  };

  const getCurrentUser = async () => {
    const supabase = createClient();
    const myUser = await supabase.auth.getUser();
    setBlog((prevState) => ({ ...prevState, author: myUser.data.user.id }));
    setUser(myUser.data.user);
  };

  useEffect(() => {
    getCategories();
    getCurrentUser();
  }, []);

  useEffect(() => {
    setBlog((prevState) => ({ ...prevState, body: blogBody }));
  }, [blogBody]);
  return (
    <div className="flex flex-col justify-center w-full">
      <p className="font-bold text-5xl text-center mb-10">Write a new blog</p>
      <form className="flex flex-col gap-4 w-[768px]">
        <input
          onChange={(e) =>
            setBlog((prevState) => ({ ...prevState, title: e.target.value }))
          }
          value={blog.title}
          type="text"
          placeholder="Title"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-sm p-6"
        />
        <select
          id="category"
          name="category"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-sm p-6"
          onChange={(e) =>
            setBlog((prevState) => ({ ...prevState, category: e.target.value }))
          }
          defaultValue={blog.category}
        >
          <option value="category" disabled>
            Select category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          value={blog.thumbnail}
          onChange={(e) =>
            setBlog((prevState) => ({
              ...prevState,
              thumbnail: e.target.value,
            }))
          }
          name="thumbnail"
          placeholder="Thumbnail"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-sm p-6"
        />

        <div>
          <TextEditor setBlogBody={setBlogBody} />
        </div>
        <button
          onClick={addBlog}
          type="button"
          className="bg-[#FFD050] text-black rounded-sm p-3 text-base font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WriteBlog;
