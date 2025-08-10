import { useState } from "react";

 function Counter() {
  const [ count, setCount] = useState
   
    return(
        <div>
            <h1>counter: 0</h1>
            <button
             onClick={() => console.log('increment')}>increment</button>
            <button onClick={() => console.log('dcrement')}>decrement</button>
            <button onClick={() => console.log('reset')}>reset</button>
        </div>
    )
}
export default Counter; 