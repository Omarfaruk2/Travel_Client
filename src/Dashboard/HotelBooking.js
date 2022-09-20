import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../firebase.init'
import Loading from '../Share/Loading'

const HotelBooking = () => {
    const [user, loading,] = useAuthState(auth)

    const { isLoading, error, data, refetch } = useQuery(['bookingHotel'], () =>
        fetch(`http://localhost:5000/mybookiinghotel?email=${user?.email}`).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) {
        return <Loading />
    }

    refetch()

    const handleDelete = (id) => {

        const url = `http://localhost:5000/bookingHotel/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    console.log(data, "Success to delete")
                    refetch()
                }
            })

    }

    // const { date, email, hotelImg, name, phone, roomPrice } = data[0] || {}

    return (
        <div>
            <h2>Hello hotel boking</h2>
            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Hotel Name:</th>
                                    <th>Your Phone:</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Image</th>
                                    <th>Date</th>
                                    <th>Order Cencel</th>
                                    {/* <th>Payment</th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data?.length === 0 && <p className=' text-2xl text-red-500'>You Have No Order yet</p>
                                }
                                {
                                    data?.map((order, index) => <tr
                                        key={index}
                                    >
                                        <th>{index + 1}</th>
                                        <td>{order?.hotelname}</td>
                                        <td>{order?.phone}</td>
                                        <td>{order?.roomNumber}</td>
                                        <td>{order?.roomPrice}</td>

                                        <td><img width="50px" src={order?.hotelImg} alt="" /></td>
                                        <td>{order?.date}</td>
                                        <td><button onClick={() => handleDelete(order._id)} className='btn btn-error'>Cencle</button></td>
                                        {/* <td>
                                            {(order?.totalprice && order?.paid) && <span className='btn btn-disabled'>Cencle</span>}
                                            {(order?.totalprice && !order?.paid) && <button onClick={() => handleDelete(order._id)} className='btn btn-error'>Cencle</button>}
                                        </td> */}

                                        {/* <td>
                                            {(order?.totalprice && !order?.paid) && <Link to={`/dashboard/payment/${order?._id}`}><button className='btn btn-success'>Pay</button></Link>}
                                            {(order?.totalprice && order?.paid) && <span className='text-success'>Already Paid</span>}
                                        </td> */}

                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HotelBooking 