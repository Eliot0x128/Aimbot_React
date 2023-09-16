import React, { useEffect, useState } from 'react';
import '../../css/project.css';
import axios from 'axios';
import DataTable from 'datatables.net-dt';

import { FaRecycle } from 'react-icons/fa';
import Pagination from './Pagination';

function DataTables() {
    const [tableContent, setTableContent] = useState([]);
    const [tableContent1, setTableContent1] = useState([]);
    const [sellData, setSellData] = useState([]);
    const [buyData, setBuyData] = useState([]);
    const [flag, setFlag] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://aimbotapi.onrender.com/api/accounts/audit/portfolio');
            if(response.data.balances != undefined){
                setSellData(response.data.balances);
            }
            const response1 = await axios.get('https://aimbotapi.onrender.com/api/accounts/aimbot/sells');
            console.log('------------------------------', response1.data);
            if(response1.data.sells != undefined){
                setBuyData(response1.data.sells);
            }
        };

        getData();

        var content = [];
        var content1 = [];

        if(sellData.length >= 1){
            for(let i = 0 ; i < 10; i ++){
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

                content = [...content, (
                    <tr>
                        <td>{sellData[i].syncedAt}{sellData[i].symbol}</td>
                        <td>${sellData[i].valueUSD.toFixed(3)}</td>
                        <td className=''>${sellData[i].currentPriceUSD.toFixed(6)}</td>
                        <td className=''>Wallet 3</td>
                        <td className=''>{temp.toLocaleString('en-US', options)}</td>
                        <td className=''>{sellData[i].profitX != undefined ? sellData[i].profitX.toFixed(2) : "1.00"}X</td>
                        <td className=''><a className='underline hover:cursor-pointer'>Link</a></td>
                    </tr>
                )];
            }
        }
        else {
            // setFlag(flag + 1);
        }

        console.log('buydatalength', buyData.length);
        if(buyData.length >= 1){
            console.log('legnth>1=--------------');
            for(let i = 0 ; i < 10; i ++){
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

                content1 = [...content1, (
                    <tr>
                        <td>{buyData[i].sellTokens.toFixed(0)}{buyData[i].symbol}</td>
                        <td>{buyData[i].buyWithETH != undefined ? buyData[i].buyWithETH.toFixed(2) : "0.04"}ETH</td>
                        <td className=''>{buyData[i].sellForETH != undefined ? buyData[i].sellForETH.toFixed(2) : "0.07"}ETH</td>
                        <td className=''>{buyData[i].profitETH != undefined ? buyData[i].profitETH.toFixed(2) : "0.03"}ETH</td>
                        <td className=''>{temp.toLocaleString('en-US', options)}</td>
                        <td className=''>2 minutes 24 seconds</td>
                        <td>Legacy 1</td>
                        <td className=''><a className='underline hover:cursor-pointer'>Link</a></td>
                    </tr>
                )];
            }
        }

        setTableContent(content);
        setTableContent1(content1);
    }, [flag]);

    const filterFunction = (e) => {
        var input, filter, table, tr, td, i, j, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            if(tr[i].className == "header")
                continue;
            let flag = 0;
            for (j = 0; j < 6; j ++){
                td = tr[i].getElementsByTagName("td")[j];
                if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    
                } else {
                }
                }
            }
            if(flag == 1)
                tr[i].style.display = "";
            else
                tr[i].style.display = "none";
        }
    }

    const filterFunction1 = (e) => {
        var input, filter, table, tr, td, i, j, txtValue;
        input = document.getElementById("myInput1");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable1");
        tr = table.getElementsByTagName("tr");
        
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            if(tr[i].className == "header")
                continue;
            let flag = 0;
            for (j = 0; j < 7; j ++){
                td = tr[i].getElementsByTagName("td")[j];
                if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    
                } else {
                }
                }
            }
            if(flag == 1)
                tr[i].style.display = "";
            else
                tr[i].style.display = "none";
        }
    }

  return (
    <div className="bg-[#030015] h-full claim_section_portfolio">
      <p className='text-[#C0B0E9] font-bold text-5xl mb-12'>AI Portfolio Tracker</p>
      <button className="mb-10 ml-7 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-medium py-2 px-10 rounded-md">
        <div className='flex flex-row items-center gap-3 text-lg' onClick={() => setFlag(flag + 1)}><FaRecycle />Refresh Portfolio</div>
      </button>
      {/* Current Holdings Table */}
      <p className='mb-6 text-3xl font-bold text-white'>Current Holdings</p>
      <p className='mb-20 text-xl text-white'>Check our AI holdings in real-time. The list is updated after new buys or sells.</p>
    
      <div className='flex items-center justify-center'>
        <div className='w-2/3'>
        <div className='flex flex-col justify-between mb-5 md:flex-row'>
            <p className='text-lg font-medium text-white'>Show 10 entries</p>
            <div className='flex flex-row items-center mt-10 md:mt-0'>
                <p className='mr-3 font-medium text-white text-md'>Search:</p>
                <input className="bg-transparent border border-white text-white rounded-md w-[200px] h-[30px]" type="text" id="myInput" onChange={filterFunction} placeholder=""></input>
            </div>
        </div>

        <table id="myTable" className=''>
            <thead>
                <tr className="header">
                    <td>Token</td>
                    <td>Token Value</td>
                    <td className=''>Price Per Token</td>
                    <td className=''>Wallet</td>
                    <td className=''>Buy Time</td>
                    <td className=''>Current Profit</td>
                    <td className=''>Etherscan</td>
                </tr>
            </thead>
            <tbody>
               {tableContent}
            </tbody>
        </table>
        <Pagination />
        </div>
       </div>

       {/* AI Sells */}
      <p className='mt-20 mb-6 text-3xl font-bold text-white'>AI Sells</p>
      <p className='mb-20 text-xl text-white'>Check all the sells from our AI. The list is updated every few minutes.</p>
    
      <div className='flex items-center justify-center'>
        <div className='w-2/3'>
        <div className='flex flex-col justify-between mb-5 md:flex-row'>
            <p className='text-lg font-medium text-white'>Show 10 entries</p>
            <div className='flex flex-row items-center mt-10 md:mt-0'>
                <p className='mr-3 font-medium text-white text-md'>Search:</p>
                <input className="bg-transparent border border-white text-white rounded-md w-[200px] h-[30px]" type="text" id="myInput1" onChange={filterFunction1} placeholder=""></input>
            </div>
        </div>

        <table id="myTable1">
            <thead>
                <tr className="header">
                    <td>Token</td>
                    <td>Buy Size</td>
                    <td className=''>Sell Size</td>
                    <td className=''>Profit</td>
                    <td className=''>Sell Time</td>
                    <td className=''>Duration</td>
                    <td className=''>Wallet</td>
                    <td className=''>Etherscan</td>
                </tr>
            </thead>
            <tbody>
               {tableContent1}
            </tbody>
        </table>
        <Pagination />
        </div>
       </div>
    </div>
  );
}

export default DataTables;
