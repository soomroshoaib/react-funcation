
import { useState } from 'react';
import './App.css';

function App() {
  const [num , setnum] = useState(0)

 const plux=()=>{
  setnum(num +1)
 }
  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={plux}>+</button>
    </div>
  );
}

export default App;
