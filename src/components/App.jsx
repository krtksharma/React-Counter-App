import React , {useState} from "react";

function App() {
  const [count , setCount] = useState(0)
  function increase(){
    setCount(count + 1)
}
function decrease(){
  if(count >0)
  {setCount(count - 1);
  }
  else setCount(0);
}

  
  return(<div className="container">
  <h1 style={{fontSize:"40px"}}>Counter App</h1>
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
</div>)
}

export default App;
