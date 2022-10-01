import React, { useEffect, useState } from 'react'

const useToken = ({ user }) => {

    const [token, setToken] = useState("")

    useEffect(() => {

        const email = user?.email
        const currentUSer = { email: email }

        if (email) {

            const url = `http://localhost:5000/updateuser/${email}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUSer)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId);
                    console.log(result)
                })







        }


    }, [user])


    return [token]
}

export default useToken