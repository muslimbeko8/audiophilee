"use client";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CategoryIcon from "@mui/icons-material/Category";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category-list"
        );
        const data = await response.json();
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };
    fetchCategories();
  }, []);

  const handleNext = () => {
    setVisibleIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };
  const handlePrev = () => {
    setVisibleIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  return (
    <div className="container mx-auto mt-16">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-8 bg-[#DB4444] rounded"></div>
            <h1 className="font-semibold text-base text-[#DB4444]">
              Categories
            </h1>
          </div>
          <h1 className="mt-6 text-black text-4xl font-semibold">
            Browse By Category
          </h1>
        </div>
        <div className="flex gap-2 items-end">
          <button
            className="w-12 h-12 rounded-full bg-gray-200 items-center flex justify-center"
            onClick={handlePrev}
          >
            <ArrowBackIosNewIcon />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-gray-200 items-center flex justify-center"
            onClick={handleNext}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div className="my-14 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6">
        {categories
          .slice(visibleIndex, visibleIndex + 6)
          .map((category, index) => (
            <div
              key={index}
              className="w-40 flex items-center justify-center flex-col h-36 border-[1px] border-black border-opacity-60 break-words capitalize rounded-[4px]"
            >
              <CategoryIcon style={{ fontSize: 56 }} />
              <p className="max-w-32 mx-auto text-center mt-4">{category}</p>
            </div>
          ))}
      </div>
      <hr className="bg-gray-300 h-[2px]" />
    </div>
  );
};

export default Category;
