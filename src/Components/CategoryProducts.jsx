import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import apiInstance from '../../Api';
import { Link } from 'react-router-dom'; 

function CategoryProducts() {
     const [category, setCategory] = useState([]);
     const { id } = useParams();
useEffect(() => {
  const fetchCategory = async () => {
    try {
      const response = await apiInstance.get(
        `https://api.escuelajs.co/api/v1/categories/${id}/products`
      );
      console.log(response.data);
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  fetchCategory();
}, [id]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="lg:flex lg:-mx-2">
          

          <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
              <p className="text-gray-500 dark:text-gray-300">6 Items</p>
             All Products
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center justify-center w-full max-w-lg mx-auto"
                >
                  <Link to={`/productDetail/${product.id}`} className="block">
                    <img
                      className="object-cover w-full rounded-md h-72 xl:h-80"
                      src={product.images}
                      alt={product.name}
                    />
                  </Link>
                  <p className="text-blue-500 ">₹{product.price}</p>

                  <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                    {product.title}
                  </h4>
                  <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mx-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="mx-1">Add to cart</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryProducts
