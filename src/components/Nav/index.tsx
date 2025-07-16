export const Nav = () => {

        // #ff0000

    return(
        <div className='flex flex-col'>
            <div className='w-full bg-[#123026] py-2'>
                <p className='text-center text-[#ffffff] font-semibold text-sm'>Take off 20% free for your first buy</p>
            </div>
            <nav className='flex w-full py-8 justify-around px-8'>

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