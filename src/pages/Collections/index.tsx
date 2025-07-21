import { Layout } from "../../components/Layout"
import { useState, useEffect } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Spinner } from "../../components/ui/Spinner";
import type { CollectionsData } from "../../utils/data"
import { NavLink } from "react-router";
import { Wrapper } from "../../components/ui/wrapper";

export const Collections = () => {

    const [ collections, setCollections ] = useState<CollectionsData[]>([])
    const [ loading, setLoading ] = useState(false)
    const [ imgLoaded, setImgLoaded ] = useState(false)
    const [ page, setPage ] = useState(1)
    const [ hasMore, setHasMore ] = useState(true)
    
                useEffect(() => {
                    setLoading(true)
                    setImgLoaded(false)
                    const fetchData = async () =>  {
                    try {
                        const res = await fetch(`https://api.unsplash.com/collections?page=${page}&per_page=8&client_id=Q2RreKXKTluL3jgHrsWvM97jT_iu8kpJmxkY-u8h_T0`)
                        if(!res.ok) {
                        throw new Error()
                        }
                        const data = await res.json()
                        if(data && data.length < 8) {
                            setHasMore(false)
                        } else {
                            setHasMore(true)
                        }
                        setCollections(data)
    
                    } catch (err) {
                        console.error('Something went wrong', err)
                    } finally {
                        setLoading(false)
                    }
                    }
                    setTimeout(() => {
                        setLoading(true)
                        fetchData()
                    }, 1000)
                }, [page])

    return(
        <Layout>

            <section className='w-full h-auto bg-[#ffffff] pt-40 md:max-w-[820px] lg:max-w-[1350px] m-auto'> 

                <h1 className="text-center pb-10">Collections</h1>

             { loading && 
                   <Spinner />   
             }

            <Wrapper>
                {collections?.map((collection) => (

                    <article className={`${imgLoaded ? 'opacity-100 transition ease-in duration-500' : 'opacity-0'} relative overflow-hidden w-full max-w-[350px] h-60 cursor-pointer img-container rounded-sm`} key={collection.id}>
                            <NavLink to={`/collections/${collection.id}}`}>
                                <img className={`w-full h-full rounded-sm transition hover:scale-110 duration-500`} src={collection.cover_photo.urls.small} alt="photo" onLoad={() => setImgLoaded(true)}/>
                            </NavLink>
                            <p className="w-36 h-6 text-center absolute bottom-2 left-2 font-light text-white bg-[#ff0000] block py-0.5 rounded-lg text-[12px]">{collection.title}</p>
                        </article>

                ))}
            </Wrapper>

            { !loading && <div className="w-full flex justify-center pb-10">

                <div className="flex items-center justify-center">
                    {page !== 1 && 
                        <button 
                            onClick={() => {
                                setPage(prev => prev - 1)
                                window.scrollTo({top: 0, behavior: 'smooth'})
                        }}>
                               <IoIosArrowBack />
                        </button> 
                    }

                    <p>{page}</p>

                    {hasMore && 
                        <button 
                        onClick={() => {
                            setPage(prev => prev + 1)
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}>
                            <IoIosArrowForward />
                        </button> 
                    }
                </div>
                
            </div>}

        </section>

        </Layout>
    )
}