"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { getAllCategory } from "@/app/redux/categorySlice";
import { setFilteredProducts } from "@/app/redux/productSlice";

const CategoryList = () => {
  const dispatch = useAppDispatch();
  const { categories, isLoading, error } = useAppSelector((state) => state.categorySlice);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
  const handleCategoryFilter = (category: string) => {
    dispatch(setFilteredProducts(category));
  };

  return (
 
        <div className="d-flex align-content-center my-3" >
      {categories.map((category, index) => (
        <button key={index} className="btn btn-color mx-1 text-white" onClick={() => handleCategoryFilter(category)}>{category}</button>
        ))}
        </div>
    
  );
};

export default CategoryList;
