import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Destinations = () => {
    const navigate = useNavigate()
    return (
        <div className=''>

            <div className='my-10'>
                <h1 className='text-4xl text-center text-black font-bold '>Popular Destinations</h1>
                <p className='text-center text-base-500 my-5'>World's best tourist destinations</p>
            </div>
            <div className='grid grid-cols-3 w-11/12 mx-auto gap-x-3'>

                <Link to={"/tour/japan"} >
                    <div className='cus-card'>
                        <img className='image' src="https://img.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan_335224-177.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125" alt="" />
                    </div>

                    <div className=''>
                        <p className='font-bold text-3xl'>Japan</p>
                    </div>
                </Link>

                <Link to={"/tour/america"} >
                    <div className='cus-card'>
                        <img className="image" src="https://images.unsplash.com/photo-1515419682769-91a8a6bdaf68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXRlZCUyMHN0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className=''>
                        <p className='font-bold text-3xl'>America</p>
                    </div>
                </Link>

                <Link to={"/tour/india"} >
                    <div className='cus-card'>
                        <img className="image" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>

                    <p className='font-bold text-3xl'>India</p>
                </Link>

                <Link to={"/tour/koria"} >
                    <div className='cus-card'>
                        <img className="image" src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29yZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>

                    <p className='font-bold text-3xl'>Korea</p>
                </Link>

                <Link to={"/tour/switzerland"} >
                    <div className='cus-card'>
                        <img className="image" src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>

                    <p className='font-bold text-3xl'>Switzerland</p>
                </Link>

                <Link to={"/tour/greenland"} >
                    <div className='cus-card'>
                        <img className="image" src="https://images.unsplash.com/photo-1573996987033-47fd3a4ca35e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVubGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>

                    <p className='font-bold text-3xl'>GreenLand</p>
                </Link>



                {/* <button onClick={() => navigate("/tour/america")} className='btn btn-success'>America</button>
                <button onClick={() => navigate("/tour/koria")} className='btn btn-success'>Koria</button>
                <button onClick={() => navigate("/tour/india")} className='btn btn-success'>India</button>
                 */}
            </div>



        </div>
    )
}

export default Destinations