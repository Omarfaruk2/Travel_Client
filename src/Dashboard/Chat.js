// import { Icon } from '@iconify/react'
// import React, { useEffect, useState } from 'react'
// import ScrollToBottom from 'react-scroll-to-bottom'

// const Chat = ({ socket, username, room }) => {

//     const [currentMessage, setCurrentMessage] = useState("")
//     const [messageList, setMessageList] = useState([])

//     const sendMessage = async () => {
//         if (currentMessage !== "") {

//             const messageData = {
//                 room: room,
//                 author: username,
//                 message: currentMessage,
//                 time:
//                     new Date(Date.now()).getHours()
//                     + ":" +
//                     new Date(Date.now()).getMinutes()
//             }

//             await socket.emit("send_message", messageData)
//             setMessageList((list) => [...list, messageData])
//             // setCurrentMessage("")
//         }
//     }

//     useEffect(() => {
//         socket.on("receive_message", (data) => {
//             setMessageList((list) => [...list, data])
//         })
//     }, [socket])


//     return (
//         <div>
//             <hr />
//             {/*-------------------------------------------- header------------------------------------- */}
//             <div className='chat-header'>
//                 <p className='font-bold text-center text-2xl'>Live Chat</p>
//             </div>

//             {/*----------------------------------------------- body----------------------------------------------- */}
//             <div className='chat-body'>
//                 <ScrollToBottom>

//                     {messageList?.map((messageContent) => {
//                         return (

//                             <div id={username === messageContent.author ? "YOU" : "other"}>
//                                 {/* message content */}
//                                 <div>
//                                     <h1>{messageContent.message}</h1>

//                                 </div>
//                                 {/* message meta */}
//                                 <div>
//                                     <h1>{messageContent.time}</h1>
//                                     <h1>{messageContent.author}</h1>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </ScrollToBottom>
//             </div>

//             {/*----------------------------------------------- footer ------------------------------------------------------*/}
//             <div className='chat-footer flex items-center justify-center'>

//                 <input
//                     value={currentMessage}
//                     type="text" placeholder="Type here"
//                     onChange={(e) => setCurrentMessage(e.target.value)}
//                     className="input input-bordered input-primary w-1/2 my-5 "
//                     onKeyPress={(event) => {
//                         event.key === "Enter" && sendMessage()
//                     }}
//                 />

//                 <button onClick={() => sendMessage()} className='btn'><Icon className='font-bold text-3xl' icon="emojione-monotone:eject-button" rotate={1} /></button>
//             </div>
//         </div>
//     )
// }

// export default Chat



// import React, { useEffect, useState } from "react"
// import ScrollToBottom from "react-scroll-to-bottom"


// function Chat({ socket, username, room }) {
//     const [currentMessage, setCurrentMessage] = useState("")
//     const [messageList, setMessageList] = useState([])

//     const sendMessage = async () => {
//         if (currentMessage !== "") {
//             const messageData = {
//                 room: room,
//                 author: username,
//                 message: currentMessage,
//                 time:
//                     new Date(Date.now()).getHours() +
//                     ":" +
//                     new Date(Date.now()).getMinutes(),
//             }

//             await socket.emit("send_message", messageData)
//             setMessageList((list) => [...list, messageData])
//             setCurrentMessage("")
//         }
//     }

//     useEffect(() => {
//         socket.on("receive_message", (data) => {
//             setMessageList((list) => [...list, data])
//         })
//     }, [socket])

//     return (
//         <div className="chat-window">
//             <div className="chat-header">
//                 <p>Live Chat</p>
//             </div>
//             <div className="chat-body">
//                 <ScrollToBottom className="message-container">
//                     {messageList.map((messageContent) => {
//                         return (
//                             <div
//                                 className="message"
//                                 id={username === messageContent.author ? "you" : "other"}
//                             >
//                                 <div>
//                                     <div className="message-content">
//                                         <p>{messageContent.message}</p>
//                                     </div>
//                                     <div className="message-meta">
//                                         <p id="time">{messageContent.time}</p>
//                                         <p id="author">{messageContent.author}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </ScrollToBottom>
//             </div>
//             <div className="chat-footer">
//                 <input
//                     type="text"
//                     value={currentMessage}
//                     placeholder="Hey..."
//                     onChange={(event) => {
//                         setCurrentMessage(event.target.value)
//                     }}
//                     onKeyPress={(event) => {
//                         event.key === "Enter" && sendMessage()
//                     }}
//                 />
//                 <button onClick={sendMessage}>&#9658;</button>
//             </div>
//         </div>
//     )
// }

// export default Chat