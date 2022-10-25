import { useState } from "react";

export default function Login(props) {
    const [x, setX] = useState(0);
    let y = 0;

    return (
        <div
            className="box"
        >
            <h3>Create an account</h3>
            Button was clicked {x} times
            <button
                className="login-btn"
                onClick={() => {
                    setX(x + 1);
                }}
            >
                Click me!
            </button>
        </div>
    );
}