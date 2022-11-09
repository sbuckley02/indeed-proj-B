import { useState } from "react";

export default function Login({props}) {
const [username, setUsername]=useState("")
const [password, setPassword]=useState("")
    return (
        <div
            className="login">
            <box className="loginheader">
            <h1>Login</h1>
            <box className="loginblock">
            <span>Username</span>
            <input
                onChange={(e) => {
                    setUsername(e.target.value)
                }}></input>
            </box>
            <box className="loginblock">
            <span>Password</span>
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>
            </box>
            </box>
        </div>
    );
}


// const [x, setX] = useState(0);
// let y = 0;
// return
{/* <div
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
</div> */}