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
      width={650}
      height={340}
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 30,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" name="Дата" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        name="Цена"
        dataKey="price"
        stroke="#0000FF"
        fill="#1249FF"
      />
    </AreaChart>
  );
}
