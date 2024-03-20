import React from 'react'

const NavBar = () => {
    return (
        <div className='flex flex-row justify-between mt-[24px] mx-10 max-w-7xl xl:mx-auto'>
            <img src="hufie-logo.svg" alt="logo" />
            <div className='flex gap-[28px]'>
                <button className='button-secondary'>Log In</button>
                <button className='button-primary'>Sign Up</button>
            </div>
        </div>

    )
}

export default NavBar