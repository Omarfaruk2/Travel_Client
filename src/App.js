import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { useQuery } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import Blog from './Components/Blog'
import Details from './Components/Details'
import Home from './Components/Home'
import Japan from './Components/Japan'
import Navbar from './Share/Navbar'


// ..
AOS.init()

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/tour/:name' element={<Japan />} />
        <Route path='/tour/:name/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
