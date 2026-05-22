import { useEffect, useRef, useState} from "react";
function CounterValue() {
const [count,setCount]=useState(0);
const prevousValue=useRef(0);
 function increase(){
 prevousValue.current=count;
 setCount(count+1);
 }
 return (
 <div>
 <h2>Current Count :- {count}</h2>
 <h3>Previous Count :- {prevousValue.current}</h3>
 <button onClick={increase}> click </button>


 </div>
 );
}
export default CounterValue;