import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleHotel = ({ hotel }) => {
    const navigate = useNavigate()
    const { country, hotelImg, hotelBannerImg, price, doc, _id, hotelname } = hotel || {}


    return (
        <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card grid grid-cols-2 p-3 bg-base-100 shadow-xl">

            <figure><img src={hotelImg} alt="Movie" /></figure>

            <div className="card-body">
                <h2 className="card-title">{hotelname}</h2>
                <p className='text-xl'><span className=' text-red-400'>${price}</span>  per night + per Room</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/hotel/${_id}`)} className="btn btn-primary text-white">Book Now</button>
                </div>
            </div>

        </div>
    )
}

export default SingleHotel