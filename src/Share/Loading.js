import React from 'react'
import { HashLoader } from 'react-spinners'

const Loading = () => {

    return (
        <div className='mt-28 mx-auto flex'>
            <HashLoader className='mx-auto' color="#36d7b7" />
            <HashLoader className='mx-auto' color="#36d7b7" />
            <HashLoader className='mx-auto' color="#36d7b7" />
        </div>
    )
}

export default Loading