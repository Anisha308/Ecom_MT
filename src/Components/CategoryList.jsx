import React, { useState } from 'react'
import apiInstance from '../../Api';
import { useEffect } from 'react';
function CategoryList() {
const [category,setCategory]=useState([])
useEffect(() => {
  const fetchCategory = async () => {
    try {
      const response = await apiInstance.get(
        `https://api.escuelajs.co/api/v1/categories`
      );
      console.log(response.data);
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  fetchCategory();
}, []);
  return (
    <>
      {/* component */}
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">Categories</h2>
            <span className="text-xs">All Category List</span>
          </div>
        
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
               
                              <tbody>
                                  {category.map((category, index) => (

                                      <tr key={index}>
                                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                              <div className="flex items-center">
                                                  <div className="flex-shrink-0 w-10 h-10">
                                                      <img
                                                          className="w-full h-full rounded-full"
                                                          src={category.image}
                                                          alt=""
                                                      />
                                                  </div>
                                                  <div className="ml-3">
                                                      <p className="text-gray-900 whitespace-no-wrap">
{category.name}                                                      </p>
                                                  </div>
                                              </div>
               
                                          </td>
                                      </tr>
                                  ))}
              
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryList
