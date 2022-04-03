import './App.css'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'

function App() {
  return (
    <div className='App'>
      <Home />
      <Reviews />
      <Dashboard />
      <Blogs />
      <About />
    </div>
  )
}

export default App
