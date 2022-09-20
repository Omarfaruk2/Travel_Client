import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../firebase.init'
import Loading from '../Share/Loading'

const MyCountry = () => {


    // http://localhost:5000/myordercountryFlightbooking?email=emon35293@gmail.com

    const [user, loading,] = useAuthState(auth)

    const email = user?.email

    const { isLoading, error, data, refetch } = useQuery(['countryData'], () =>
        fetch(`http://localhost:5000/myordercountryFlightbooking?email=${email}`).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) {
        return <Loading />
    }

    console.log(data, 'counry data')


    return (
        <div>
            <p className='font-bold text-center text-2xl'>Our Booking Country Number: {data.length}</p>
        </div>
    )
}

export default MyCountry