export const Header = () => {

    return(
        <header className='w-full relative'>
            <img  className='w-full h-[700px] md:h-[800px] brightness-50' src='/faithfull1.webp' alt='People stand under umbrellas on a rainy street.'/>

            <div className='w-full flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-5'>
                <h1 className=' text-[#ffffff] text-center text-3xl lg:text-5xl font-bold text-shadow-lg'>YOUR FAITHFUL COLLECTION</h1>
                <span className='w-auto h-auto border-transparent border-2 hover:border-white rounded-sm transition ease-in-out duration-300'>
                <button className='border-1 border-white py-2 text-center w-96 text-[#ffffff] text-shadow-2xs font-semibold cursor-pointer rounded-sm hover:border-transparent transition ease-in duration-300'>Find a random photos</button>
                </span>
            </div>

        </header>
    )
}