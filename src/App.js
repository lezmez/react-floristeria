/*-- Cristian David Lesmes, Jeffer Fabian Pinzon --*/

import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContent from './components/CartContent/CartContent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/card' element={<CartContent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
