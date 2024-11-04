import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Routes , Switch} from 'react-router-dom';

import NameList from './Components/pages/NameList/NameList';
import Emails from './Components/pages/NameList/Emails';
import Phone from './Components/pages/NameList/Phone';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import Home from './Components/pages/Home/Home';
import About from './Components/pages/About/About';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <HeaderBar/>

        <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/namelist" element={<NameList />} />
         </Routes>
         
      </BrowserRouter>
    </div>
  );
}

export default App;
