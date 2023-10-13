import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { ethers } from 'ethers';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useNetwork,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '../../css/project.css';

import ContractABI from './ABI.json';
const ContractAddress = "0x0c48250Eb1f29491F1eFBeEc0261eb556f0973C7";

function ClaimRewards () {
    const account = useAccount();

    const [ethShare, setEthShare] = useState("0");
    const [ethSharePercent, setEthSharePercent] = useState("0");
    const [totalEth, setTotalEth] = useState(0);
    const [legacyOpen, setLegacyOpen] = useState(0);

    const { data, isLoading, isSuccess, write } = useContractWrite({
      address: ContractAddress,
      abi: ContractABI,
    });

    const contractread = useContractRead({
      address: ContractAddress,
      abi: ContractABI,
      functionName : 'stats',
      args : [account.address]
    });
    
    if(account.address == undefined && legacyOpen == 1) {
      setLegacyOpen(0);
    }

    useEffect(() => {
      if(account.address && contractread.isSuccess) {
        console.log(contractread.data);
        const web3 = new Web3('https://mainnet.infura.io/v3/19affef0dbd140e0aca95546e1c5bdd0');
        const withdrawableDividends = web3.utils.fromWei(contractread.data[0], 'ether');
        const totalDividends = web3.utils.fromWei(contractread.data[1], 'ether');
  
        setEthShare(stringToNumber(parseFloat(totalDividends).toFixed(2)));
        setEthSharePercent(totalDividends ==  "0." ? (0).toFixed(5) : (parseInt(withdrawableDividends) * 100.0 / parseInt(totalDividends)).toFixed(4));
      }

      const getClaimData = async () => {
        const web3 = new Web3('https://mainnet.infura.io/v3/19affef0dbd140e0aca95546e1c5bdd0');
        const totalEth = await web3.eth.getBalance("0x93314Ee69BF8F943504654f9a8ECed0071526439");

        const totalEthString = web3.utils.fromWei(totalEth, 'ether');
        setTotalEth(parseFloat(totalEthString).toFixed(2));
      };

      getClaimData();
    }, [account.address]);

    return (
        <div className='claim_section w-full h-full body bg-[#030015] flex flex-col justify-center items-center pb-36'>
          <div className='bg-[#030015] border-t border-[#9B83D031] w-2/3 mb-36'></div>
          <p className='md:text-6xl text-5xl text-[#BAA9E5] font-bold mb-6'>Claim your ETH</p>
          <p className='mb-12 text-lg text-white md:text-xl'>Connect your wallet and then click on CLAIM.</p>

          <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button className="w-[250px] md:text-xl text-lg mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md" onClick={openConnectModal} type="button">
                                        Connect Wallet
                                    </button>
                                );
                            }
                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <button className="w-[250px] md:text-xl text-lg mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md" onClick={openAccountModal} type="button">
                                        Disconnect
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
          </ConnectButton.Custom>
                  
          <div className='flex flex-col items-center justify-center w-full my-10 md:flex-row gap-7'>
            <div className='border border-gray-500 bg-[#161226] rounded-xl h-[150px] w-2/3 md:w-[220px] p-2'>
              <div className='border border-gray-500 bg-[#0c051e] rounded-xl h-full'>
                <button className="px-4 py-1 mt-4 text-sm font-medium text-white claim_eth_box hover:cursor-auto rounded-xl">
                  YOUR % OF CLAIM
                </button>
                <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{ethSharePercent}%</p>
              </div>
            </div>
            <div className='border border-gray-500 bg-[#161226] rounded-xl h-[150px] w-2/3 md:w-[220px] p-2'>
              <div className='border border-gray-500 bg-[#0c051e] rounded-xl h-full'>
                <button className="px-4 py-1 mt-4 text-sm font-medium text-white claim_eth_box hover:cursor-auto rounded-xl">
                  YOUR SHARE OF ETH
                </button>
                <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{ethShare} ETH</p>
              </div>
            </div>
            <div className='border border-gray-500 bg-[#161226] rounded-xl h-[150px] w-2/3 md:w-[220px] p-2'>
              <div className='border border-gray-500 bg-[#0c051e] rounded-xl h-full'>
                <button className="w-[150px] text-sm max-w-md mt-4 claim_eth_box hover:cursor-auto text-white font-medium py-1 px-2 rounded-xl">
                  ALL INVESTORS TOTAL DIVS
                </button>
                <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{totalEth} ETH</p>
              </div>
            </div>
          </div>
          { account.address && (
            <div className="flex flex-col sm:flex-row">
              <button onClick={() => write({functionName: "claim"})} className="w-[250px] md:text-xl text-lg mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
                Claim Your ETH
              </button>
              <button className="w-[250px] min-w-400 md:text-xl text-lg md:ml-7 ml-0 mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
                REINVEST
              </button>
            </div>
            )
          }
          <p className='px-4 text-xl text-white md:px-0'>If your claim is 0 ETH, you simply need to wait for the next distribution before being eligible.</p>
          {account.address && (
            <div className="flex flex-col items-center">
              <p className='md:text-6xl text-5xl text-[#BAA9E5] font-bold mb-6 mt-32'>Legacy Contract</p>
              <p className='px-4 mb-12 text-lg text-white md:text-xl md:px-0'>If you'd like to claim rewards from distributions before 15th of October</p>
              <button onClick={() => setLegacyOpen(1)} className="w-[300px] md:text-xl text-lg mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
                Open Legacy Section
              </button>
            </div>
          )}
          {legacyOpen == 1 && (
            <div className="flex flex-col w-full">
              <div className='flex flex-col items-center justify-center w-full my-10 md:flex-row gap-7'>
                <div className='border border-gray-500 bg-[#161226] rounded-xl h-[150px] w-2/3 md:w-[220px] p-2'>
                  <div className='border border-gray-500 bg-[#0c051e] rounded-xl h-full'>
                    <button className="px-4 py-1 mt-4 text-sm font-medium text-white claim_eth_box hover:cursor-auto rounded-xl">
                      YOUR % OF CLAIM
                    </button>
                    <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{ethSharePercent}%</p>
                  </div>
                </div>
                <div className='border border-gray-500 bg-[#161226] rounded-xl h-[150px] w-2/3 md:w-[220px] p-2'>
                  <div className='border border-gray-500 bg-[#0c051e] rounded-xl h-full'>
                    <button className="px-4 py-1 mt-4 text-sm font-medium text-white claim_eth_box hover:cursor-auto rounded-xl">
                      YOUR SHARE OF ETH
                    </button>
                    <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{ethShare} ETH</p>
                  </div>
                </div>
                <div className='border border-gray-500 bg-[#161226] rounded-xl h-[150px] w-2/3 md:w-[220px] p-2'>
                  <div className='border border-gray-500 bg-[#0c051e] rounded-xl h-full'>
                    <button className="w-[150px] text-sm max-w-md mt-4 claim_eth_box hover:cursor-auto text-white font-medium py-1 px-2 rounded-xl">
                      ALL INVESTORS TOTAL DIVS
                    </button>
                    <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{totalEth} ETH</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button className="w-[250px] md:text-xl text-lg mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
                  Claim Your ETH
                </button>
              </div>
            </div>
          )}
        </div>
    );
}

export default ClaimRewards;
