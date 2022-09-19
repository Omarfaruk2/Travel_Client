import React from 'react'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import Loading from '../Share/Loading'

const Login = () => {

    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const { register, formState: { errors }, handleSubmit } = useForm()

    const [signInWithGoogle, guser, gloading,] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)

    const handleGoogle = () => {
        signInWithGoogle()
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data?.email, data?.password)
        console.log(data)
    }


    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }
    if (loading || gloading) {
        return <Loading />
    }


    if (user || guser) {
        navigate(from, { replace: true })
    }

    return (

        <div className=' pt-20 h-[100vh]'>
            {/* <button onClick={() => signInWithGoogle()}>Sign In</button> */}


            <div className="card w-1/4 mt-20 mx-auto   shadow bg-green-500">
                <div className="card-body w-full mx-auto ">

                    <form onSubmit={handleSubmit(onSubmit)}>


                        {/* Email */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Type Your Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email" placeholder="Type Full Name" className="input  input-bordered w-full " />
                            {errors.email?.type === 'required' && "Email is required"}
                        </div>

                        {/* Pawwword */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Type Your Password</span>
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="password" placeholder="Type Full Name" className="input  input-bordered w-full" />
                            {errors.password?.type === 'required' && "Password is required"}
                        </div>

                        {/* <input type="submit" /> */}
                        <button className='btn w-full btn-success mt-5 text-white' type="submit">Login</button>

                    </form>
                    <button onClick={() => handleGoogle()} className='btn w-full btn-error mt-5 text-white' type="submit">Google</button>
                    <Link to="/registation">Register</Link>
                </div>
            </div>




        </div>
    )
}

export default Login




// apiKey: "AIzaSyCfkUgKMV7P7l6a48eLXcJoZwzDwczpDmY",
// authDomain: "travel-cf724.firebaseapp.com",
// projectId: "travel-cf724",
// storageBucket: "travel-cf724.appspot.com",
// messagingSenderId: "506788640395",
// appId: "1:506788640395:web:24c4319a2a272ea0c2068e"
