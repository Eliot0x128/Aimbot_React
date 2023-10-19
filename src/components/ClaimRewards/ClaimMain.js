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

import ContractABI from './Legacy_ABI.json';
import ClaimContractABI from './Claim_ABI.json';

const ContractAddress = "0x0c48250Eb1f29491F1eFBeEc0261eb556f0973C7";
const ClaimContractAddress = "0xe1B9f11aA79cb64AcaC94Ea021Ca800AEF6964F1";

function ClaimRewards () {
    const account = useAccount();

    const [ethShare, setEthShare] = useState("0");
    const [ethSharePercent, setEthSharePercent] = useState("0");
    const [claimEthShare, setClaimEthShare] = useState("0");
    const [claimEthSharePercent, setClaimEthSharePercent] = useState("0");
    const [totalEth, setTotalEth] = useState(0);
    const [claimTotalEth, setClaimTotalEth] = useState(0);
    const [legacyOpen, setLegacyOpen] = useState(0);

    const { data: data1, isLoading: isLoading1, isSuccess: isSuccess1, write: write1 } = useContractWrite({
      address: ContractAddress,
      abi: ContractABI,
    });

    const { data: data2, isLoading: isLoading2, isSuccess: isSuccess2, write: write2 } = useContractWrite({
      address: ClaimContractAddress,
      abi: ClaimContractABI,
    });

    const contractread = useContractRead({
      address: ContractAddress,
      abi: ContractABI,
      functionName : 'stats',
      args : [account.address]
    });

    const tokenBalance = useContractRead({
      address: ContractAddress,
      abi: ContractABI,
      functionName : 'balanceOf',
      args : [account.address]
    });

    const claimContractread = useContractRead({
      address: ClaimContractAddress,
      abi: ClaimContractABI,
      functionName : 'accountData',
      args : [account.address]
    });

    const claimTokenBalance = useContractRead({
      address: ClaimContractAddress,
      abi: ClaimContractABI,
      functionName : 'balanceOf',
      args : [account.address]
    });

    const totalSupply = useContractRead({
      address: ClaimContractAddress,
      abi: ClaimContractABI,
      functionName : 'totalSupply'
    });
    
    if(account.address == undefined && legacyOpen == 1) {
      setLegacyOpen(0);
    }

    const stringToNumber = (subscrStr) => {
      let tempStr = [];
      var j = 0;
      for(var i = 0; i < subscrStr.length; i ++) {
        if((subscrStr[i] >= '0' && subscrStr[i] <= '9') || subscrStr[i] == '.'){
          tempStr[j] = subscrStr[i];
          j ++;
        }
        else if(subscrStr[i] == '$')
          continue;
        else {
          let cnt = 0;
          if(subscrStr == undefined || subscrStr[i] == undefined || subscrStr[i] == null)
            break;
          if(subscrStr[i - 1].codePointAt(0) >= '₀'.codePointAt(0) && subscrStr[i - 1].codePointAt(0) <= '₀'.codePointAt(0) + 9) {
            cnt = (subscrStr[i - 1].codePointAt(0) - '₀'.codePointAt(0)) * 9;
          }
          cnt += subscrStr[i].codePointAt(0) - '₀'.codePointAt(0);

          while(cnt >= 1) {
            tempStr[j ++] = '0';
            cnt --;
          }
        }
      }
      return tempStr.join('');
    }

    useEffect(() => {
      if(account.address && contractread.isSuccess) {
        const web3 = new Web3('https://mainnet.infura.io/v3/19affef0dbd140e0aca95546e1c5bdd0');        

        const withdrawableDividends = web3.utils.fromWei(contractread.data[0], 'ether');
        const withdrawableDividends1 = web3.utils.fromWei(claimContractread.data[1], 'ether');

        const tokenBalanceData = web3.utils.fromWei(tokenBalance.data, 'ether');
        const claimTokenBalanceData = web3.utils.fromWei(claimTokenBalance.data, 'ether');
        const claimTotalSupply = web3.utils.fromWei(totalSupply.data, 'ether');

        setEthShare(stringToNumber(parseFloat(withdrawableDividends).toFixed(3)));  //Legacy WithdrawableDividends
        setEthSharePercent((parseFloat(tokenBalanceData) / 10000).toFixed(5)); //Legacy Token Balance

        setClaimEthShare(stringToNumber(parseFloat(withdrawableDividends1).toFixed(3)));  //Claim WithdrawableDividends
        setClaimEthSharePercent((parseFloat(claimTokenBalanceData) / parseFloat(claimTotalSupply)).toFixed(5)); //Claim Token Balance
      }

      const getClaimData = async () => {
        const web3 = new Web3('https://mainnet.infura.io/v3/19affef0dbd140e0aca95546e1c5bdd0');
        const totalEth = await web3.eth.getBalance("0x93314Ee69BF8F943504654f9a8ECed0071526439");
        const totalEth1 = await web3.eth.getBalance("0xe1B9f11aA79cb64AcaC94Ea021Ca800AEF6964F1");

        const totalEthString = web3.utils.fromWei(totalEth, 'ether');
        setTotalEth(parseFloat(totalEthString).toFixed(3));

        const totalEthString1 = web3.utils.fromWei(totalEth1, 'ether');
        setClaimTotalEth(parseFloat(totalEthString1).toFixed(3));
      };

      getClaimData();
    }, [account]);

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
                <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{claimEthSharePercent}%</p>
              </div>
            </div>
            <div className='border border-gray-500 bg-[#161226] rounded-xl h-[150px] w-2/3 md:w-[220px] p-2'>
              <div className='border border-gray-500 bg-[#0c051e] rounded-xl h-full'>
                <button className="px-4 py-1 mt-4 text-sm font-medium text-white claim_eth_box hover:cursor-auto rounded-xl">
                  YOUR SHARE OF ETH
                </button>
                <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{claimEthShare} ETH</p>
              </div>
            </div>
            <div className='border border-gray-500 bg-[#161226] rounded-xl h-[150px] w-2/3 md:w-[220px] p-2'>
              <div className='border border-gray-500 bg-[#0c051e] rounded-xl h-full'>
                <button className="w-[150px] text-sm max-w-md mt-4 claim_eth_box hover:cursor-auto text-white font-medium py-1 px-2 rounded-xl">
                  ALL INVESTORS TOTAL DIVS
                </button>
                <p className='mt-5 ml-3 text-xl font-bold text-left text-white'>{claimTotalEth} ETH</p>
              </div>
            </div>
          </div>
          { account.address && (
            <div className="flex flex-col sm:flex-row">
              <button onClick={() => write2({functionName: "claim", args: [account.address, false, 0]})} className="w-[250px] md:text-xl text-lg mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
                Claim Your ETH
              </button>
              <button onClick={() => write2({functionName: "claim", args: [account.address, true, 0]})} className="w-[250px] min-w-400 md:text-xl text-lg md:ml-7 ml-0 mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
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
                <button onClick={() => write1({functionName: "claim"})} className="w-[250px] md:text-xl text-lg mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
                  Claim Your ETH
                </button>
              </div>
            </div>
          )}
        </div>
    );
}

export default ClaimRewards;
