import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { ethers } from 'ethers';
import '../../css/project.css';

import ContractABI from './ABI.json';
const ContractAddress = "0x0c48250Eb1f29491F1eFBeEc0261eb556f0973C7";

function ClaimRewards () {
    const [ethShare, setEthShare] = useState("0");
    const [ethSharePercent, setEthSharePercent] = useState("0");
    const [totalEth, setTotalEth] = useState(0);
    const [buttonName, setButtonName] = useState("Connect Wallet");
    const [provider, setProvider] = useState(null);
    const [web3Modal, setWeb3Modal] = useState(null);
    const [walletAddress, setWalletAddress] = useState(null);
    
    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default;

    const init = () => {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            // InfuraID. required to make this work
            infuraId: "8c4beffc4b7041c889224772fbd23e2b",
          }
        },
      };

      const _web3Modal = new Web3Modal({    
        providerOptions, // required
      });

      setWeb3Modal(_web3Modal);
    }

    const claimMyEth = async () => {
      const signer = provider.getSigner(walletAddress);
      var myContract = new ethers.Contract(ContractAddress, ContractABI, signer);
      
      await myContract.claim();
    };

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
          console.log(subscrStr);
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

    const connectWallet = async () => { 
      if(buttonName == "Connect Wallet"){     
        let instance;

        if(window.ethereum) {
          instance = window.ethereum;
      
          await instance.request({ method: "eth_requestAccounts" });
        }
        else {
          instance = new WalletConnectProvider({
            infuraId: "8c4beffc4b7041c889224772fbd23e2b"
          });
          
          await instance.enable();
        }
        setButtonName("Disconnect");

        let _provider = new ethers.providers.Web3Provider(instance);
        // _provider = await web3Modal.connect();
        setProvider(_provider);
        console.log('----------------------------');
        console.log(_provider);

        const accounts = await _provider.listAccounts();
        const _walletAddress = accounts[0];
        console.log('-------------------------');
        console.log(_walletAddress);
        setWalletAddress(_walletAddress);
      }
      else{
        console.log('-----------------disconnect------------------');
        console.log(provider);
        console.log(provider.close);
        // if(provider.close) {
          // await provider.close();
          setProvider(null);
          setWalletAddress(null);
          setButtonName("Connect Wallet");
        // }
      }
    };

    useEffect(() => {
      // init();

      const getClaimData = async () => {
        const web3 = new Web3('https://mainnet.infura.io/v3/19affef0dbd140e0aca95546e1c5bdd0');
        const totalEth =await web3.eth.getBalance("0x93314Ee69BF8F943504654f9a8ECed0071526439");

        const totalEthString = web3.utils.fromWei(totalEth, 'ether');
        setTotalEth(parseFloat(totalEthString).toFixed(2));
      };

      getClaimData();
    }, []);

    return (
        <div className='claim_section w-full h-full body bg-[#030015] flex flex-col justify-center items-center pb-36'>
          <div className='bg-[#030015] border-t border-[#9B83D031] w-2/3 mb-36'></div>
          <p className='md:text-6xl text-5xl text-[#BAA9E5] font-bold mb-6'>Claim your ETH</p>
          <p className='mb-12 text-lg text-white md:text-xl'>Connect your wallet and then click on CLAIM.</p>
          <button onClick={connectWallet} id="connectButton" className="ml-7 text-xl mb-8 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
            {buttonName}
          </button>
          {/* <ConnectButton /> */}
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
          { buttonName == "Disconnect" &&
            <button onClick={claimMyEth} className="md:text-xl text-lg ml-7 mb-12 bg-gradient-to-br from-[#D8CEF9] to-[#A58ED7] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-[#241357] font-semibold py-3 px-10 rounded-md">
              Claim Your ETH
            </button>
          }
          <p className='px-4 text-xl text-white md:px-0'>If your claim is 0 ETH, you simply need to wait for the next distribution before being eligible.</p>
        </div>
    );
}

export default ClaimRewards;
