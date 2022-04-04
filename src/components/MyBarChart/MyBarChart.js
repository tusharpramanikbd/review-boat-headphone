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
    <div className='chart-container'>
      <h2 className='chart-label'>Investment VS Revenue</h2>
      <ResponsiveContainer width={350} height={250}>
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
