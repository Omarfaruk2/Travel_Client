import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { Route, Routes } from 'react-router-dom'
import Login from './Authentication/Login'
import Restation from './Authentication/Restation'
import Blog from './Components/Blog'
import Details from './Components/Details'
import Home from './Components/Home'
import Hotel from './Components/Hotel'
import Japan from './Components/Japan'
import SingleBookingHotel from './Components/SingleBookingHotel'
import Dashboard from './Dashboard/Dashboard'
import HotelBooking from './Dashboard/HotelBooking'
import MyCountry from './Dashboard/MyCountry'
import Myproducts from './Dashboard/Myproducts'
import Myprofile from './Dashboard/Myprofile'
import Requareautlhe from './Hooks/Requareautlhe'
import SellShopItems from './Pages/Shop/SellShopItems'
import Shop from './Pages/Shop/Shop'
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


        {/* nasted route */}
        <Route path="dashboard" element={<><Dashboard /></>} >
          <Route index element={<Myprofile />}></Route>
          <Route path='hotel' element={< HotelBooking />}></Route >
          <Route path='product' element={< Myproducts />}></Route >
          <Route path='country' element={< MyCountry />}></Route >
        </Route>


        <Route path='/shop' element={
          <Requareautlhe>
            <Shop />
          </Requareautlhe>
        } />

        <Route path='/shop/:id' element={
          <Requareautlhe>
            <SellShopItems />
          </Requareautlhe>
        } />

        <Route path='/hotel/:id' element={
          <Requareautlhe>
            <SingleBookingHotel />
          </Requareautlhe>
        } />
        <Route path='/hotel' element={
          <Requareautlhe>
            <Hotel />
          </Requareautlhe>
        } />
        <Route path='/tour/:name' element={
          <Requareautlhe>
            <Japan />
          </Requareautlhe>

        } />
        <Route path='/tour/:name/:id' element={
          <Requareautlhe>
            <Details />
          </Requareautlhe>
        } />

        <Route path='/registation' element={<Restation />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
