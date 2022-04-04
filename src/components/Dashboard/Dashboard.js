import React, { useEffect, useState } from 'react'
import MyAreaChart from '../MyAreaChart/MyAreaChart'
import MyBarChart from '../MyBarChart/MyBarChart'
import MyLineChart from '../MyLineChart/MyLineChart'
import MyPieChart from '../MyPieChart/MyPieChart'
import './Dashboard.css'

const Dashboard = () => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    fetch('ChartData.json')
      .then((res) => res.json())
      .then((data) => setChartData(data))
  }, [])

  return (
    <section className='section-center section-dashboard'>
      <MyLineChart chartData={chartData} />
      <MyAreaChart chartData={chartData} />
      <MyBarChart chartData={chartData} />
      <MyPieChart chartData={chartData} />
    </section>
  )
}

export default Dashboard
