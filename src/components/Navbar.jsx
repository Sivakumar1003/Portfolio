import { useContext } from 'react'
import { themeContext } from '../App'

function Navbar() {
    const { data } = useContext(themeContext);

    return (
        <div className={`text-[#c5c5c5] bg-gradient-to-r from-[#222423] via-[#343634] to-[#333333] p-2 md:p-5 fixed md:flex md:justify-between w-full`}>
            <div className={`text-[#fbfbfb] font-bold text-base md:text-lg lg:text-2xl text-center p-2 md:py-0 lg:px-10 lg:p-2`}>{data.name || "Name"}</div>

            <section className='flex gap-1 md:gap-3 flex-wrap lg:px-8 lg:p-2 justify-center'>
                <div className={`hover:text-[#fbfbfb] hover:shadow-2xl font-bold text-sm md:text-base lg:text-xl px-1 md:px-0 lg:px-4`}>Home</div>
                <div className={`hover:text-[#fbfbfb] hover:shadow-2xl font-bold text-sm md:text-base lg:text-xl px-1 md:px-0 lg:px-4`}>About</div>
                <div className={`hover:text-[#fbfbfb] hover:shadow-2xl font-bold text-sm md:text-base lg:text-xl px-1 md:px-0 lg:px-4`}>Experience</div>
                <div className={`hover:text-[#fbfbfb] hover:shadow-2xl font-bold text-sm md:text-base lg:text-xl px-1 md:px-0 lg:px-4`}>Projects</div>
                <div className={`hover:text-[#fbfbfb] hover:shadow-2xl font-bold text-sm md:text-base lg:text-xl px-1 md:px-0 lg:px-4`}>Contact</div>
            </section>
        </div>
    )
}

export default Navbar