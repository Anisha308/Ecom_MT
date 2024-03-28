import React, { useState,useEffect } from 'react'
import apiInstance from '../../Api';
import { useParams } from 'react-router';

export default function ProductDetail() {
  

  const [products, setProducts] = useState([])
    const { id } = useParams();
console.log(id,'id')
useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await apiInstance.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      console.log(response.data)
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  fetchProduct();
}, [id]);


  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={products.images}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <p>
                  
                  {products.category ? products.category.name : "Unknown"}
                </p>
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {products.title}{" "}
              </h1>
              <div className="flex mb-4">
                
                
              </div>
              <p className="leading-relaxed">{products.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
               
              
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                ₹{ products.price}
                </span>
                <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add to Cart
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
