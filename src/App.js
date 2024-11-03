import logo from './logo.svg';
import './App.css';

import NameList from './Components/NameList/NameList';
import Emails from './Components/NameList/Emails';
import Phone from './Components/NameList/Phone';
import HeaderBar from './Components/HeaderBar/HeaderBar';

function App() {
  return (
    <div>
     <HeaderBar/>
     <NameList/>
    
     <Emails email="warunisha1@gmail.com"/>
      <Emails email="pasindu@gmail.com"/>
      <Emails email="kavindhi@gmail.com"/>
      <Phone phone = "04654423"/>
        
    </div>
  );
}

export default App;
