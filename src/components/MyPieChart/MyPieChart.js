import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts'
import './MyPieChart.css'

const MyPieChart = (props) => {
  const { chartData } = props
  return (
    <div className='chart-container'>
      <h2 className='chart-label'>Investment VS Revenue</h2>
      <ResponsiveContainer width={350} height={250}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey='investment'
            cx='50%'
            cy='50%'
            outerRadius={60}
            fill='#8884d8'
          />
          <Pie
            data={chartData}
            dataKey='revenue'
            cx='50%'
            cy='50%'
            innerRadius={70}
            outerRadius={90}
            fill='#82ca9d'
            label
            isAnimationActive={false}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MyPieChart
