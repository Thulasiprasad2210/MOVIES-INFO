import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Conenct from './Movies/Conenct';
import Paths from './Movies/Paths';

function App() {
  return (
    <>
    <div>
     <BrowserRouter>
     <Conenct/>
     <Paths/>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
