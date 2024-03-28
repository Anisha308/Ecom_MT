import React, { useState } from 'react'
import { useEffect } from 'react';
import apiInstance from '../../Api';


export default function UserList() {
const [users,setUsers]=useState([])
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await apiInstance.get(
            `https://api.escuelajs.co/api/v1/users`
          );
          console.log(response.data);
          setUsers(response.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchUser();
    }, []);
  return (
    <>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">User Lists</h2>
            <span className="text-xs">All Users list</span>
          </div>
          
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
Role                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                                                                {users.map((user, index) => (
<tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <div className="flex items-center">
                                                  
                                             
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src={user.avatar}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                              {user.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
{user.role}                      </p>
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
