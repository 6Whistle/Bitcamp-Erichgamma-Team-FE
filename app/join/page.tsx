'use client'

import { useState } from "react"

export default function Join(){
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');

    const changeUsernameHandler = (e: any) => {
        setUsername(e.target.value)
    }
    const changePwHandler = (e: any) => {
        setPw(e.target.value)
    }
    const joinHandler = () => {

    }

    return <html>
        <body>
            <h3>Join Page</h3>
            <h5>ID</h5>
            <input type="text" onChange={changeUsernameHandler}/>
            <h5>PW</h5>
            <input type="text" onChange={changePwHandler}/><br />
            <button onClick={joinHandler}>join</button>
        </body>
    </html>
}