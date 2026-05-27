import React, { useState, useRef } from "react";

function UsernameForm() {

    const [username, setUsername] = useState("");

    const previousUsername = useRef("");

    const handleChange = (event) => {

        previousUsername.current = username;

        setUsername(event.target.value);
    };

    return (
        <div>

            <h1>Username Form</h1>

            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={handleChange}
            />

            <h2>Current Username: {username}</h2>

            <h2>
                Previous Username: {previousUsername.current}
            </h2>

        </div>
    );
}

export default UsernameForm;