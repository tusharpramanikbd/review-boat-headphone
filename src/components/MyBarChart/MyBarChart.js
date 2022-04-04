import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const MyBarChart = (props) => {
  const { chartData } = props
  return (
    <div>
      <h2 className='chart-label'>Investment VS Revenue</h2>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='5 5' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='investment' stackId='a' fill='#8884d8' />
          <Bar dataKey='revenue' stackId='a' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MyBarChart
