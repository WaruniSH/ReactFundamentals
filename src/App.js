import logo from './logo.svg';
import './App.css';

import NameList from './Components/NameList/NameList';
import Emails from './Components/NameList/Emails';
import Phone from './Components/NameList/Phone';

function App() {
  return (
    <div>
     <NameList/>
    
     <Emails email="warunisha1@gmail.com"/>
      <Emails email="pasindu@gmail.com"/>
      <Emails email="kavindhi@gmail.com"/>
      <Phone phone = "04654423"/>
        
    </div>
  );
}

export default App;
