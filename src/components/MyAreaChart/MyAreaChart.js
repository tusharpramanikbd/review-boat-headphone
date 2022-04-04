import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './MyAreaChart.css'

const MyAreaChart = (props) => {
  const { chartData } = props
  return (
    <div className='chart-container'>
      <h2 className='chart-label'>Investment VS Revenue</h2>
      <ResponsiveContainer width={350} height={250}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray='5 5' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='investment'
            stackId='1'
            stroke='#8884d8'
            fill='#8884d8'
          />
          <Area
            type='monotone'
            dataKey='revenue'
            stackId='1'
            stroke='#82ca9d'
            fill='#82ca9d'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MyAreaChart
