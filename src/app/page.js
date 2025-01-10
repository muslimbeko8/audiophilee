import Category from "@/components/Category";
import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import Photos from "@/components/Photos";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Category />
      <Photos />
    </div>
  );
};

export default HomePage;
