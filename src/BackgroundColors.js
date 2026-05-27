import React,{useState,useRef} from "react";
function BackgroundColors(){
    const [color,setColor]=useState("white");
    const previousColor=useRef("None");
    const changeColor=(newColor)=>{
        previousColor.current=color;
        setColor(newColor);
        document.body.style.backgroundColor=newColor;
    };
    return (
        <div>
            <h2>BackgroundColors</h2>
            <h2>Current Color :{color}</h2>
            <h2>Previous Color : {previousColor.current}</h2>
            <button onClick={()=>changeColor("Red")}>
                Red
            </button>
            <button onClick={()=>changeColor("Green")}> Green</button>

        </div>
    );
} 
export default BackgroundColors;