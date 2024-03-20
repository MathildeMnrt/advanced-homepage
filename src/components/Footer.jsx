import React from 'react'
import { links_col_1, links_col_2 } from '../constants/constants'

const Footer = () => {
    return (
        <>
            <section className='w-vh bg-violet-400 py-[96px] px-10'>
                <div className='mx-10 max-w-7xl xl:mx-auto'>
                    <div className='flex flex-col md:flex-row gap-[56px]'>
                        <h2 className='md:w-1/2 text-white'>Always with the legendary customer <span className='text-green'>experience.</span></h2>
                        <div className='md:w-1/2 flex flex-row gap-20 md:justify-center'>
                            <div className='flex flex-col gap-[24px]'>
                                {links_col_1.map((link, index) => (
                                    <p key={index} className='text-white text-left text-[18px]'>{link}</p>
                                ))}
                            </div>
                            <div className='flex flex-col  gap-[24px]'>
                                {links_col_2.map((link, index) => (
                                    <button key={index} className='text-white text-left text-[18px] font-light'>{link}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-[36px] items-center gap-3'>
                        <img src='hufie-logo.svg' alt='logo' />
                        <p className='text-[24px] text-white font-medium'>Hufie</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer