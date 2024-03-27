'use client'
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import "./globals.css"
const SERVER = `http://localhost:8080`

export default function Home(){
  const [name, setName] = useState('')

  const url = `${SERVER}/name`;
  const data = {'name': name};
  const config = {
    headers:{
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      "Authorization": `Bearer blah ~` ,
      "Access-Control-Allow-Origin": "*",
  }}

  const changeHandler = (e: any) => {
    setName(e.target.value)
  }

  const clickHandler = () => {
    alert("request name : " + name)
    axios.post(url, data, config)
    .then(res=>{
      alert("response name : " + res.data.name)
    })
  }

  return <div className='text-center'>
      <b>Welcome To Next.js!!</b>
      <h3>Insert your name</h3>
      <input type="text" onChange={changeHandler} /><br />
      <button onClick={clickHandler}>send</button><br />
      <Link href={'/login'}>login</Link><br />
      <Link href={'/join'}>join</Link><br />
      <Link href={'/mui-demo'}>mui-demo</Link><br />
  </div>
}
