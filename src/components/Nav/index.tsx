import { useEffect, useState } from "react"
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


export const Nav = () => {

        const [ scrolled, setScrolled ] = useState(false)
        const [ isShowMenu, setIsShowMenu ] = useState(false)
        const [ shouldRenderAside, setShouldRenderAside ] = useState(false)

        const handleShowMenu = () => {
        if (!isShowMenu) {
            setShouldRenderAside(true)
            setTimeout(() => {
                setIsShowMenu(true)
            }, 10)
        } else {
            setIsShowMenu(false)
            
            setTimeout(() => {
                setShouldRenderAside(false)
            }, 500) 
        }
    };

        useEffect(() => {
            if(isShowMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'initial'
        }
        }, [isShowMenu])



    
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
            <nav className={`${scrolled ? 'ease-in top-0 duration-300' : 'top-9 ease-in duration-300'} flex w-full py-8 justify-between md:justify-around px-4 md:px-8 fixed bg-[#ffffff] z-10`}>

            <div className='flex items-center gap-5 md:gap-8'>

                { !isShowMenu && <MdOutlineMenu size={35} color="#123026" cursor='pointer' className='block md:hidden' onClick={handleShowMenu} />}

                { isShowMenu && <IoMdClose size={35} color="#123026" cursor='pointer' className='block md:hidden' onClick={handleShowMenu}/> }

                <span className='text-3xl text-[#123026] font-extrabold'>LOGO</span>

                { shouldRenderAside && (<aside className={`
                                flex flex-col absolute md:hidden bg-white z-10 top-25 h-screen w-[80%] -left-4
                                transform transition-transform duration-500 ease-in-out
                                ${isShowMenu ? 'translate-x-0' : '-translate-x-full'}
                            `}>

                    <ul className='pl-10 pt-5 flex flex-col gap-5 text-[#425e57] text-[18px] list-container'>
                        <li>Home</li> 
                        <li>Collections</li>
                        <li>Random Photos</li>
                        <li>Others</li>
                    </ul>

                </aside>)}

               <ul className='hidden md:flex gap-5 text-[#425e57] text-[14px] list-container'>
                    <li>Home</li> 
                    <li>Collections</li>
                    <li>Random Photos</li>
                    <li>Others</li>
               </ul>


            </div>

               <ul className='flex gap-5 text-[#425e57] text-[14px] items-center list-container'>
                    <li>Search</li>
                    <li>Contact</li>
                    <li>Settings</li>
               </ul>
            </nav>
        </div>
    )
}