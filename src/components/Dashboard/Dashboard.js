import React from "react";
import "./Dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 130000,
      sell: 74122,
      revenue: 94010,
    },
    {
      month: "Apr",
      investment: 150000,
      sell: 42322,
      revenue: 90000,
    },
    {
      month: "May",
      investment: 180000,
      sell: 72611,
      revenue: 150100,
    },
    {
      month: "Jun",
      investment: 150000,
      sell: 52922,
      revenue: 130000,
    },
    {
      month: "Jul",
      investment: 200000,
      sell: 60100,
      revenue: 208000,
    },
    {
      month: "Aug",
      investment: 250000,
      sell: 67000,
      revenue: 310000,
    },
    {
      month: "Sep",
      investment: 275000,
      sell: 97000,
      revenue: 200000,
    },
    {
      month: "Oct",
      investment: 200000,
      sell: 67000,
      revenue: 100000,
    },
  ];
  return (
    <div className="charts">
      <div className="line">
        <h2 className="text-center">Investment VS Revenue</h2>
        <LineChart className="text-center"
          width={700}
          height={400}
          data={data}
          margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="investment"
            stroke="gray"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="revenue" stroke="#3385D9" />
        </LineChart>
      </div>
      <div className="area">
        <h2 className="text-center">Investment VS Revenue</h2>
        <AreaChart className="text-center"
          width={700}
          height={400}
          data={data}
          margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="lightBlue"
            fill="lightBlue"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3385D9"
            fill="#3385D9"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Dashboard;
