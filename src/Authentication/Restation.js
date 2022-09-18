import { signOut } from 'firebase/auth'
import React from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import auth from '../firebase.init'
import Loading from '../Share/Loading'

const Restation = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signInWithGoogle, guser, gloading,] = useSignInWithGoogle(auth)

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth)

    const [updateProfile, updating,] = useUpdateProfile(auth)
    const onSubmit = async (data) => {
        const displayName = data.displayName
        const email = data?.email
        const password = data?.password
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName })
    }




    if (error) {
        return (
            <div>
                <p>Error:{error?.message} </p>
            </div>
        )
    }

    if (loading || gloading || updating) {
        return <Loading />
    }
    if (user || guser) {
        console.log(user, guser, "user")
    }


    return (
        <div className='bg-green-800 pt-20 h-[200vh]'>
            {/* <button onClick={() => signInWithGoogle()}>Sign In</button> */}


            <div className="card w-1/4 mt-20 mx-auto   shadow bg-green-500">
                <div className="card-body w-full mx-auto ">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Type Your Full Name</span>
                            </label>
                            <input
                                {...register("displayName", { required: true })}
                                type="text" placeholder="Type Full Name" className="input  input-bordered w-full" />
                            {errors.name?.type === 'required' && "First name is required"}
                        </div>


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
                        <button className='btn w-full btn-success mt-5 text-white' type="submit">Registation</button>
                    </form>
                    <button onClick={() => signOut(auth)} className='btn btn-secondary'>Sing out</button>
                </div>
            </div>




        </div>
    )
}

export default Restation