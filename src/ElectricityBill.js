import React from"react";
function ElectricityBill(props){
    let billAmount= 0;
    if(props.units <= 100){
        billAmount=props.units * 5;
    }
    else if(props.units > 300){
        billAmount =props.units * 7;
    }
    else {
        billAmount = props.units * 10;
    }
    return (
        <div>
            <h2>Customer Name :{props.name}</h2>
            <h2>Units Consumed :{props.units}</h2>
            <h2>Bill Amount : {billAmount}</h2>

        </div>
    );

}
function App(){
    return (
        <div>
            <ElectricityBill name="Satyajit Langote " units={350}/>
            <ElectricityBill name="Pradnya Mali" units={250}/>

        </div>
    );
}
export default App;