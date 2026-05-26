import React from "react";

function FeeStatus(props) {

    const remaining = props.totalFee - props.paidAmount;

    const status = remaining === 0 ? "Paid" : "Pending";

    return (
        <div>

            <h2>Student Name: {props.studentName}</h2>

            <h2>Total Fee: {props.totalFee}</h2>

            <h2>Paid Amount: {props.paidAmount}</h2>

            <h2>Remaining Amount: {remaining}</h2>

            <h2>Status: {status}</h2>

            <hr />

        </div>
    );
}

function App() {

    return (
        <div>

            <FeeStatus
                studentName="Satyajit"
                totalFee={50000}
                paidAmount={50000}
            />

            <FeeStatus
                studentName="Rahul"
                totalFee={50000}
                paidAmount={30000}
            />

        </div>
    );
}

export default App;