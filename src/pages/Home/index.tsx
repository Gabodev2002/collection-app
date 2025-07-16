import { useState, useEffect } from "react"
import type { Collections } from "../../utils/data"


export const Home = () => {

    const [ photos, setPhotos ] = useState<Collections[]>([])
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
                    setPhotos(data.slice(0,4))

                } catch (err) {
                    console.error('Something went wrong', err)
                } finally {
                    setLoading(false)
                }
                }
                fetchData()
            }, [])

    return(
        <main className='w-full h-96 bg-[#ffffff] pt-10 mb-20 '> 
            { !loading && <h1 className='text-center text-[40px] text-[#123026] font-[400] pt-10'>These are our collections</h1>}
            { loading && <h1 className='text-center text-[40px] text-[#123026] font-[400] pt-10'>Loading...</h1>}
            <div className='flex justify-center gap-5'>
                {photos?.map((element) => (
                  <article className='w-80 h-80 cursor-pointer' key={element.id}>
                      <img className='w-full h-full' src={element.cover_photo.urls.small} alt="photo" />
                  </article>
                ))}
            </div>
        </main>
    )
}