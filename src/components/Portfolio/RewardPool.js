import React, { useEffect, useState } from 'react';
import '../../css/project.css';
import axios from 'axios';
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

function RewardPool () {
    const [tableContent, setTableContent] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [sellData, setSellData] = useState([]);
/*
    useEffect(() => {
        var content = [];
        // for(let i = 0 ; i < 50; i ++)
        //     content = [...content, (
        //     <tr>
        //         <td>Row {i} Data 1</td>
        //         <td>Row {i} Data 2</td>
        //     </tr>)];
        // setTableContent(content);
        console.log('request----------------');
        const getData = async () => {
            console.log('request-inside----------------');
            const response = await axios.get('https://aimbotapi.onrender.com/api/accounts/audit/portfolio');
            console.log('----------------------------------', response.data.balances);
            
            var tableData1 = [];
            for(let i = 0; i < 50; i ++)
                tableData1[i] = [`${response.data.balances[i].syncedAt}${response.data.balances[i].symbol}`, `$${response.data.balances[i].valueUSD.toFixed(3)}`];
            
            let table = new DataTable('#myTable', {
                // config options...
                retrieve: true,
                paging: true,
                searching: false,
                data: tableData1,
                responsive: true,
            });

            setTableData(tableData1);

            console.log('finished-------------------');
            if(response.data.balances != undefined){
                setSellData(response.data.balances);
            }
        };

        console.log('getdata---------------------------');
        getData();

        console.log('-------------------', sellData);
    }, []);
    */

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
            {/* <div className='flex items-center justify-center'>
            <table id="myTable" class="display">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
            </div> */}
        </div>
    );
}

export default RewardPool;
