import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../firebase.init'
import CustomLink from '../Hooks/CustomLink'
import Loading from './Loading'

const Navbar = () => {

    const [user, loading,] = useAuthState(auth)

    if (loading) {
        return <Loading />
    }


    return (
        <div className='bg-primary py-1'>
            <div className='w-5/6 mx-auto'>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><>Item 1</></li>
                                <li tabIndex={0}>
                                    {/* <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul> */}
                                </li>
                                <li><>Item 3</></li>
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-white normal-case text-xl">Global Tour</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu me-auto menu-horizontal p-0 font-bold text-sm">
                            <CustomLink className="mx-3" to="/">Home</CustomLink>

                            {
                                user &&
                                <>
                                    <CustomLink className="mx-3" to="/hotel">Hotel</CustomLink>
                                    <CustomLink className="mx-3" to="/shop">Related Products</CustomLink>
                                    <CustomLink className="mx-3" to="/dashboard">Dashboard</CustomLink>
                                </>
                            }

                            <CustomLink className="mx-3" to="/blog">Blog</CustomLink>
                            {
                                user ? <div onClick={() => signOut(auth)} className='cursor-pointer text-white'><b >Log out</b></div> :
                                    <CustomLink className="mx-3" to="/login">Login</CustomLink>
                            }
                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar