import React from 'react'
import './MyLineChart.css'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const MyLineChart = (props) => {
  const { chartData } = props
  return (
    <div className='chart-container'>
      <h2 className='chart-label'>Monthly Sell Review</h2>
      <ResponsiveContainer width={350} height={250}>
        <LineChart data={chartData}>
          <Line type='monotone' dataKey='sell' stroke='#8884d8' />
          <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
          <XAxis dataKey='month'></XAxis>
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MyLineChart
