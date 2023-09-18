import * as React from 'react'
import { Link } from 'react-router-dom';
import '../../css/project.css'
import '../../css/animations.css';
import { FaTelegram } from 'react-icons/fa';

function Dashboard () {
    return (
        <div className='bg-[#030015] py-32 w-full hero_section'>
          <div className=''>
            <p className='text-[#BCABE6] font-bold md:text-7xl text-5xl mb-4'>The only AI</p>
            <p className='text-[#BCABE6] font-bold md:text-7xl text-5xl mb-16'>you'll ever need</p>
          </div>
          <div className='flex items-center justify-center w-full mb-12'>
              <p className='w-full px-2 text-lg text-center text-white md:px-0 md:w-2/5'>An autonomous sniper that scrapes the blockchain in real-time and picks the best launches to invest in. Trading profits are automatically shared among investors.</p>
          </div>
          <div className='flex flex-col items-center justify-center pr-7 md:flex-row'>
            <Link to="/claimeth" className="ml-7 md:mb-0 mb-3 md:w-[160px] w-full bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-6 rounded-md">
                <div className='flex flex-row items-center justify-center'>Buy Aimbot</div>
            </Link>
            <Link to="/claimeth" className="md:w-[200px] w-full ml-7 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-6 rounded-md">
                <div className='flex flex-row items-center justify-center'>Join Telegram<FaTelegram className='w-5 h-5 ml-2'/></div>
            </Link>
          </div>
        </div>
    );
}

export default Dashboard;
