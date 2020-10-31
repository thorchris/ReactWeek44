import './App.css';
import React, {useEffect, useState} from 'react';

export default function Count(props) {
  const {init, increment} = props;
  console.log(props)
  const [count, setCount] = useState(init);

  function decrementCount(){
    setCount(prevCount => prevCount - increment)
  }

  function incrementCount(){
    setCount(prevCount => prevCount + increment)
  }

/*   useEffect( () => {
    localStorage.setItem("count", count);
    localStorage.getItem("count");
  }, [count]
  ) */

  useEffect(() => {
      const storedCount = localStorage.getItem("count");
      setCount(count => parseInt(storedCount))
  }, [])

  useEffect(() => {
      localStorage.setItem("count", count);
  },  [count]);


  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
  
}


