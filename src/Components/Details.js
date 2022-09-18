import { Icon } from '@iconify/react'
import React, { useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Share/Loading'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'


const Details = () => {
    const navigate = useNavigate()
    const valueRaf = useRef("")
    const [totalprice, setTotalPrice] = useState('')

    // console.log()


    const disabledDays = [
        new Date(2022, 9, 10),
        new Date(2022, 9, 12),
        new Date(2022, 9, 20),
        { from: new Date(2022, 9, 18), to: new Date(2022, 9, 29) }
    ]
    const [date, setDate] = useState(new Date())
    const param = useParams()
    const { name, id } = param
    const { register, formState: { errors }, handleSubmit } = useForm()

    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        fetch(`http://localhost:5000/country/${name}/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }

    // refetch()
    const pakage = data[0]
    const { firstimg, firstPrice, firstdays, } = pakage


    const onSubmit = (data) => {
        const person = valueRaf.current?.value

        const address = data?.address
        const date = data?.date
        const email = data?.email
        const name = data?.name
        const personPrice = data?.personPrice
        const phone = data?.phone

        const formData = {
            person, address, date, email, name, personPrice, phone
        }

        console.log(formData)
        navigate("/bokking")
    }

    return (
        <div>
            <div>
                <img className='w-full h-[90vh]' src={firstimg} alt="" />
            </div>

            {/* Shediul */}
            <div className='my-10'>

                <div className='grid grid-cols-5 p-5 rounded border-2 w-11/12 mx-auto my-10 '>

                    <div className='font-bold text-2xl flex gap-x-4 justify-center items-center'>
                        <Icon icon="ic:outline-watch-later" />
                        <p >{firstdays} Days</p>
                    </div>

                    <div className='font-bold text-2xl flex gap-x-4 justify-center items-center'>
                        <Icon icon="icon-park-solid:passport" />
                        <p >Permission</p>
                    </div>

                    <div className='font-bold text-2xl flex gap-x-4 justify-center items-center'>
                        <Icon icon="simple-line-icons:calender" />
                        <p >Jan, Feb, Mar</p>
                    </div>

                    <div className='font-bold text-2xl flex gap-x-4 justify-center items-center'>
                        <Icon icon="fluent:person-available-24-filled" />
                        <p >Availability 50</p>
                    </div>

                    <div className='font-bold text-2xl flex gap-x-2 justify-center items-center'>
                        <Icon icon="ic:sharp-attach-money" />
                        <p >{firstPrice}</p>
                    </div>
                </div>

            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className='grid grid-cols-5 relative'>
                <div className='col-span-3'>
                    {/* day 1  */}
                    <div className='w-11/12 mx-auto'>
                        <p className='font-bold text-xl my-7'>Day 1</p>
                        <p className="text-xl my-10">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.</p>

                        <div className=' mx-auto'>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484.jpg" alt="" />
                        </div>
                    </div>


                    {/* day 2  */}
                    <div className='w-5/6 mx-auto'>
                        <p className='font-bold text-xl my-7'>Day 2</p>
                        <p className="text-xl my-10">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.</p>

                        <div className=' mx-auto w-full'>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy.jpg" alt="" />
                        </div>
                    </div>


                    {/* day 3  */}
                    <div className='w-5/6 mx-auto'>
                        <p className='font-bold text-xl my-7'>Day 3</p>
                        <p className="text-xl my-10">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.</p>

                        <div className=' mx-auto'>
                            <img className='w-full' src="https://img.freepik.com/premium-photo/woman-wearing-japanese-traditional-kimono-yasaka-pagoda-kyoto-japan_252027-40.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125" alt="" />
                        </div>
                    </div>

                    {/* day 4  */}
                    <div className='w-5/6 mx-auto'>
                        <p className='font-bold text-xl my-7'>Day 3</p>
                        <p className="text-xl my-10">Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low
                            <br />
                            Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.
                            <br />
                            See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>

                        <div className=' mx-auto'>
                            <img className='w-full' src="https://img.freepik.com/free-photo/tokyo-skyline-with-rainbow-bridge-tokyo-tower-tokyo-japan_335224-3.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125" alt="" />
                        </div>
                    </div>

                </div>


                {/* Booking  */}

                <div className=' mt-16 col-span-2 bg-slate-200 '>
                    <h2 className='text-4xl font-bold text-center'>Discover {name.toUpperCase()}</h2>
                    <p className='text-3xl font-bold text-center p-3 bg-lime-500'>From ${firstPrice} Per Person</p>
                    <div className='mx-auto mt-10 '>
                        <p className='text-center'>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input placeholder="Your FUll Name" type="text" {...register("name", { required: true })} className="input input-bordered input-primary w-3/5  my-2" />
                                {errors.name?.type === 'required' && "First name is required"}

                                <input placeholder="Your Phone Number" type="number" {...register("phone", { required: true })} className="input input-bordered input-primary w-3/5  my-2" />
                                {errors.phone?.type === 'required' && "First name is required"}

                                <input placeholder="Your Email Address" type="email" {...register("email", { required: true })} className="input input-bordered input-primary w-3/5  my-2" />
                                {errors.email?.type === 'required' && "First name is required"}

                                <input placeholder="Your Address" type="text" {...register("address", { required: true })} className="input input-bordered input-primary w-3/5  my-2" />
                                {errors.address?.type === 'required' && "First name is required"}

                                <div className='grid grid-cols-4'>
                                    <div className="col-span-1"></div>
                                    <DayPicker
                                        className='mx-auto col-span-2'
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        // modifiersClassNames
                                        disabled={disabledDays}
                                    />
                                </div>

                                <input {...register("date", { required: true })} value={format(date, 'PP')} type="text" placeholder="Type here" className="input input-bordered input-primary w-3/5  my-2" />

                                {/*------------------------------------------perspn---------------------------- */}


                                <input

                                    ref={valueRaf}
                                    onChange={() => setTotalPrice(valueRaf.current?.value * firstPrice)}
                                    placeholder="Persone Number" type="number" className="input input-bordered input-primary w-3/5  my-2" />

                                <input
                                    defaultValue="0"
                                    readOnly
                                    value={totalprice}
                                    placeholder="Persone Number" type="number" {...register("personPrice", { required: true })} className="input input-bordered input-primary w-3/5  my-2" />

                                <br />

                                <button className='btn btn-success' type="submit">Book Now</button>
                            </form>
                        </p>
                        <div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Details