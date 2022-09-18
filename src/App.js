import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { useQuery } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import Login from './Authentication/Login'
import Restation from './Authentication/Restation'
import Blog from './Components/Blog'
import Details from './Components/Details'
import Home from './Components/Home'
import Japan from './Components/Japan'
import Footer from './Share/Footer'
import Navbar from './Share/Navbar'


// ..
AOS.init()

function App() {

  return (
    <div className='bg-white'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registation' element={<Restation />} />
        <Route path='/tour/:name' element={<Japan />} />
        <Route path='/tour/:name/:id' element={<Details />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
