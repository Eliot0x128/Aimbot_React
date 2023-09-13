import './App.css';
import Landing from './components/Landing';
import PortfolioPage from './components/PortfolioPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/portfolio' element={<PortfolioPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
