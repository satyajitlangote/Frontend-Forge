import React from "react";

function ResultCard(props) {

    const result = props.marks >= 40 ? "Pass" : "Fail";

    return (
        <div>

            <h2>Student Name: {props.StudentName}</h2>

            <h2>Roll Number: {props.RollNumber}</h2>

            <h2>Marks: {props.marks}</h2>

            <h2>Result: {result}</h2>

        </div>
    );
}

function App() {

    return (
        <div>

            <ResultCard
                StudentName="Satyajit"
                RollNumber="101"
                marks={75}
            />

            <hr />

            <ResultCard
                StudentName="Rahul"
                RollNumber="102"
                marks={30}
            />

        </div>
    );
}

export default App;