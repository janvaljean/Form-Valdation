

import './App.css';
import Inputs from './Inputs';
import SignUp from './components/SignUp';

function App() {
  let isLog = false;
    
  return (
      <div>
        <SignUp/>
       {isLog && <Inputs/>} 
      </div>
      )

}

export default App;
