import { Icon } from '@iconify/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SingleArticsal = ({ art }) => {
    const navigate = useNavigate()

    // console.log(art)

    const { name, shortdescription, tittltimg, _id } = art || {}

    return (
        <div className="card w-11/12 mt-12 mx-auto bg-base-100 shadow-xl">
            <figure><img src={tittltimg} alt="Shoes" /></figure>
            <div className="card-body">
                <p className='font-bold'>DECEMBER 10 , 2016</p>
                <h2 className="font-bold text-xl">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='my-6'>{shortdescription} ......</p>

                <button onClick={() => navigate("/blog")} className="btn btn-link">Read More <Icon className='text-sm mx-3' icon="simple-line-icons:arrow-right" /></button>
            </div>
        </div>
    )
}

export default SingleArticsal