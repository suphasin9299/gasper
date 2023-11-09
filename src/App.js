import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './cal/Test';
import { evaluate } from 'mathjs';

function App() {

  return (
    <div className='test'>
      <li>
          <a className='button' href='/Test'>
            bisection
          </a>
      </li>
        <BrowserRouter>
            <Routes>
              <Route path='/Test' element={<Test />} />
            </Routes>
          
        </BrowserRouter>
    </div>
    
  );
}

export default App;