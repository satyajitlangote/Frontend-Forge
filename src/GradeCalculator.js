import React from "react";

function GradeCalculator(props) {

    const result = props.marks >= 40 ? "Pass" : "Fail";

    const grade =
        props.marks >= 75 ? "A" :
        props.marks >= 60 ? "B" :
        props.marks >= 50 ? "C" : "D";

    return (
        <div>

            <h2>Student Name: {props.StudentName}</h2>

            <h2>Roll Number: {props.RollNumber}</h2>

            <h2>Marks: {props.marks}</h2>

            <h2>Result: {result}</h2>

            <h2>Grade: {grade}</h2>

            <hr />

        </div>
    );
}

function App() {

    return (
        <div>

            <GradeCalculator
                StudentName="Satyajit"
                RollNumber="101"
                marks={85}
            />

            <GradeCalculator
                StudentName="Rahul"
                RollNumber="102"
                marks={65}
            />

            <GradeCalculator
                StudentName="Amit"
                RollNumber="103"
                marks={52}
            />

            <GradeCalculator
                StudentName="Rohan"
                RollNumber="104"
                marks={35}
            />

        </div>
    );
}

export default App;