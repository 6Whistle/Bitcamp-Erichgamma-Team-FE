'use client'
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { API } from "./atoms/enums/API"
import AxiosConfig from "./organisms/configs/axios-config"
import { PG } from "./atoms/enums/PG"

export default function Home(){
  const [name, setName] = useState('')
  const url = `${API.SERVER}${API.USER}/name`;
  const data = {name};

  const changeHandler = (e: any) => {
    setName(e.target.value)
  }

  const clickHandler = () => {
    alert("request name : " + name)
    axios.post(url, data, AxiosConfig())
    .then(res=>{
      alert("response name : " + res.data.name)
    })
  }

  return <div className='text-center'>
      <b>Welcome To Next.js!!</b>
      <h3>Insert your name</h3>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>send</button><br />
      <Link href={`${PG.USER}/login`}>login</Link><br />
      <Link href={`${PG.USER}/join`}>join</Link><br />
      <Link href={`${PG.DEMO}/mui-demo`}>mui-demo</Link><br />
      <Link href={`${PG.DEMO}/counter-demo`}>counter-demo</Link><br />
  </div>
}
