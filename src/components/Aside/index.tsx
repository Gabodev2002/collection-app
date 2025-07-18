import { Navigate } from "../Navigate"

export const Aside = ({ isShowMenu }: { isShowMenu:boolean }) => {
    return(
        <aside className={`
                                        flex flex-col absolute md:hidden bg-white z-10 top-25 h-screen w-[80%] -left-4
                                        transform transition-transform duration-500 ease-in-out
                                        ${isShowMenu ? 'translate-x-0' : '-translate-x-full'}
                                    `}>
        
                            <ul className='pl-10 pt-5 flex flex-col gap-5 text-[#425e57] text-[18px] list-container'>
        
                                <Navigate text="Home" path="/"/>
        
                                <Navigate text="Collections" path="/collections" />
        
                                <Navigate text="Random Photos" path="/random-photos"/>
        
                                <Navigate text="Others" path="/others"/>
        
                            </ul>
        
                        </aside>
    )
}