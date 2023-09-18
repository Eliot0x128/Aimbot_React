import * as React from 'react'
import '../../css/project.css';

function QuestionSection () {
    return (
        <div className='bg-[#030015] flex py-20 justify-center mt-20 md:px-0 px-2'>
            <div className='flex flex-col items-center w-full md:w-1/3'>
                <p className='mb-5 text-4xl font-bold text-white'>How Does AimBot work?</p>
                <p className='mb-5 text-xl text-white'>AimBot holds tokens in [wallet 1], [wallet 2], [wallet 3] and [wallet 4], it will auto-buy tokens based on different parameters.</p>
                <p className='mb-5 text-xl text-white'>Sells are manually handled (for now) and profit is sent to this wallet.</p>
                <p className='mb-5 text-xl text-white'>Profit is distributed manually to the reward contract, from where investors can claim ETH rewards.</p>
                <p className='mb-5 text-xl text-white'>To calculate your share of rewards, simply do:</p>
                <p className='mb-5 text-xl text-white'>[ETH in reward wallet] * (your token balance / total supply)</p>
                <p className='mb-5 text-xl text-white'>Or check it from the dashboard</p>
                <button className="w-[200px] font-bold ml-7 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] py-2 px-6 rounded-md">
                    Claim Rewards
                </button>
            </div>
        </div>
    );
}

export default QuestionSection;
