import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Share/Loading'
import SingleHotel from './SingleHotel'

const Hotel = () => {


    const { isLoading, error, data } = useQuery(['hotel'], () =>
        fetch("http://localhost:5000/hotel").then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }

    // console.log(data)

    return (
        <div>
            <div>
                {/* -----------------------banner-------------------- */}
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer_146671-18759.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Welcome </h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Book Your Hotel</button>
                        </div>
                    </div>
                </div>


                {/*-------------------------------- hotel Collection----------------------------------- */}

                <div>
                    <h2 className='font-serif text-center text-4xl my-10'>POPULAR HOTELS</h2>

                    <div className='grid grid-cols-2 w-3/4 mx-auto gap-3 '>

                        {
                            data?.map(hotel => <SingleHotel
                                key={hotel?._id}
                                hotel={hotel}
                            ></SingleHotel>)
                        }


                        {/*
                         

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div> */}

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Hotel