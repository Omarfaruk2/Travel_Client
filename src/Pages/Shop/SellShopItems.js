import React, { useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../../Share/Loading'

const SellShopItems = () => {
    const navigate = useNavigate()
    const [user, loading,] = useAuthState(auth)

    const valueRaf = useRef("")
    const [itemPrice, setItemPrice] = useState('')


    const param = useParams()
    const { id } = param
    const { register, formState: { errors }, handleSubmit } = useForm()

    const { isLoading, error, data, refetch } = useQuery(['signleITem'], () =>
        fetch(`https://infinite-island-88247.herokuapp.com/shop/${id}`).then(res =>
            res.json()
        )
    )


    if (isLoading || loading) {
        return <Loading />
    }


    const item = data[0] || {}

    const { name, img, price, des } = item || {}

    refetch()

    const onSubmit = (data) => {
        const email = user?.email
        const itemCount = valueRaf.current?.value
        const name = item.name
        const img = item.img
        const itemPrice = data?.itemPrice

        const shopitem = { email, itemCount, name, img, itemPrice }


        const url = "https://infinite-island-88247.herokuapp.com/order"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(shopitem)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                data = {}
                navigate('/dashboard/product')
                refetch()
            })
    }


    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1541574823565-f1d660886187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmFsJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">

                </div>
            </div>


            <div className='grid grid-cols-2 w-5/6 mx-auto mt-10 mb-20'>

                <div className='mx-auto'>
                    <img className='w-full' src={img} alt="item" />
                </div>

                <div>
                    <div>
                        <p className='font-bold text-4xl '>{name}</p>
                        <p className='font-bold text-2xl mt-5'>Per Unit Price: <span className=' text-red-600'>  {price}</span></p>
                        <p className='text-xl mt-5'>{des}</p>


                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                ref={valueRaf}
                                onChange={() => setItemPrice(valueRaf.current?.value * price)}
                                defaultValue={1} placeholder="Count" type="number" className="input input-bordered input-primary w-1/4 mx-4  my-2" />


                            <input placeholder="" type="number"
                                readOnly
                                value={itemPrice}
                                {...register("itemPrice", { required: true })} className="input input-bordered input-primary w-1/4 mx-4  my-2" />

                            <input className='btn btn-error font-bold' type="submit" />

                        </form>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default SellShopItems