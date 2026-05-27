import React, { useEffect } from "react";

function MessagePrinter() {

    useEffect(() => {

        const interval = setInterval(() => {

            console.log("Hello Students");

        }, 2000);

        return () => {

            clearInterval(interval);

            console.log("Interval Cleared");

        };

    }, []);

    return (
        <div>

            <h1>Check Browser Console</h1>

        </div>
    );
}

export default MessagePrinter;