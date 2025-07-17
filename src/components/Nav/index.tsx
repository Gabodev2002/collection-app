import { useEffect, useState } from "react"


export const Nav = () => {

        const [ scrolled, setScrolled ] = useState(false)

    
        useEffect(() => {

            const handeScroll = () => {
                const scrollY = window.scrollY
                if(scrollY > 0) {
                    setScrolled(true)
                } else {
                    setScrolled(false)
                }
            }

            window.addEventListener('scroll', handeScroll) 
            
            return () => window.removeEventListener('scroll', handeScroll)

        }, [])

    return(
        <div className='flex flex-col'>
            <div className={`fixed z-10 w-full bg-[#123026] py-2 overflow-x-hidden`}>
                <p className={`text-center text-[#ffffff] font-semibold text-sm`}>Take off 20% free for your first buy</p>
            </div>
            <nav className={`${scrolled ? 'ease-in top-0 duration-300' : 'top-9 ease-in duration-300'} flex w-full py-8 justify-around px-8 fixed bg-[#ffffff] z-10`}>

            <div className='flex items-center gap-8'>
                <span className='text-3xl text-[#123026] font-extrabold'>LOGO</span>

               <ul className='flex gap-5 text-[#425e57] text-[14px]'>
                    <li className="hover:text-[#ff0000] cursor-pointer">Home</li>
                    <li className="hover:text-[#ff0000] cursor-pointer">Collections</li>
                    <li className="hover:text-[#ff0000] cursor-pointer">Random Photos</li>
                    <li className="hover:text-[#ff0000] cursor-pointer">Others</li>
               </ul>
            </div>

               <ul className='flex gap-5 text-[#425e57] text-[14px] items-center'>
                    <li className="hover:text-[#ff0000] cursor-pointer">Search</li>
                    <li className="hover:text-[#ff0000] cursor-pointer">Contact</li>
                    <li className="hover:text-[#ff0000] cursor-pointer">Settings</li>
               </ul>
            </nav>
        </div>
    )
}