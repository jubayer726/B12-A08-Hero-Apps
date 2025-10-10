import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RatingsChart = () => {
  const data = [
    { name: "5 star", count: 8300 },
    { name: "4 star", count: 5400 },
    { name: "3 star", count: 2600 },
    { name: "2 star", count: 800 },
    { name: "1 star", count: 500 },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-3">Ratings</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8C00" barSize={25} radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
