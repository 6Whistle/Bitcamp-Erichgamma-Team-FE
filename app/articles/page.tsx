'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
const SERVER = `http://localhost:8080`

interface IArticle{
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: String
}

export default function Articles(){
    const router = useRouter()
    const [articleList, setArticleList] = useState([])
    const url = `${SERVER}/api/articles`
    const config = {
      headers:{
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Authorization": `Bearer blah ~` ,
        "Access-Control-Allow-Origin": "*",
    }}
    
    useEffect(() => {
        axios.get(url, config)
        .then(res => setArticleList(res.data.articles))
        }, [])

    return (<>
    <table border={1}>
        <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Writer</th>
                <th>RegisterDate</th>
            </tr>
        </thead>
        <tbody>
            { (articleList.map((v:IArticle) => 
                            <tr key={v.id}>
                            <td>{v.title}</td>
                            <td>{v.content}</td>
                            <td>{v.writer}</td>
                            <td>{v.registerDate}</td>
                        </tr>))
            }
        </tbody>
    </table>
    </>)
}