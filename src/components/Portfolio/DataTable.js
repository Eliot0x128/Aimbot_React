import React, { useEffect, useState } from 'react';
import '../../css/project.css';
import { FaRecycle } from 'react-icons/fa';
import Pagination from './Pagination';

const tableData = [
    "1,146,197 RevSo", "1,332,876 MERCY", "1,865 SEER", "1,912,051 DUDE", "1,953 BUX", "10,790 BLITZ", "10,790 BLITZ", "10,790 BLITZ", "106,981 RAKE", "108 FRIENDCHIPS"
];

function DataTable() {
    const [tableContent, setTableContent] = useState([]);

    useEffect(() => {
        var content = [];
        for(let i = 0 ; i< tableData.length; i ++)
            content = [...content, (
                <tr>
                    <td>{tableData[i]}</td>
                    <td>$234.109</td>
                    <td className=''>$0.0002042</td>
                    <td className=''>Wallet 3</td>
                    <td className=''>September 12, 2023 at 7:24:47 PM</td>
                    <td className=''>4.03X</td>
                    <td className=''><a className='underline hover:cursor-pointer'>Link</a></td>
                </tr>
            )];

        setTableContent(content);
    }, []);

    const filterFunction = (e) => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            if(tr[i].className == "header")
                continue;
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            }
        }
    }

  return (
    <div className="bg-[#030015] h-full claim_section_portfolio">
      <p className='text-[#C0B0E9] font-bold text-5xl mb-12'>AI Portfolio Tracker</p>
      <button className="mb-10 ml-7 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-medium py-2 px-10 rounded-md">
        <div className='flex flex-row items-center gap-3 text-lg'><FaRecycle />Refresh Portfolio</div>
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

        <table id="myTable">
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
                <input className="bg-transparent border border-white text-white rounded-md w-[200px] h-[30px]" type="text" id="myInput" onChange={filterFunction} placeholder=""></input>
            </div>
        </div>

        <table id="myTable">
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
    </div>
  );
}

export default DataTable;
