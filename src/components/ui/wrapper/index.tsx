import type { ReactNode } from "react"
export const Wrapper = ({ children}: {children: ReactNode}) => {
    return(
        <div className='px-4 grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 justify-items-center gap-5 md:px-8 mb-20  m-auto'>
            {children}
        </div>
    )
}