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
-Responsive of tables(mobile horizontal scroll) fixed
-Sorted table by usd value(Price per usd | Sell Size)
-Link on tables Fixed
*/
