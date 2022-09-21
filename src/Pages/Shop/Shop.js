import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import Loading from '../../Share/Loading'
import SingleShop from './SingleShop'

const Shop = () => {


    const [user, loading,] = useAuthState(auth)

    const { isLoading, error, data, refetch } = useQuery(['shopItems'], () =>
        fetch("https://infinite-island-88247.herokuapp.com/shop").then(res =>
            res.json()
        )
    )
    if (isLoading || loading) {
        return <Loading />
    }


    refetch()



    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-psd/summer-sale-banner-template-with-3d-summer-element-composition_106244-2078.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125")` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                </div>
            </div>

            <div>
                <h2 className='text-center font-bold text-4xl my-10'>Our Products</h2>

                <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto mb-10'>
                    {
                        data?.map(singleItem => <SingleShop
                            singleItem={singleItem}
                            key={singleItem._id}
                        >
                        </SingleShop>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Shop