import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'
import Reviews from './components/Reviews/Reviews'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
