import React, { useEffect, useState } from 'react'
import MyAreaChart from '../MyAreaChart/MyAreaChart'
import MyLineChart from '../MyLineChart/MyLineChart'
import './Dashboard.css'

const Dashboard = () => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    fetch('ChartData.json')
      .then((res) => res.json())
      .then((data) => setChartData(data))
  }, [])

  return (
    <section className='section-dashboard'>
      <MyLineChart chartData={chartData} />
      <MyAreaChart chartData={chartData} />
    </section>
  )
}

export default Dashboard
