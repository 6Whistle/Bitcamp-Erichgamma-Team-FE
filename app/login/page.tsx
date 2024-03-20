'use client'

import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
const SERVER = `http://localhost:8080`


export default function Login(){
    const [username, setUsername] = useState('')
    const [pw, setPw] = useState('')


    const changeUsernameHandler = (e: any) => {
        setUsername(e.target.value)
    } 
    const changePwHandler = (e: any) => {
        setPw(e.target.value)
    }
    const submitHandler = () => {
        const url = `${SERVER}/login`;
        const data = {'username': username, 'pw': pw};
        const config = {
          headers:{
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            "Authorization": `Bearer blah ~` ,
            "Access-Control-Allow-Origin": "*",
        }}

        alert("login request : " + username + ", " + pw)
        axios.post(url, data, config)
        .then(res => {
            alert("login response : " + res.data.username + ", " + res.data.pw + ", " + res.data.login)
        })
    }

    return <html>
        <body>
            <h3>Login Page</h3>
            <h5>ID</h5>
            <input type="text" onChange={changeUsernameHandler}/><br />
            <h5>PW</h5>
            <input type="text" onChange={changePwHandler}/><br /><br />
            <button onClick={submitHandler}>login</button><br />
            <Link href={"/join"}>join</Link>
        </body>
    </html>;
}