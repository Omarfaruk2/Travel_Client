import React from 'react'
import { useNavigate } from 'react-router-dom'


const SingleShop = ({ singleItem }) => {
    const navigate = useNavigate()
    const { name, img, price, reviews, des, tag, catagory, _id } = singleItem || {}

    return (
        <div>
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"

                className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={img} alt="" />
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => navigate(`/shop/${_id}`)} className="btn text-white btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleShop