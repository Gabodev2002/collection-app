import { useState, useEffect } from "react"
import type { CollectionsData } from "../../utils/data"


export const Home = () => {

    const [ collections, setCollections ] = useState<CollectionsData[]>([])
    const [ loading, setLoading ] = useState(false)

            useEffect(() => {
                setLoading(true)
                const fetchData = async () =>  {
                try {
                    const res = await fetch(`https://api.unsplash.com/topics?page=1&client_id=Q2RreKXKTluL3jgHrsWvM97jT_iu8kpJmxkY-u8h_T0`)
                    if(!res.ok) {
                    throw new Error()
                    }
                    const data = await res.json()
                    setCollections(data.slice(0,4))

                } catch (err) {
                    console.error('Something went wrong', err)
                } finally {
                    setLoading(false)
                }
                }
                fetchData()
            }, [])

    return(
        <main className='w-full h-auto bg-[#ffffff] pt-10 '> 
            { !loading && <h1 className='text-center text-[40px] text-[#123026] font-[400] pt-10 pb-20'>These are our collections</h1>}
            { loading && <h1 className='text-center text-[40px] text-[#123026] font-[400] pt-10 pb-20'>Loading...</h1>}
            <div className='px-4 grid grid-cols-1 md:grid-cols-2 md:max-w-[820px] lg:max-w-[1350px] lg:grid-cols-4 justify-items-center gap-5 md:px-8 mb-20  m-auto'>
                {collections?.map((collection) => (
                  <article className='relative overflow-hidden w-full max-w-[350px] h-64 cursor-pointer img-container rounded-sm' key={collection.id}>
                      <img className='w-full h-full rounded-sm transition hover:scale-110 duration-500 ' src={collection.cover_photo.urls.small} alt="photo" />
                      <p className="w-36 h-6 text-center absolute bottom-2 left-2 font-light text-white bg-[#ff0000] block py-0.5 rounded-lg text-[12px]">{collection.title}</p>
                  </article>
                ))}
            </div>
        </main>
    )
}