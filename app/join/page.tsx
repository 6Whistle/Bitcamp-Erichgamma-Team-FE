'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
const SERVER = `http://localhost:8080`


export default function Join(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pwRepeat, setPwRepeat] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [job, setJob] = useState('')
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [checked, setChecked] = useState(false)
    const router = useRouter();

    const changeUsernameHandler = (e: any) => {
        setUsername(e.target.value)
    }
    const changePwHandler = (e: any) => {
        setPassword(e.target.value)
    }
    const changePwRepeatHandler = (e: any) => {
        setPwRepeat(e.target.value)
    }
    const changeNameHandler = (e: any) => {
        setName(e.target.value)
    }
    const changePhoneHandler = (e: any) => {
        setPhone(e.target.value)
    }
    const changeJobHandler = (e: any) => {
        setJob(e.target.value)
    }
    const changeHeightHandler = (e: any) => {
        setHeight(e.target.value)
    }
    const changeWeightHandler = (e: any) => {
        setWeight(e.target.value)
    }
    const changeCheckedHandler = () => {
        setChecked(!checked);
    }
    const clickCancelHandler = () => {

    }
    const clickJoinHandler = () => {
        const url = `${SERVER}/api/users/join`;
        const data = { username, password, name, phone, job, height, weight };
        const config = {
          headers:{
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            "Authorization": `Bearer blah ~` ,
            "Access-Control-Allow-Origin": "*",
        }}
        username === '' || password === '' || name === '' || phone === ''
        || job === '' || height === '' || weight === ''
        ? alert("You Should Input Infomation")
        : password !== pwRepeat
        ? alert("Check Password")
        : axios.post(url, data, config)
        .then(res => {
            alert(res.data.message)
            router.push("/login")
        })
    }


    return (
    <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="id"><b>Username : </b></label>
        <input type="text" placeholder="Enter Username" name="text" required onChange={changeUsernameHandler} /><br /><br />

        <label htmlFor="psw"><b>Password : </b></label>
        <input type="password" placeholder="Enter Password" name="psw" required onChange={changePwHandler} /><br /><br />

        <label htmlFor="psw-repeat"><b>Repeat Password : </b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={changePwRepeatHandler}/><br /><br />

        <label htmlFor="name"><b>Name : </b></label>
        <input type="text" placeholder="Enter Name" name="name" required onChange={changeNameHandler}/><br /><br />
        
        <label htmlFor="phone"><b>Phone : </b></label>
        <input type="tel" placeholder="Enter Phone" name="phone" required onChange={changePhoneHandler}/><br /><br />

        <label htmlFor="job"><b>Job : </b></label>
        <input type="text" placeholder="Enter Job" name="Job" required onChange={changeJobHandler}/><br /><br />

        <label htmlFor="height"><b>Height : </b></label>
        <input type="number" placeholder="Enter Height" name="Height" required onChange={changeHeightHandler}/><br /><br />

        <label htmlFor="weight"><b>Weight : </b></label>
        <input type="number" placeholder="Enter Weight" name="Weight" required onChange={changeWeightHandler}/><br /><br />
        
        <label>
          <input type="checkbox" checked = {checked} name="remember" style={{marginBottom: "15px"}} onChange={changeCheckedHandler}/> Remember me
        </label>
        <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
        <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn" onClick={clickJoinHandler}>Sign Up</button>
        </div>
    </div>
    )
}