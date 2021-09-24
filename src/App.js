
import './App.css';
import { useState } from 'react';

function App() {
  let [count,setCount] = useState(0)

  let incrementCounter = () => {
    setCount (count + 1)
  }
  let decrementCounter = () => {
    setCount (count - 1)
  }

  return (
    <div >
    <h1>welcome to counter app</h1>
    <h2>the count is : {count}</h2>
   
    <button onClick={incrementCounter} className="count-button-in">increase</button>
    <button  onClick={decrementCounter } className="count-button-de">decrease</button>
    </div>
  );
}

export default App;
