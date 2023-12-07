import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Experiences: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/pmedam/ITMD543_JsonPlaceholder/main/db.json');
      const responseData = response.data;

      console.log(responseData);
  
      if (Array.isArray(responseData)) {
        setData(responseData);
        setDataFetched(true); // Set dataFetched to true after successfully fetching data
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div id='experience' className='w-full h-screen text-center py-40'>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mb-4"
        onClick={fetchData}
      >Get Experiences Details
      </button>

      <table className="min-w-full border border-collapse border-gray-800 mb-4">
        <thead>
          <tr>
            <th className="border p-2">Company Name</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Role Name</th>
            <th className="border p-2">Roles and Responsibilities</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? (
            data.map((entry, index) => (
              <tr key={index}>
                <td className="border p-2">{entry.companyName}</td>
                <td className="border p-2">{entry.startDate}</td>
                <td className="border p-2">{entry.endDate}</td>
                <td className="border p-2">{entry.roleName}</td>
                <td className="border p-2">{entry.rolesAndResponsibilities}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border p-2" colSpan={5}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};



export default Experiences;