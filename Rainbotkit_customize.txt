import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaReddit, FaTelegram, FaTiktok, FaTree, FaTwitter, FaYoutube } from "react-icons/fa"
import { SiCoinmarketcap, SiLinktree } from 'react-icons/si'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [hoverMenu, setHoverMenu] = useState(false);
    const handleOver = () => {
        console.log('over');
        setHoverMenu(true);
    }

    const handleOut = () => {
        console.log('out');
        setHoverMenu(false);
    }
    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4">
                <Link to="/" className="flex items-center">
                    <img src="./logo.jpg" className="h-12 mr-3 rounded-[50%]" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BabyCong</span>
                </Link>
                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="items-center justify-between font-medium hidden w-full lg:flex lg:w-auto lg:order-1">
                    <ul className="flex flex-col px-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={{ paddingRight: '30px' }}>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-3 md:py-8 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Audit</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-3 md:py-8 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Video</a>
                        </li>
                        <li>
                            <button onMouseEnter={handleOver} onMouseLeave={handleOut} className="relative flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-3 md:py-8 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">How to Buy
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                {hoverMenu && <><div className="absolute shadow-sm bg-gray-50 md:bg-white dark:bg-gray-800 rounded-xl" style={{ top: '80px', marginTop: '9px', width: '650px', left: '-200px' }}>
                                    <div className="flex max-w-screen-xl px-4 text-gray-900 justify-center py-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="text-left">STRAIGHT FORWARD & SIMPLE</div>
                                            <Link to="/how-to-buy-babycong">
                                                <div className="flex items-center">
                                                    <img src="https://chancer.com/wp-content/uploads/2023/05/coins.svg" style={{ width: '35px' }} />
                                                    &nbsp;&nbsp;<div className="font-bold">How to Buy $BabyCong</div>
                                                </div>
                                                <div className="text-left px-10 text-gray-400">We make it super easy</div>
                                            </Link>
                                            <div>
                                                <div className="flex items-center">
                                                    <img src="https://chancer.com/wp-content/uploads/2023/04/Set-up-icon.svg" style={{ width: '30px' }} />
                                                    &nbsp;&nbsp;<div className="text-left font-bold">How to Set Up Trust </div>
                                                </div>
                                                <div className="text-left px-10 text-gray-400">Learn how to store your $BabyCong on TrustWallet</div>
                                            </div>
                                            <div>
                                                <div className="flex items-center">
                                                    <img src="https://chancer.com/wp-content/uploads/2023/04/met-mask-icon.svg" style={{ width: '35px' }} />
                                                    &nbsp;&nbsp;<span className="font-bold">How to Set Up MetaMask</span>
                                                </div>
                                                <div className="text-left px-10 text-gray-400">MetaMask makes $BabyCong easily accessible</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div>WHERE TO FIND US</div>
                                            <div className="flex items-center gap-2">
                                                <FaTwitter />
                                                <div>Twitter</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaYoutube />
                                                <div>YouTube</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaInstagram />
                                                <div>Instagram</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaTelegram />
                                                <div>Telegram</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaDiscord />
                                                <div>Discord</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <SiLinktree />
                                                <div>Linktree</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaReddit />
                                                <div>FaReddit</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaTiktok />
                                                <div>TikTok</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaFacebook />
                                                <div>Facebook</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <SiCoinmarketcap />
                                                <div>Coinmarketcap</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    {/* <div className="absolute w-[1200px] bg-[#9c9c9c]"></div> */}
                                </>
                                }
                            </button>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-3 md:py-8 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Whitepaper</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-3 md:py-8 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-3 md:py-8 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Press</a>
                        </li>
                    </ul>
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
                            // Note: If your app doesn't use authentication, you
                            // can remove all 'authenticationStatus' checks
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
                                                <button className="px-6 py-2 text-white rounded-xl" style={{ background: '#00ACFF' }} onClick={openConnectModal} type="button">
                                                    Connect Wallet
                                                </button>
                                            );
                                        }

                                        if (chain.unsupported) {
                                            return (
                                                <button className="px-4 py-2 rounded-xl text-white" style={{ background: 'yellow' }} onClick={openChainModal} type="button">
                                                    Wrong network
                                                </button>
                                            );
                                        }

                                        return (
                                            <div style={{ display: 'flex', gap: 12 }}>
                                                <button
                                                    onClick={openChainModal}
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                    type="button"
                                                >
                                                    {chain.hasIcon && (
                                                        <div
                                                            style={{
                                                                background: chain.iconBackground,
                                                                width: 24,
                                                                height: 24,
                                                                borderRadius: 999,
                                                                overflow: 'hidden',
                                                                marginRight: 4,
                                                            }}
                                                        >
                                                            {chain.iconUrl && (
                                                                <img
                                                                    alt={chain.name ?? 'Chain icon'}
                                                                    src={chain.iconUrl}
                                                                    style={{ width: 24, height: 24 }}
                                                                />
                                                            )}
                                                        </div>
                                                    )}
                                                    {chain.name}
                                                </button>

                                                <button onClick={openAccountModal} type="button">
                                                    {account.displayName}
                                                    {account.displayBalance
                                                        ? ` (${account.displayBalance})`
                                                        : ''}
                                                </button>
                                            </div>
                                        );
                                    })()}
                                </div>
                            );
                        }}
                    </ConnectButton.Custom>
                </div>
            </div>

        </nav>

    )
}

export default Navbar;