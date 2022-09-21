import React, { useRef, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import auth from '../firebase.init'
import Loading from '../Share/Loading'
import { format } from 'date-fns'

const SingleBookingHotel = () => {


    const [user, loading,] = useAuthState(auth)
    const navigate = useNavigate()
    const valueRaf = useRef("")
    const [totalpricehotel, setTotalPricehotel] = useState('')

    // date----------------------------------------------------------
    const disabledDays = [
        new Date(2022, 8, 10),
        new Date(2022, 8, 12),
        { from: new Date(2022, 8, 1), to: new Date(2022, 8, 14) }
    ]
    const [date, setDate] = useState(new Date())

    // form---------------------------------------------------------------
    const param = useParams()
    const id = param?.id
    const { register, formState: { errors }, handleSubmit } = useForm()


    const { isLoading, error, data } = useQuery(['singleHotel'], () =>
        fetch(`https://infinite-island-88247.herokuapp.com/hotel/${id}`).then(res =>
            res.json())
    )


    if (isLoading || loading) {
        return <Loading />
    }
    const singlehotelcollction = data[0]
    const { country, hotelImg, hotelBannerImg, price, doc, hotelname } = singlehotelcollction || {}

    const { displayName, email } = user || {}


    const onSubmit = (data) => {
        const hotelImg = singlehotelcollction?.hotelImg
        const hotelname = singlehotelcollction?.hotelname
        const roomNumber = valueRaf.current?.value
        const email = user?.email
        const name = user?.displayName
        const date = data.date
        const phone = data.phone
        const roomPrice = data.roomPrice

        const realdata = {
            hotelname, roomNumber, email, name, date, phone, roomPrice, hotelImg
        }

        const url = "https://infinite-island-88247.herokuapp.com/bookingHotel"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(realdata)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                data = {}
                navigate('/dashboard/hotel')
            })

        console.log(realdata)

    }

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

            {/* form */}

            <div className='grid grid-cols-3 w-4/5 mt-10 mx-auto mb-32 gap-x-5'>
                <div className='col-span-2'>
                    <div>
                        <img src={hotelImg} alt="" />
                    </div>
                    <p className='text-xl my-3 font-bold'>{hotelname}, {country}</p>
                    <p>{doc}</p>
                </div>

                <div className='col-span-1  '>

                    <div className='p-4 border-black border-2 '>

                        <div className='bg-green-400 p-5 text-xl font-bold '>
                            <p className='text-white'>Per Night for one Room ${price}</p>
                        </div>

                        <form className=' sticky top-0' onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Your FUll Name" value={displayName} type="text" {...register("name", { required: true })} className="input input-bordered input-primary w-full mx-auto  my-2" />
                            {errors.name?.type === 'required' && "First name is required"}

                            <input placeholder="Your Phone Number" type="number" {...register("phone", { required: true })} className="input input-bordered input-primary w-full  my-2" />
                            {errors.phone?.type === 'required' && "First name is required"}

                            <input placeholder="Your Email" type="email" value={email} {...register("email", { required: true })} className="input input-bordered input-primary w-full  my-2" />
                            {errors.phone?.type === 'required' && "First name is required"}


                            {/*------------------------------------------ date -------------------------------------------*/}
                            <div className=''>
                                <div className=""></div>
                                <DayPicker
                                    className='mx-auto '
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    // modifiersClassNames
                                    disabled={disabledDays}
                                />
                            </div>

                            <input {...register("date", { required: true })} value={format(date, 'PP')} type="text" placeholder="Type here" className="input input-bordered input-primary w-3/5  my-2" />

                            {/*------------------------------------------room---------------------------- */}

                            <input placeholder="Your Room Count" type="number"
                                ref={valueRaf}
                                onChange={() => setTotalPricehotel(valueRaf.current?.value * price)}
                                defaultValue="1"
                                className="input input-bordered input-primary w-full  my-2" />


                            {/* room price */}
                            <input placeholder="Your Room Count" type="number"
                                readOnly
                                value={totalpricehotel}
                                {...register("roomPrice", { required: true })} className="input input-bordered input-primary w-full  my-2" />




                            <button className='btn btn-primary text-white block' type="submit">Book Now</button>

                        </form>



                    </div>



                </div>
            </div>



        </div>
    )
}

export default SingleBookingHotel