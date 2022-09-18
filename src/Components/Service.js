import { Icon } from '@iconify/react'
import React from 'react'

const Service = () => {
    return (
        <div className='mt-16'>

            <div>
                <h1 className='text-center text-black font-bold text-3xl'>OUR SERVICES</h1>
                <p className='text-center'>That is why our tours and travel experiences in Riga, <br /> Dubai and the Baltics are rated as EXCELLENT by the most reviewers.</p>
            </div>

            <div className='grid grid-cols-3  mx-auto w-5/6 mt-10'>


                <div className="card mx-2 shadow-xl pt-3">
                    <div className="card-body">
                        <div className='text-center mx-auto'>
                            <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 bg-green-100
                            hover:bg-green-500 hover:text-white
                            rounded-bl-lg text-green-400' icon="fluent-emoji-high-contrast:light-rail" /></p>
                            <p className='text-2xl'>Rail Booking</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="card mx-2 shadow-xl pt-3">
                    <div className="card-body">
                        <div className='text-center mx-auto'>
                            <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 bg-green-100
                            hover:bg-green-500 hover:text-white
                            rounded-bl-lg text-green-400'icon="bxs:hotel" /></p>
                            <p className='text-2xl'>Hotel Booking</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                        </div>
                    </div>
                </div>


                {/* 3 */}
                <div className="card mx-2 shadow-xl pt-3">
                    <div className="card-body">
                        <div className='text-center mx-auto'>
                            <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 bg-green-100
                            hover:bg-green-500 hover:text-white
                            rounded-bl-lg text-green-400'  icon="ic:round-flight" /></p>
                            <p className='text-2xl'>Flight Booking</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                        </div>
                    </div>
                </div>


                {/* 4 */}
                <div className="card mx-2 shadow-xl pt-3">
                    <div className="card-body">
                        <div className='text-center mx-auto'>
                            <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 bg-green-100
                            hover:bg-green-500 hover:text-white
                            rounded-bl-lg text-green-400'   icon="fontisto:ticket-alt" /></p>
                            <p className='text-2xl'>Ticket Booking</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                        </div>
                    </div>
                </div>

                {/* 5 */}
                <div className="card mx-2 shadow-xl pt-3">
                    <div className="card-body">
                        <div className='text-center mx-auto'>
                            <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 bg-green-100
                            hover:bg-green-500 hover:text-white
                            rounded-bl-lg text-green-400'   icon="bxs:ship" /></p>
                            <p className='text-2xl'>Ship Booking</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                        </div>
                    </div>
                </div>

                {/* 6 */}
                <div className="card mx-2 shadow-xl pt-3">
                    <div className="card-body">
                        <div className='text-center mx-auto'>
                            <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 bg-green-100
                            hover:bg-green-500 hover:text-white
                            rounded-bl-lg text-green-400'   icon="fluent:building-home-24-filled" /></p>
                            <p className='text-2xl'>Amazing Tour</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                        </div>
                    </div>
                </div>




            </div>


        </div>
    )
}

export default Service