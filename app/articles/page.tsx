import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
const SERVER = `http://localhost:8080`

interface IArticle{
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: String
}

const Article = (prop: IArticle) => <tr key={prop.id}>
    <td>{prop.title}</td>
    <td>{prop.content}</td>
    <td>{prop.writer}</td>
    <td>{prop.registerDate}</td>
</tr>

export default function Articles(){
    const router = useRouter();
    // const [articleList, setArticleList] = useState([])
    // const url = `${SERVER}/api/articles/`;
    // const config = {
    //   headers:{
    //     "Cache-Control": "no-cache",
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer blah ~` ,
    //     "Access-Control-Allow-Origin": "*",
    // }}
    // axios.get(url, config)
    // .then(res => {
    //     setArticleList(res.data.map((v: IArticle) => <Article {...v}/>))
    // })

    const articles = [
        {id: 1, title: "임시제목1", content: "임시내용1", writer: "임시작가1", registerDate: "2023"}, 
        {id: 2, title: "임시제목2", content: "임시내용2", writer: "임시작가2", registerDate: "2024"},
        {id: 3, title: "임시제목3", content: "임시내용3", writer: "임시작가3", registerDate: "2025"}
    ]
    const articleList = articles.map((v) => <Article {...v}/>)

    return <>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Writer</th>
                <th>RegisterDate</th>
            </tr>
        </thead>
        <tbody>
            {articleList}
        </tbody>
    </table>
    </>
}