import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import { Layout } from "../../components/Layout"
import { Wrapper } from "../../components/ui/wrapper"
import { Spinner } from "../../components/ui/Spinner"
import type { RandomPhotosData } from "../../utils/randomData"

export const RandomPhotos = () => {

    const [ randomPhotos, setRandomPhotos ] = useState<RandomPhotosData[]>()
    const [ imgLoaded, setImgLoaded ] = useState(false)
    const [ loading, setLoading ] = useState(false)

        useEffect(() => {
            setLoading(true)
            const fetchData = async () => {
                try {
                    const res = await fetch(`https://api.unsplash.com/photos/random?count=8&client_id=Q2RreKXKTluL3jgHrsWvM97jT_iu8kpJmxkY-u8h_T0`)
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
            fetchData()

        }, [])

    return(
        <Layout>
            <section className="w-full pt-40 bg-[#ffffff] md:max-w-[820px] lg:max-w-[1350px] m-auto">
                <h1 className="text-center pb-10">Random Photos</h1>

                { loading && 
                    <Spinner />
                 }

                <Wrapper>
                {randomPhotos?.map((photo) => (

                    <article className={`${imgLoaded ? 'opacity-100 transition ease-in duration-500' : 'opacity-0'} relative overflow-hidden w-full max-w-[350px] h-60 cursor-pointer img-container rounded-sm`} key={photo.id}>
                            <NavLink to={`/random-photos/${photo.id}}`}>
                                <img className={`w-full h-full rounded-sm transition hover:scale-110 duration-500`} src={photo.urls.small} alt="photo" onLoad={() => setImgLoaded(true)}/>
                            </NavLink>
                            <p className="w-36 h-6 text-center absolute bottom-2 left-2 font-light text-white bg-[#ff0000] block py-0.5 rounded-lg text-[12px]">{photo.user.first_name}</p>
                        </article>

                ))}
            </Wrapper>

            </section>
        </Layout>
    )
}