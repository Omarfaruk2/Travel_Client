import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Share/Loading'

const SingleBookingHotel = () => {

    const param = useParams()
    const id = param?.id

    const { isLoading, error, data } = useQuery(['singleHotel'], () =>
        fetch(`http://localhost:5000/hotel/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    const singlehotelcollction = data[0]
    const { country, hotelImg, hotelBannerImg, price, doc, _id, hotelname } = singlehotelcollction || {}


    return (

        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${hotelBannerImg})` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBookingHotel