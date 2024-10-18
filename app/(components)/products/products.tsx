"use client"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllProducts, setFilteredProducts } from "../../redux/productSlice"
import React, { useEffect } from "react";
import CategoryList from "../categories/Categories";

export default function Products() {
  const { products } = useAppSelector((state) => state.productSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleShowAllProducts = () => {
    dispatch(setFilteredProducts(null));
  };

  return (
    <div className="container text-center my-5 pt-5">
     <div className="d-flex justify-content-between"> <CategoryList />
     <button className="btn btn-warning text-white my-3" onClick={handleShowAllProducts}>All</button></div>
      <div className="row g-4 my-3">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 productCard overflow-hidden">
            <div className="border border-light rounded-2 p-3 shadow" style={{ height: '400px' }}>
              <img
                src={product.image}
                alt={product.title}
                className="w-100 h-75"
              />
              <h5 className="card-title">{product.title.split(" ").slice(0, 2).join(" ")}</h5>
              <p className="card-text">${product.price}</p>
              <p className="card-text">{product.category}</p>
               {product.rating.rate}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
