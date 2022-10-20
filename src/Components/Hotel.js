import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Share/Loading'
import SingleHotel from './SingleHotel'

const Hotel = () => {

    // search option-----------------------
    const [filter, setFillter] = useState("")

    const searchText = (event) => {
        setFillter(event.target.value)
    }
    // search option-----------------------


    const { isLoading, error, data, refetch } = useQuery(['hotel'], () =>
        fetch("https://infinite-island-88247.herokuapp.com/hotel").then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }


    let dataSearch = data.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })





    refetch()
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

                    {/* Search option  start--------------------*/}
                    <p className='font-bold text-xl my-5 text-center'>Search Your Best Hotel</p>

                    <p className='text-center'>
                        <input
                            value={filter}
                            onChange={searchText.bind(this)}
                            type="text" placeholder="Type here" className="input text-xl input-bordered input-primary w-1/5 mx-auto" />
                    </p>

                    {/* Search option  end------------------*/}


                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-3/4 mx-auto gap-3 '>

                        {
                            dataSearch?.map(hotel => <SingleHotel
                                key={hotel?._id}
                                hotel={hotel}
                            ></SingleHotel>)
                        }

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Hotel