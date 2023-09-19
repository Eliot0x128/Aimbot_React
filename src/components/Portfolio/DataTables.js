import React, { useEffect, useState } from 'react';
import '../../css/project.css';
import axios from 'axios';
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

import { FaRecycle } from 'react-icons/fa';

function DataTables() {
    const [tableContent, setTableContent] = useState([]);
    const [tableContent1, setTableContent1] = useState([]);
    const [flag, setFlag] = useState(0); 

    useEffect(() => {
        const getData = async () => {
            {/* Current Holdings Table */}
            const response = await axios.get('https://aimbotapi.onrender.com/api/accounts/audit/portfolio');
            const sellData = response.data.balances;

            var tableData = [];
            for(let i = 0 ; i < sellData.length; i ++){
                var temp = new Date(sellData[i].firstBuyTime != undefined ? sellData[i].firstBuyTime : 1694661887000);
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                  };
                tableData[i] = [`${sellData[i].syncedAt}${sellData[i].symbol}`, `$${sellData[i].valueUSD.toFixed(3)}`, `$${sellData[i].currentPriceUSD.toFixed(6)}`, `Wallet 3`, `${temp.toLocaleString('en-US', options)}`, `${sellData[i].profitX != undefined ? sellData[i].profitX.toFixed(2) : "1.00"}X`, `Link`];
            }

            let table = new DataTable('#myTable', {
                // config options...
                retrieve: true,
                paging: true,
                searching: true,
                data: tableData,
                responsive: true,
            });

            {/* AI Sells */}
            const response1 = await axios.get('https://aimbotapi.onrender.com/api/accounts/aimbot/sells');
            var buyData = response1.data.sells;

            var tableData1 = [];
            for(let i = 0 ; i < buyData.length; i ++){
                var temp = new Date(buyData[i].sellTime != undefined ? buyData[i].sellTime : 1694661887000);
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                  };
                tableData1[i] = [`${buyData[i].sellTokens.toFixed(0)}${buyData[i].symbol}`, `${buyData[i].buyWithETH != undefined ? buyData[i].buyWithETH.toFixed(2) : "0.04"}ETH`, `${buyData[i].sellForETH != undefined ? buyData[i].sellForETH.toFixed(2) : "0.07"}ETH`, `${buyData[i].profitETH != undefined ? buyData[i].profitETH.toFixed(2) : "0.03"}ETH`, `${temp.toLocaleString('en-US', options)}`, `2 minutes 24 seconds`, 'Legacy 1', `Link`];
            }

            let myTable1 = new DataTable('#myTable1', {
                // config options...
                retrieve: true,
                paging: true,
                searching: true,
                data: tableData1,
                responsive: true,
            });
        };

        getData();
    }, [flag]);


  return (
    <div className="bg-[#030015] h-full claim_section_portfolio text-white">
      <p className='text-[#C0B0E9] font-bold text-5xl mb-12'>AI Portfolio Tracker</p>
      <button className="mb-10 ml-7 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-medium py-2 px-10 rounded-md">
        <div className='flex flex-row items-center gap-3 text-lg' onClick={() => setFlag(flag + 1)}><FaRecycle />Refresh Portfolio</div>
      </button>
      {/* Current Holdings Table */}
      <p className='mb-6 text-3xl font-bold text-white'>Current Holdings</p>
      <p className='mb-20 text-xl text-white'>Check our AI holdings in real-time. The list is updated after new buys or sells.</p>
    
      <div className='flex items-center justify-center'>
        <div className='w-2/3'>
            <table id="myTable" class="display">
                <thead>
                    <tr>
                        <th className='equal-width-td-focus'>Token</th>
                        <th className='equal-width-td'>Token Value</th>
                        <th className='equal-width-td'>Price Per Token</th>
                        <th className='equal-width-td'>Wallet</th>
                        <th className='equal-width-td-strong-focus'>Buy Time</th>
                        <th className='equal-width-td'>Current Profit</th>
                        <th className='equal-width-td'>Etherscan</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </div>
       </div>

       {/* AI Sells */}
      <p className='mt-20 mb-6 text-3xl font-bold text-white'>AI Sells</p>
      <p className='mb-20 text-xl text-white'>Check all the sells from our AI. The list is updated every few minutes.</p>
    
      <div className='flex items-center justify-center'>
        <div className='w-2/3'>
            <table id="myTable1">
                <thead>
                    <tr className="header">
                        <td className='equal-width-td-focus'>Token</td>
                        <td className='equal-width-td'>Buy Size</td>
                        <td className='equal-width-td'>Sell Size</td>
                        <td className='equal-width-td'>Profit</td>
                        <td className='equal-width-td-strong-focus'>Sell Time</td>
                        <td className='equal-width-td-focus'>Duration</td>
                        <td className='equal-width-td'>Wallet</td>
                        <td className='equal-width-td'>Etherscan</td>
                    </tr>
                </thead>
                <tbody>
                {tableContent1}
                </tbody>
            </table>
        </div>
       </div>
    </div>
  );
}

export default DataTables;
