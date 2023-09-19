import React, { useEffect, useState } from 'react';
import '../../css/project.css';

function RewardPool () {

    return (
        <div className='bg-[#030015] text-white my-24'>
            <p className='text-6xl text-[#AD99DC] font-semibold'>Reward Pool Live Feed</p>
            <p className='mt-8 text-xl font-medium'>Displaying ETH flowing to the reward pool in real-time.</p>
            <div className='flex flex-col items-center justify-center mt-20 md:flex-row gap-7'>
                <div className='flex flex-col w-[300px]'>
                    <div className='text-3xl font-bold text-center'>Daily</div>
                    <div className='flex flex-col p-4 mt-6 text-left rounded-md metrics_item'>
                        <p className='text-sm font-bold'>GENERATED FROM AI BOT</p>
                        <p className='mt-6 text-xl font-medium'>3.99 ETH</p>
                        <p className='mt-1 text-xl font-medium'>80.33%</p>
                    </div>
                </div>
                <div className='flex flex-col  w-[300px]'>
                    <div className='text-3xl font-bold'>Weekly</div>
                    <div className='flex flex-col p-4 mt-6 text-left rounded-md metrics_item'>
                        <p className='text-sm font-bold'>GENERATED FROM AI BOT</p>
                        <p className='mt-6 text-xl font-medium'>54.01 ETH</p>
                        <p className='mt-1 text-xl font-medium'>73.00%</p>
                    </div>
                </div>
                <div className='flex flex-col  w-[300px]'>
                    <div className='text-3xl font-bold'>Monthly</div>
                    <div className='flex flex-col p-4 mt-6 text-left rounded-md metrics_item'>
                        <p className='text-sm font-bold'>GENERATED FROM AI BOT</p>
                        <p className='mt-6 text-xl font-medium'>170.74 ETH</p>
                        <p className='mt-1 text-xl font-medium'>48.33%</p>
                    </div>
                </div>
                <div className='flex flex-col  w-[300px]'>
                    <div className='text-3xl font-bold'>Since Launch</div>
                    <div className='flex flex-col p-4 mt-6 text-left rounded-md metrics_item'>
                        <p className='text-sm font-bold'>GENERATED FROM AI BOT</p>
                        <p className='mt-6 text-xl font-medium'>205.85 ETH</p>
                        <p className='mt-1 text-xl font-medium'>49.43%</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-20 md:mt-2 md:flex-row gap-7'>
                <div className='flex flex-col w-[300px]'>
                    <div className='flex flex-col p-4 text-left rounded-md metrics_item_down'>
                        <p className='text-sm font-bold'>GENERATED FROM AI BOT</p>
                        <p className='mt-6 text-xl font-medium'>3.99 ETH</p>
                        <p className='mt-1 text-xl font-medium'>80.33%</p>
                    </div>
                    <div className='flex flex-col mt-4 text-center'>
                        <p className='text-3xl font-bold'>4.97 ETH</p>
                        <p className='text-xl'>Generated today</p>
                    </div>
                </div>
                <div className='flex flex-col w-[300px]'>
                    <div className='flex flex-col p-4 text-left rounded-md metrics_item_down'>
                        <p className='text-sm font-bold'>GENERATED FROM AI BOT</p>
                        <p className='mt-6 text-xl font-medium'>3.99 ETH</p>
                        <p className='mt-1 text-xl font-medium'>80.33%</p>
                    </div>
                    <div className='flex flex-col mt-4 text-center'>
                        <p className='text-3xl font-bold'>74.46 ETH</p>
                        <p className='text-xl'>Generated this week</p>
                    </div>
                </div>
                <div className='flex flex-col w-[300px]'>
                    <div className='flex flex-col p-4 text-left rounded-md metrics_item_down'>
                        <p className='text-sm font-bold'>GENERATED FROM AI BOT</p>
                        <p className='mt-6 text-xl font-medium'>353.32 ETH</p>
                        <p className='mt-1 text-xl font-medium'>Generated this month</p>
                    </div>
                    <div className='flex flex-col mt-4 text-center'>
                        <p className='text-3xl font-bold'>4.97 ETH</p>
                        <p className='text-xl'>Generated today</p>
                    </div>
                </div>
                <div className='flex flex-col w-[300px]'>
                    <div className='flex flex-col p-4 text-left rounded-md metrics_item_down'>
                        <p className='text-sm font-bold'>GENERATED FROM AI BOT</p>
                        <p className='mt-6 text-xl font-medium'>3.99 ETH</p>
                        <p className='mt-1 text-xl font-medium'>80.33%</p>
                    </div>
                    <div className='flex flex-col mt-4 text-center'>
                        <p className='text-3xl font-bold'>416.40 ETH</p>
                        <p className='text-xl'>Generated since launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RewardPool;
