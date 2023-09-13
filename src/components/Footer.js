import * as React from 'react'

function Footer () {
    return (
      <div className=" bg-[#030015] w-full flex flex-col items-center py-10">
        <img className="h-10 w-28" src="https://uploads-ssl.webflow.com/64b98ae8b7e1288cf71ec395/64c972302785e6db2d2b6bab_D.svg" alt="Your Company"></img>
        <div className='flex flex-col items-center justify-center w-1/2 gap-5 pb-20 mt-2 border-b border-[#1A103A] md:flex-row'>
            <a className='font-bold text-white text-md'>Why AIMBOT</a>
            <a className='font-bold text-white text-md'>Roadmap</a>
            <a className='font-bold text-white text-md'>Features</a>
            <a className='font-bold text-white text-md'>Tokenomics</a>
        </div>
        <p className='my-10 text-white text-md'>© 2023 Aimbot. All rights reserved.</p>
      </div>
    );
}

export default Footer;
