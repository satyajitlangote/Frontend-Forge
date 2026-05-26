import React from "react";

function ProfileCard(props) {
    const status=
    props.experience >= 2 ? "Senior" : "Junior";
    return ( 
        <div>   
            <h2> Name : {props.name}</h2>
            <h2> Course : {props.course}</h2>
            <h2> Experience : {props.experience} years</h2>
            <h2> Status : {status}  </h2>
        </div>
    );
}
function App() {
    return (
        <div>
            <ProfileCard
                name="Satyajit Langote"
                course="Full-Stack-Java"
                city="Sangli"
                exprience={3}
            />
            
            <ProfileCard
                name="Pradnya Mali"
                course="B-Pharmacy"
                City="Sangli"
                exprience={2}
                />
                <profileCard 
                name="Rahul Patil"
                course="JAva"
                exprience={2}
                />
        </div>
    );
}
export default App;