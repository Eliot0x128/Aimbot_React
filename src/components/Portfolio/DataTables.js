import React, { useEffect, useState } from 'react';
import '../../css/project.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

import { FaRecycle } from 'react-icons/fa';

function DataTables() {
    const [tableContent, setTableContent] = useState([]);
    const [tableContent1, setTableContent1] = useState([]);
    const [flag, setFlag] = useState(0); 

    const returnWalletID = (wallet) => {
        if (wallet == "0x116d1edd539e5e93551973eb2a71898c9095122f") {
          return "Legacy Contract"
        } else if (wallet == "0x74349190f630e7d220192ee2123d5aa820fc44d8") {
          return "Legacy 1"
        } else if (wallet == "0x0d2e78134f05bd2706bdef9249464d2e10130495") {
          return "Legacy 2"
        } else if(wallet == "0x41107d725b1daa17c979cbc02fbeefaf84cedd4c") {
          return "Legacy 3"
        } else if (wallet == "0xe03a775f364612688c1c897efcf84812f9b14e5c") {
          return "Wallet 1"
        } else if (wallet == "0x9e678213687f03b73d931aae4019409c6a052050") {
          return "Wallet 2"
        } else if (wallet == "0x0863433f1cfe32e73630c8d626d9cb04fc733f79") {
          return "Wallet 3"
        } else if (wallet == "0x2d307c7154bef1a2e6ae5ce68d2f839c60ea0b50") {
          return "Wallet 4"
        } else {
          console.log("did not find match", wallet)
          return "AI Contract"
        }
      }

    const calculateDurationInSeconds = (timestamp1, timestamp2) => {
        if (timestamp1 === null || timestamp2 === null) {
          return 0;
        }
      
        const millisecondsPerSecond = 1000;
      
        if (isNaN(timestamp1) || isNaN(timestamp2)) {
          return 0;
        }
      
        const timeDifference = Math.abs(timestamp2 - timestamp1);
      
        if (isNaN(timeDifference)) {
          return 0;
        }
      
        const seconds = Math.floor(timeDifference / millisecondsPerSecond);
      
        return seconds;
      }

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
                
                var linkUrl = "https://etherscan.io/token/" + sellData[i].token;
                var linkContent = [(<a href={linkUrl} className='underline'>Link</a>)];

                var amountToken = sellData[i].balanceWholeTokens != null ? parseInt(sellData[i].balanceWholeTokens.toFixed(0), 10).toLocaleString() : "0";
                var selValue = sellData[i].valueUSD.toFixed(3);
                var currentValue = sellData[i].currentPriceUSD.toFixed(6);
                var currentProfit = sellData[i].profitX != undefined ? sellData[i].profitX.toFixed(2) : "1.00";
                tableData[i] = [`${amountToken}${" "}${sellData[i].symbol}`, `$${selValue}`, `$${currentValue}`, `${returnWalletID(sellData[i].account)}`, `${temp.toLocaleString('en-US', options)}`, `${currentProfit}X`, "Link"];
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

                var tokenAmount = parseInt(buyData[i].sellTokens.toFixed(0), 10).toLocaleString();
                var buyPrice = buyData[i].buyWithETH != undefined ? buyData[i].buyWithETH.toFixed(2) : 0.03;
                var sellPrice = buyData[i].sellForETH != undefined ? buyData[i].sellForETH.toFixed(2) : 0.07;
                var profitValue = (sellPrice - buyPrice).toFixed(2);
                var profitPercent  = (sellPrice / buyPrice).toFixed(2);
                
                var duartion = calculateDurationInSeconds(buyData[i].buyTime,buyData[i].sellTime);
                const days = Math.floor(duartion / (3600 * 24));
                const hours = Math.floor((duartion % (3600 * 24)) / 3600);
                const minutes = Math.floor((duartion % 3600) / 60);
                const seconds = duartion % 60;
                var durationString = (days != 0 ? days + " Days " : "") + (hours != 0 ? hours + " Hours " : "") + (minutes != 0 ? minutes + " Minutes " : "") + (seconds != 0 ? seconds + " Seconds " : "");
            
                tableData1[i] = [`${tokenAmount}${' '}${buyData[i].symbol}`, `${buyPrice}ETH`, `${sellPrice}ETH`, `${profitValue}ETH${' '}(${profitPercent}X)`, `${temp.toLocaleString('en-US', options)}`, `${durationString}`, `${returnWalletID(buyData[i].seller)}`, `Link`];
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
                        <th className='equal-width-td-light-focus'>Price Per Token</th>
                        <th className='equal-width-td'>Wallet</th>
                        <th className='equal-width-td-strong-focus'>Buy Time</th>
                        <th className='equal-width-td'>Current Profit</th>
                        <th className='equal-width-td'>Etherscan</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
       </div>

       {/* AI Sells */}
      <p className='mt-20 mb-6 text-3xl font-bold text-white'>AI Sells</p>
      <p className='mb-20 text-xl text-white'>Check all the sells from our AI. The list is updated every few minutes.</p>
    
      <div className='flex items-center justify-center'>
        <div className='w-3/4'>
            <table id="myTable1">
                <thead>
                    <tr className="header">
                        <td className='equal-width-td-strong-focus'>Token</td>
                        <td className='equal-width-td'>Buy Size</td>
                        <td className='equal-width-td'>Sell Size</td>
                        <td className='equal-width-td-focus'>Profit</td>
                        <td className='equal-width-td-AI'>Sell Time</td>
                        <td className='equal-width-td-AI'>Duration</td>
                        <td className='equal-width-td'>Wallet</td>
                        <td className='equal-width-td'>Etherscan</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
       </div>
    </div>
  );
}

export default DataTables;
