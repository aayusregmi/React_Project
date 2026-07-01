import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isStartClick, setStart] = useState(false);
  const [isStopClick, setStop] = useState(false);
  const [isResetClick, setReset] = useState(false);
  const countFn = useCallback(() => {
    console.log("We are at countFn");

    if (isResetClick) {
      setCount(0);
    } else if (isStartClick) {
      setCount((prev) => prev + 1);
    }
  }, [isStartClick , isResetClick]);

  function start() {
    setStart(true);
  }
  function stop() {
    setStop(true);
    setStart(false);
  }
  function reset() {
    setReset(true);
  }

  useEffect(() => {
    let id;
     if(isStartClick){
      console.log("For 1 sec.....");
       id = setInterval(() => {
        countFn();
      }, 1000);
     }
      
  
    return () => clearInterval(id);
  }, [isStartClick, isStopClick, isResetClick]);

  console.log("I am below the useEffect!!!");
  
  return (
    <>
      <div className="bg-black h-screen w-full flex justify-center items-center flex-col">
        <div className="Hero w-1/2 h-20 outline-none border-white bg-white rounded-xl">
          <h1 className="text-4xl text-black  text-center my-3">{count}</h1>
        </div>
        <div className="flex flex-wrap bg-gray-500 w-1/2 h-11 text-white rounded-xl my-2 flex-row justify-around items-center">
          <button className="bg-green-600 rounded-md" onClick={start}>
            Start
          </button>
          <button className="bg-green-600 rounded-md" onClick={stop}>
            Stop
          </button>
          <button className="bg-green-600 rounded-md" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
