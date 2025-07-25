import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Layout } from "../../components/Layout"
import { Wrapper } from "../../components/ui/wrapper"
import type { RandomPhotosData } from "../../utils/randomData"
import { Spinner } from "../../components/ui/Spinner"

export const RandomPhoto = () => {

    const [ randomPhoto, setRandomPhoto ] = useState<RandomPhotosData[]>()
    const [ loading, setLoading ] = useState(false)
    const [ imgLoaded, setImgLoaded ] = useState(false)
    const  id  = useParams()


    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.unsplash.com/photos/${id}/?client_id=Q2RreKXKTluL3jgHrsWvM97jT_iu8kpJmxkY-u8h_T0`)
                if(!res.ok) {
                    throw new Error()
                }
                const data = await res.json()
                setRandomPhoto(data)
            } catch {
                console.error('Error Fetching')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id])

    return(
        <Layout>
            <section className="w-full pt-40 bg-[#ffffff] md:max-w-[820px] lg:max-w-[1350px] m-auto">
                <h1 className="text-center pb-10">RandomPhoto</h1>

                { loading && <Spinner /> }
                
                <Wrapper>
                    {randomPhoto?.map((photo) => (
                        <article className={`${imgLoaded ? 'opacity-100 transition ease-in duration-500' : 'opacity-0'} relative overflow-hidden w-full max-w-[350px] h-60 cursor-pointer img-container rounded-sm`} key={photo.id}>
                            <a href="https://unsplash.com/" >
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