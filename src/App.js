import logo from './logo.svg';
import './App.css';

import NameList from './Components/NameList/NameList';
import Emails from './Components/NameList/Emails';

function App() {
  return (
    <div>
     <NameList/>
     <Emails email="warunisha1@gmail.com"/>
     <Emails email="pasindu@gmail.com"/>
     <Emails email="kavindhi@gmail.com"/>
    </div>
  );
}

export default App;
