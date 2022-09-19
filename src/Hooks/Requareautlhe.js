import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../firebase.init"
import Loading from "../Share/Loading"



import React from 'react'

const Requareautlhe = ({ children }) => {

    const [user, loading,] = useAuthState(auth)

    let location = useLocation()

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
}



export default Requareautlhe