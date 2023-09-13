import React from 'react';
import '../../css/project.css';
import { FaTelegram, FaTwitter } from 'react-icons/fa';

function JoinCommunity() {
  return (
    <div className="bg-[#030015] py-20">
      <p className="text-4xl font-bold text-white">Join the community</p>
      <div className='flex flex-col items-center justify-center mt-12 md:flex-row gap-7'>
        <div className='bg-[#26A5E4] w-[400px] h-[120px] rounded-xl social-grid-content-telegram p-4 flex items-center gap-5'>
            <FaTelegram className='w-10 h-10 text-white hover:cursor-pointer'/>
            <p className='text-xl font-medium text-white'>Telegram</p>
        </div>
        <div className='bg-[#26A5E4] w-[400px] h-[120px] rounded-xl social-grid-content-twitter p-4 flex items-center gap-5'>
            <FaTwitter className='w-10 h-10 text-white hover:cursor-pointer'/>
            <p className='text-xl font-medium text-white'>Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;
