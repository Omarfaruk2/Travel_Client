import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Japan.css"

const SingleCountry = ({ single }) => {
    const navigate = useNavigate()

    const { firstimg, firstPlaceName, name, firstPrice, firstdays, _id } = single || {}

    return (
        <div className="card cus-card card-compact w-11/12 mt-10 mb-5 mx-auto bg-base-100 shadow-xl">
            <figure><img className='image' src={firstimg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title mt-5">{name.toUpperCase()}, {firstPlaceName}</h2>
                <p className='font-bold text-red-500 text-2xl'>Price:$ {firstPrice}</p>
                <div className='flex justify-around'>
                    <div className='flex items-center '>
                        <p>4 Reviews</p>
                        <div className="rating mx-2">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className='font-bold text-xl'>{firstdays} days</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/tour/${name}/${_id}`)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCountry