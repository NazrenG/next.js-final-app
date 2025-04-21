import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full  ">
      <p className="font-bold text-5xl mb-10">Write a new blog</p>
      <form className="flex flex-col gap-4 w-full ">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 rounded-sm p-2"
        />
        <input
          type="text"
          placeholder="Description"
          className="border border-gray-300 rounded-sm p-2"
        />

        <select
          id="cars"
          name="cars"
          className="border border-gray-300 rounded-sm p-2"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <textarea
          placeholder="Write your blog here..."
          className="border border-gray-300 rounded-sm p-2 h-64"
        ></textarea>
        <button className="bg-[#FFD050] text-black rounded-sm p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
