import { useState } from 'react'
import { Tab } from '@headlessui/react'
// import { Link } from 'react-router-dom'

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export default function Gelary() {

    let [categories] = useState({
        All: [
            {
                img: 'http://themecrazy.net/html/manali/img/gallery/1.jpg',
                img2: 'http://themecrazy.net/html/manali/img/gallery/2.jpg',
                img3: 'http://themecrazy.net/html/manali/img/gallery/3.jpg',
                img4: 'http://themecrazy.net/html/manali/img/gallery/4.jpg',
                img5: 'http://themecrazy.net/html/manali/img/gallery/5.jpg',
                img6: 'http://themecrazy.net/html/manali/img/gallery/6.jpg',
                img7: 'http://themecrazy.net/html/manali/img/gallery/7.jpg',
                img8: 'http://themecrazy.net/html/manali/img/gallery/8.jpg',
            },


        ],
        Japan: [
            {
                img: 'http://themecrazy.net/html/manali/img/gallery/1.jpg',
                img2: 'http://themecrazy.net/html/manali/img/gallery/5.jpg',
                // img3: 'http://themecrazy.net/html/manali/img/gallery/3.jpg',
                // img4: 'http://themecrazy.net/html/manali/img/gallery/4.jpg',
                // img5: 'http://themecrazy.net/html/manali/img/gallery/5.jpg',
                // img6: 'http://themecrazy.net/html/manali/img/gallery/6.jpg',
                // img7: 'http://themecrazy.net/html/manali/img/gallery/7.jpg',
                // img8: 'http://themecrazy.net/html/manali/img/gallery/8.jpg',
            }
        ],
        Dubai: [
            {
                // img: 'http://themecrazy.net/html/manali/img/gallery/1.jpg',
                // img2: 'http://themecrazy.net/html/manali/img/gallery/2.jpg',
                // img3: 'http://themecrazy.net/html/manali/img/gallery/3.jpg',
                // img4: 'http://themecrazy.net/html/manali/img/gallery/4.jpg',
                // img5: 'http://themecrazy.net/html/manali/img/gallery/5.jpg',
                // img6: 'http://themecrazy.net/html/manali/img/gallery/6.jpg',
                img7: 'http://themecrazy.net/html/manali/img/gallery/7.jpg',
                img8: 'http://themecrazy.net/html/manali/img/gallery/8.jpg',
            }
        ],

        America: [
            {
                // img: 'http://themecrazy.net/html/manali/img/gallery/1.jpg',
                // img2: 'http://themecrazy.net/html/manali/img/gallery/2.jpg',
                // img3: 'http://themecrazy.net/html/manali/img/gallery/3.jpg',
                // img4: 'http://themecrazy.net/html/manali/img/gallery/4.jpg',
                img5: 'http://themecrazy.net/html/manali/img/gallery/5.jpg',
                img6: 'http://themecrazy.net/html/manali/img/gallery/6.jpg',
                img7: 'http://themecrazy.net/html/manali/img/gallery/7.jpg',
                img8: 'http://themecrazy.net/html/manali/img/gallery/8.jpg',
            }
        ],
        Koria: [
            {
                img: 'http://themecrazy.net/html/manali/img/gallery/1.jpg',
                img2: 'http://themecrazy.net/html/manali/img/gallery/2.jpg',
                img3: 'http://themecrazy.net/html/manali/img/gallery/3.jpg',
                img4: 'http://themecrazy.net/html/manali/img/gallery/4.jpg',
                // img5: 'http://themecrazy.net/html/manali/img/gallery/5.jpg',
                // img6: 'http://themecrazy.net/html/manali/img/gallery/6.jpg',
                // img7: 'http://themecrazy.net/html/manali/img/gallery/7.jpg',
                // img8: 'http://themecrazy.net/html/manali/img/gallery/8.jpg',
            }
        ],

    })

    return (
        <div className="w-full px-2 py-16 ">
            <h2 className='text-center my-10 font-bold text-4xl'>GALLERY</h2>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 w-1/2 mx-auto">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-black bg-green-400 font-bold'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="relative rounded-md p-3 hover:bg-gray-100"
                                    >

                                        <li className='grid grid-cols-4 gap-1 overflow-hidden'>

                                            {
                                                post?.img && <img data-aos="zoom-in-up" data-aos-easing="linear"
                                                    data-aos-duration="1500" className='hover:opacity-60 ' src={post?.img} alt="" />
                                            }
                                            {
                                                post?.img2 && <img data-aos="zoom-in-up" data-aos-easing="linear"
                                                    data-aos-duration="1500" className='scale-125' src={post?.img2} alt="" />
                                            }
                                            {
                                                post?.img3 && <img data-aos="zoom-in-up" data-aos-easing="linear"
                                                    data-aos-duration="1500" className='' src={post?.img3} alt="" />
                                            }
                                            {
                                                post?.img4 && <img data-aos="zoom-in-up" data-aos-easing="linear"
                                                    data-aos-duration="1500" className='' src={post?.img4} alt="" />}
                                            {post?.img5 && <img data-aos="zoom-in-up" data-aos-easing="linear"
                                                data-aos-duration="1500" className='' src={post?.img5} alt="" />}
                                            {post?.img6 && <img data-aos="zoom-in-up" data-aos-easing="linear"
                                                data-aos-duration="1500" className='' src={post?.img6} alt="" />}
                                            {post?.img7 && <img data-aos="zoom-in-up" data-aos-easing="linear"
                                                data-aos-duration="1500" className='' src={post?.img7} alt="" />}
                                            {post?.img8 && <img data-aos="zoom-in-up" data-aos-easing="linear"
                                                data-aos-duration="1500" className='' src={post?.img8} alt="" />
                                            }

                                        </li>

                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}