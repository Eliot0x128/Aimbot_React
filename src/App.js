import './App.css';
import ClaimEth from './components/ClaimEth';
import Landing from './components/Landing';
import PortfolioPage from './components/PortfolioPage';
import Web3 from "web3";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
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
Updated list
-White screen of ClaimEth page
-Corrected total divs amount from '10.01ETH' to '100.10ETH'
*/
