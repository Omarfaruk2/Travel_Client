import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Share/Loading'
import SingleCountry from './SingleCountry'

const Japan = () => {

    const param = useParams()
    const name = param?.name


    // search option-----------------------
    const [filter, setFillter] = useState("")

    const searchText = (event) => {
        setFillter(event.target.value)
    }
    // search option-----------------------

    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        // fetch(`https://infinite-island-88247.herokuapp.com/country/${name}`).then(res =>
        fetch(`http://localhost:5000/country/${name}`).then(res =>
            res.json()

        )
    )
    if (isLoading || !data) {
        return <Loading />
    }

    let dataSearch = data.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })


    refetch()

    return (
        <div>
            <div>
                <img className='w-full' src="https://t3.ftcdn.net/jpg/00/83/07/54/240_F_83075491_7IeC59yWhdj17b0jgPDX6b7h7mnYqxIo.jpg" alt="" />
            </div>
            <div className=''>
                <p className='text-4xl  text-center mt-16 font-bold'>{name.toUpperCase()} TOUR</p>

                {/* Search option  start--------------------*/}
                <p className='font-bold text-xl my-5 text-center'>Search Your Best Destination</p>

                <p className='text-center'>
                    <input
                        value={filter}
                        onChange={searchText.bind(this)}
                        type="text" placeholder="Type here" className="input text-xl input-bordered input-primary w-1/5 mx-auto" />
                </p>

                {/* Search option  end------------------*/}

                <div className='grid grid-cols-3 w-11/12 mx-auto'>
                    {
                        dataSearch?.map(single => <SingleCountry
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

