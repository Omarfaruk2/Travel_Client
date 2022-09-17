import React from 'react'
import { useNavigate } from 'react-router-dom'

const Destinations = () => {
    const navigate = useNavigate()
    return (
        <div className=''>

            <div className='my-10'>
                <h1 className='text-4xl text-center text-black font-bold '>Popular Destinations</h1>
                <p className='text-center text-base-500 my-5'>World's best tourist destinations</p>
            </div>
            <div>
                <button onClick={() => navigate("/tour/japan")} className='btn btn-success'>
                    <img src="https://img.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan_335224-177.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125" alt="" />
                    <p>Japan</p>
                </button>
                <button onClick={() => navigate("/tour/america")} className='btn btn-success'>America</button>
                <button onClick={() => navigate("/tour/koria")} className='btn btn-success'>Koria</button>
                <button onClick={() => navigate("/tour/india")} className='btn btn-success'>India</button>
            </div>



        </div>
    )
}

export default Destinations