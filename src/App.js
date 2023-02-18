import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [time,setTime]=useState(0)



  function handleKeyDown(e){
    if(e.key==="Enter"){
      const inputTime=Math.floor(e.target.value)

      if(isNaN(inputTime)){
        setTime(0)
      }
      else{
        setTime(inputTime)
      }
    }
  };

  useEffect(()=>{
   let intervalId;
      if(time>0){
        intervalId= setInterval(()=>{
          setTime((prevtime)=>prevtime-1);
        },1000);
      }
      else{
        setTime(0);
      }
       return ()=>clearInterval(intervalId);
    },[time]);
   

 




    return (
    <div className="App">
      <div className='content'>
       <h2><label htmlFor='timecount'>Enter Number and press enter to start your countDown</label></h2> 
      <input id='timecount' onKeyDown={handleKeyDown}/>
       <div id="current-time">{time}</div>
      </div>
    
    </div>
  );
}

export default App;
