import React ,{useState} from 'react'
import Dinner from './dinner.js';
import  './App.css';
function App() {
  let [count , setcount]= useState(1);
  let [isMorning , setMorning]= useState(true);
  return (
    <div className={`box ${isMorning ? 'daylight' :''}`}>
      <h1>Good{isMorning ? 'Morning' :'Night'}</h1>
<Dinner conter={count}/>
<br/>
<button onClick={()=> setcount(count+1)}>Updated</button>
<button onClick={()=> setMorning(!isMorning)}>chang_day</button>
</div>
  );
}

export default App;
