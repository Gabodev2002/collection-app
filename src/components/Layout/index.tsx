import type { ReactNode } from "react"
import { Nav } from "../Nav"


export const Layout = ({children} : { children: ReactNode }) => {
    return(
        <>
            <Nav />
            { children }
        </>
    )
}