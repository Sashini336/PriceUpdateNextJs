import React, { PureComponent, useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function formatXAxisTick() {
  const date = new Date();
  return date.toLocaleDateString();
}

export default function Chart({ data }) {
  return (
    <AreaChart
      width={550}
      height={250}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: -10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" name="Дата" />
      <YAxis dataKey="" />
      <Tooltip />
      <Area
        type="monotone"
        name="Цена"
        dataKey="price"
        stroke="#8884d8"
        fill="#8884d8"
      />
    </AreaChart>
  );
}
