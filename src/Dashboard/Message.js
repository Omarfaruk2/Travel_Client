// import React, { useState } from 'react'
// import io from 'socket.io-client'
// import Chat from './Chat'


// const socket = io.connect("http://localhost:3001")
// // const socket = io.connect("https://sleepy-shore-76327.herokuapp.com")

// const Message = () => {

//     const [username, setUserName] = useState("")
//     const [room, setRoom] = useState("")
//     const [showChat, setShowChat] = useState(false)

//     const joinRoom = () => {
//         if (username !== "" && room !== "") {
//             socket.emit("join_room", room)
//             setShowChat(true)
//         }
//     }

//     return (
//         <div>

//             <div className='mx-auto'>

//                 {!showChat ?
//                     (
//                         <div>
//                             <p className='my-5 font-bold text-center text-2xl'>Please Message US.</p>
//                             <p className='text-center font-bold'>Room No: 12</p>
//                             <div className=' text-center'>

//                                 <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Type Your Name" className="input input-bordered input-primary w-1/3 " /> <br />
//                                 <input onChange={(e) => setRoom(e.target.value)} type="number" placeholder="Type Room No" className="input input-bordered input-primary w-1/3 my-2" /> <br />

//                                 <button onClick={() => joinRoom()} className='btn btn-primary'>Join a Room</button>
//                             </div>
//                         </div>
//                     )

//                     : (
//                         <Chat socket={socket} username={username} room={room} />)

//                 }
//             </div>



//         </div>
//     )
// }

// export default Message