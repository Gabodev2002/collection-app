import { ImSpinner3 } from "react-icons/im";

export const Spinner = () => {
    return(
        <div className='px-4 flex justify-center md:max-w-[820px] lg:max-w-[1350px] h-auto mt-20  md:px-8 mb-20  m-auto'>
            <ImSpinner3 size={50} color="#123026" className='animate-spin'/>                 
        </div> 
    )
}