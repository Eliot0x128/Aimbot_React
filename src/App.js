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
Updated list
-Sorted by Token value
-Duration display format fixed(ex. "1 Hours" to "1 Hour")
-Limited Name/Symbol to 20 chars + ...
-Token price subscription fixed(ex. 0.0₉56373 instead of 0.000000)
-I think sorting by duration is correct, please check sorting of https://www.aim-bot.app/portfolio
*/
