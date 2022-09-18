import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Share/Loading'
import SingleCountry from './SingleCountry'

const Japan = () => {

    const param = useParams()
    const name = param?.name

    console.log(name)

    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch(`http://localhost:5000/country/${name}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }

    console.log(data, "america win ")



    return (
        <div>
            <div>
                <img className='w-full' src="https://t3.ftcdn.net/jpg/00/83/07/54/240_F_83075491_7IeC59yWhdj17b0jgPDX6b7h7mnYqxIo.jpg" alt="" />
            </div>
            <div className=''>
                <p className='text-4xl  text-center my-16 font-bold'>{name.toUpperCase()} TOUR</p>

                <div className='grid grid-cols-3 w-11/12 mx-auto'>
                    {
                        data?.map(single => <SingleCountry
                            single={single}
                            key={single._id}
                        >
                        </SingleCountry>)
                    }
                </div>



            </div>


        </div>
    )
}

export default Japan

