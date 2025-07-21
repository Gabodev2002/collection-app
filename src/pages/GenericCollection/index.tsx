import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout"
import { Wrapper } from "../../components/ui/wrapper"
import { useParams, NavLink } from "react-router"
import type { CollectionsData } from "../../utils/data"


export const GenericCollection = () => {

    const [ loading, setLoading ] = useState(false)
    const [ images, setImages ] = useState<CollectionsData[]>()
    const [ imgLoaded, setImgLoaded ] = useState(false)

    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try{
                const res = await fetch(`https://api.unsplash.com/collections?${id}/photos&client_id=Q2RreKXKTluL3jgHrsWvM97jT_iu8kpJmxkY-u8h_T0`)
                if(!res.ok) {
                    throw new Error()
                }
                const data = await res.json()
                setImages(data)
            } catch {
                console.error('Error fetching')
            } finally {
                setLoading(false)
            }
        }
        fetchData()

    }, [id])


    return(
        <Layout>
            <section className="w-full pt-40 bg-[#ffffff] md:max-w-[820px] lg:max-w-[1350px] m-auto">
                <h1 className="text-center">Generic Colection</h1>
                { <Wrapper>
                        { images?.map((image) => (
                            <article className={`${imgLoaded ? 'opacity-100 transition ease-in duration-500' : 'opacity-0'} relative overflow-hidden w-full max-w-[350px] h-60 cursor-pointer img-container rounded-sm`} key={image.id}>
                                <img className={`w-full h-full rounded-sm transition hover:scale-110 duration-500`} src={image.cover_photo.urls.small} alt="photo" onLoad={() => setImgLoaded(true)}/>
                                <p className="w-36 h-6 text-center absolute bottom-2 left-2 font-light text-white bg-[#ff0000] block py-0.5 rounded-lg text-[12px]">{image.title}</p>
                            </article>   
                        )) }          
                </Wrapper> }
            </section>
        </Layout>
    )
}