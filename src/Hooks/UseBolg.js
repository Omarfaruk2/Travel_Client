import React from 'react'
import { useQuery } from 'react-query'

const UseBolg = () => {

    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('https://travel-server-x9w3.onrender.com/blog').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading</p>
    }



    return [data]
}

export default UseBolg