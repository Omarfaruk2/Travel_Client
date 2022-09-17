import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Share/Loading'

const Details = () => {

    const param = useParams()


    const { name, id } = param

    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        fetch(`http://localhost:5000/country/${name}/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading || !param || data.length > 1) {
        return <Loading />
    }
    refetch()

    const pakage = data[0] || []

    console.log(pakage)

    return (
        <div>
            <h1>df</h1>
        </div>
    )
}

export default Details