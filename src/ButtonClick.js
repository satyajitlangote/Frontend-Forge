import { useEffect, useRef, useState} from "react";
function ButtonClick() {
 const ref1=useRef();
function demo(){
 ref1.current.focus();
}
 return (
 <div>
 <input ref={ref1} type="text"/>
 <button onClick={demo}> click </button>
 </div>
 );
}
export default ButtonClick; 