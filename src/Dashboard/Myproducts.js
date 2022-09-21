import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import auth from '../firebase.init'
import Loading from '../Share/Loading'

const Myproducts = () => {

    const [user, loading,] = useAuthState(auth)

    const email = user?.email

    const [amount, setAmount] = useState(0)

    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        fetch(`http://localhost:5000/myorder?email=${email}`).then(res =>
            res.json()
        )
    )


    useEffect(() => {
        const set1 = new Set(data)
        let kalu = 0
        set1.forEach(element => {
            kalu = parseInt(kalu) + parseInt(element?.itemPrice)
            setAmount(kalu) // 👉️ one, two, three, four
        })
    }, [data])

    if (isLoading || loading) {
        return <Loading />
    }

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

                    const url = `http://localhost:5000/order/${id}`
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
    refetch()
    return (
        <div>
            <p className='text-center text-3xl'>This is products page</p>

            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Item Name:</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Image</th>
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
                                        <td>{order?.name}</td>
                                        <td>{order?.itemCount}</td>
                                        <td>{order?.itemPrice}</td>

                                        <td><img width="50px" src={order?.img} alt="" /></td>
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

                    <div className="card w-96 bg-base-100 shadow-2xl mx-auto">
                        <div className="card-body">
                            <p className='font-bold text-2xl '>Your order product price is :$<span className='text-red-600'>{amount}</span></p>
                            <button className='btn btn-primary text-white btn-sm'>Pay</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Myproducts