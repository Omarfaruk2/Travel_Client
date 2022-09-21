import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import swal from 'sweetalert'
import auth from '../firebase.init'
import Loading from '../Share/Loading'

const MyCountry = () => {

    const [user, loading,] = useAuthState(auth)
    const [amount, setAmount] = useState(0)
    const email = user?.email

    const { isLoading, error, data, refetch } = useQuery(['countryData'], () =>
        fetch(`https://infinite-island-88247.herokuapp.com/myordercountryFlightbooking?email=${email}`).then(res =>
            res.json()
        )
    )


    useEffect(() => {
        const set1 = new Set(data)
        let kalu = 0
        set1.forEach(element => {
            kalu = parseInt(kalu) + parseInt(element?.personPrice)
            setAmount(kalu) // 👉️ one, two, three, four
        })
    }, [data])


    if (isLoading || loading) {
        return <Loading />
    }
    // refetch()

    console.log(data, 'counry data')


    const handleDelete = (id) => {

        swal({
            title: "Are you  want to remove Booking?",
            text: "Once deleted, you will not be able to recover user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    refetch()
                    swal("Successfullly remove your boking", {
                        icon: "success",
                    })


                    const url = `https://infinite-island-88247.herokuapp.com/countryFlightbooking/${id}`
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

                } else {
                    swal("Failed to remove booking")
                }
            })


    }


    return (
        <div>
            <p className='font-bold text-center text-2xl'>Our Booking Country Number: {data?.length}</p>


            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Your Address</th>
                                <th>Tour Place:</th>
                                <th>Your Phone:</th>
                                <th>Members</th>
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
                                    <th>{order?.address}</th>
                                    <td>{order?.tourPlace}, {order?.tourcountry}</td>
                                    <td>{order?.phone}</td>
                                    <td>{order?.person}</td>
                                    <td>{order?.personPrice}</td>
                                    <td><img width="50px" src={order?.firstimg} alt="" /></td>

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



            <div className='my-10'>
                <hr className='border-slate-900' />

                <div className="card w-1/3 bg-base-100 shadow-2xl mx-auto">
                    <div className="card-body">
                        <p className='font-bold text-2xl '>
                            Your order product price is $<span className='text-red-600'>{amount}</span></p>
                        <button className='btn btn-primary text-white btn-sm'>Pay</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyCountry



// address
// :
// "Raozan"
// date
// :
// "Sep 20, 2022"
// email
// :
// "emon35293@gmail.com"
// firstimg
// :
// "https://img.freepik.com/premium-photo/cherry-blossoms-blooming-spring-spring-background-cherry-blossoms-nature-with-soft-focus_335224-1397.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125"
// name
// :
// "Omar Faruk Emon"
// person
// :
// "12"
// personPrice
// :
// "54000"
// phone
// :
// "345345"
// tourPlace
// :
// "Osaka"
// tourcountry tourPlace
// :
// "JAPAN"
// _id
// :
// "63296064bd1ce7bb8c30dca6"