import React from 'react'
import { useQuery } from 'react-query'
import UseBolg from '../Hooks/UseBolg'
import SingleArticsal from './SingleArticsal'

const Articles = () => {


    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('http://localhost:5000/blog').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading</p>
    }

    return (
        <div className='my-5'>
            <div>
                <p className='text-4xl text-center text-black font-bold'>Articles & Tips</p>

                <div className='grid grid-cols-3 w-11/12 mx-auto'>
                    {
                        data?.map(art => <SingleArticsal
                            art={art}
                            key={art._id}
                        ></SingleArticsal>)
                    }
                </div>

            </div>

        </div>
    )
}

export default Articles