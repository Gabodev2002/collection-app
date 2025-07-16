export const Header = () => {
    return(
        <header className='w-full relative'>
            <img className='w-full h-[700px] brightness-50' src={'https://images.unsplash.com/photo-1751195119402-66f0e46d008e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzMyODF8MHwxfGFsbHx8fHx8fHx8fDE3NTI2ODQzNTJ8&ixlib=rb-4.1.0&q=85'} alt='People stand under umbrellas on a rainy street.'/>

            <div className='w-full flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-5'>
                <h1 className=' text-[#ffffff] text-6xl font-bold text-shadow-lg'>YOUR FAITHFUL COLLECTION</h1>
                <span className='w-auto h-auto border-transparent border-2 hover:border-white rounded-sm transition ease-in-out duration-300'>
                <button className='border-1 border-white py-2 text-center w-96 text-[#ffffff] text-shadow-2xs font-semibold cursor-pointer rounded-sm hover:border-transparent transition ease-in duration-300'>Find a random photos</button>
                </span>
            </div>

        </header>
    )
}