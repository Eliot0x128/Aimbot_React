import './App.css';
import ClaimEth from './components/ClaimEth';
import Landing from './components/Landing';
import PortfolioPage from './components/PortfolioPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PortfolioPage />}></Route>
        <Route path='/claimeth' element={<ClaimEth />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
Updated List
(ClaimEth Page)
-Metamask Auto popup connect disabled 
-Connect Wallet Button CSS style changed
-0% of claim, removed 6 sig figs of 0s
-"If your claim is 0 ETH", wording fixed
(Portfolio Page)
-Website speed(caused by free vercel hosting)
-Used 2 decimals for token value
-Token "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" Fixed
-Buy/Sell Size spacing fixed from "0.04ETH" to "0.04 ETH"

I'm working on
-Link on portfolio
-Responsive and sorting of table
Will update again after fixed
*/
