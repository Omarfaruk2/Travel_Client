import React from 'react'
import { useQuery } from 'react-query'
import UseBolg from '../Hooks/UseBolg'

const Blog = () => {

    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('http://localhost:5000/blog').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading</p>
    }

    const tag = "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed."

    const setag = "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it’s really how it works."

    const thirdtag = "Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design."

    const fouttag = "See - through delicate embroidered organza blue lining luxury acetate - mix stretch pleat detailing.Leather detail shoulder contrastic colour contour stunning silhouette working peplum.Statement buttons cover - up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.Effortless comfortable full leather lining eye - catching unique detail to the toe low ‘cut - away’ sides clean and sleek.Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design."



    const { name, foutDes, secoundImg, secoundTittle, shortdescription, thirdDes, thirdImg, tittltimg, _id } = data[0]

    return (

        <div className='my-10 bg-white'>
            <div className='py-20 bg-yellow-50'>
                <p className='text-5xl text-center w-1/2 font-bold mx-auto'>{name}</p>
                <p className='text-center mt-5 font-serif'>December 10 , 2016</p>
            </div>

            <div className='grid grid-cols-4 w-11/12 mx-auto'>

                <div className="full-blog col-span-3">
                    <div className='w-11/12 mx-auto'>

                        <img className=' mx-auto' src={tittltimg} alt="" />
                        <p className='font-xl font-serif my-10'>{tag}</p>

                        <img className=' mx-auto' src={secoundImg} alt="" />
                        <p className='font-xl font-serif my-10'>{tag}</p>

                        <img className=' mx-auto' src={thirdImg} alt="" />

                        <p className='text-4xl my-10 text-center font-semibold mx-auto'>{setag}</p>

                        <p className='font-xl font-serif my-10'>{thirdtag}</p>
                        <p className='font-xl font-serif my-10'>{fouttag}</p>

                        <div className='flex p-5 bg-red-100 gap-5'>
                            <div>
                                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/me-200x200.jpg" alt="" />
                            </div>
                            <div>
                                <p>POSTED BY</p>
                                <p className='text-xl font-bold my-2'>Anna Kornikova</p>
                                <p>Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="fix-blog col-span-1 ">
                    <div>
                        <div className='p-5 bg-base-200 rounded-xl mt-72 fixed top-0'>
                            <p className='font-bold text-xl'>Newsletter</p>
                            <hr />
                            <p>Don't miss a thing! Sign up to receive daily deals</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <button className='w-full bg-red-600 my-5 text-white py-2'>Subscrib</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
// travel
// LCke9L9JVPq1CMcs

export default Blog