import { useState } from "react"
import { Layout } from "../../components/Layout"
import { Wrapper } from "../../components/ui/wrapper"
import { Spinner } from "../../components/ui/Spinner"
import type { RandomPhotosData } from "../../utils/randomData"
import { API_KEY } from "../../utils/api_key"

export const RandomPhotos = () => {

    const [ randomPhotos, setRandomPhotos ] = useState<RandomPhotosData[]>()
    const [ imgLoaded, setImgLoaded ] = useState(false)
    const [ loading, setLoading ] = useState(true)

        
            const fetchData = async () => {
                setLoading(true)
                try {
                    const res = await fetch(`https://api.unsplash.com/photos/random?count=8&client_id=${API_KEY}`)
                    if(!res.ok) {
                        throw new Error()
                    } 
                    const data = await res.json()
                    setRandomPhotos(data)
                } catch {
                    console.error('Error fetching')
                } finally {
                    setLoading(false)
                }
            }

    return(
        <Layout>
            <section className="w-full pt-40 bg-[#ffffff] md:max-w-[820px] lg:max-w-[1350px] m-auto">

                <div className="flex justify-center items-center pb-10 gap-5">

                    <h1 className="text-center">Random Photos</h1>


                    <button className="bg-[#123026] text-white py-2 px-4 text-sm rounded-sm cursor-pointer hover:bg-[#153f31]" onClick={() => fetchData()}>
                        Load Photos
                    </button>

                </div>

                    { loading && <h2 className="text-center">Press the button to load photos...</h2>}

                { loading && 
                
                    <Spinner />
                 }

                 

                <Wrapper>
                {randomPhotos?.map((photo) => (

                    <article className={`${imgLoaded ? 'opacity-100 transition ease-in duration-500' : 'opacity-0'} relative overflow-hidden w-full max-w-[350px] h-60 cursor-pointer img-container rounded-sm`} key={photo.id}>
                            <a href={`https://unsplash.com/${photo.id}`} >
                                <img className={`w-full h-full rounded-sm transition hover:scale-110 duration-500`} src={photo.urls.small} alt="photo" onLoad={() => setImgLoaded(true)}/>
                            </a>
                            <p className="w-36 h-6 text-center absolute bottom-2 left-2 font-light text-white bg-[#ff0000] block py-0.5 rounded-lg text-[12px]">{photo.user.first_name}</p>
                        </article>

                ))}
            </Wrapper>

            </section>
        </Layout>
    )
}