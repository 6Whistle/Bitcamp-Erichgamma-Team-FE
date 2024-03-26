export default function Articles(){
    const articles = [
        {title: "임시제목1", content: "임시내용1", writer: "임시작가1"}, 
        {title: "임시제목2", content: "임시내용2", writer: "임시작가2"},
        {title: "임시제목3", content: "임시내용3", writer: "임시작가3"}
    ]
    const articleList = articles.map((article, index) =>
        <tr key={index}>
            <td>{article.title}</td>
            <td>{article.content}</td>
            <td>{article.writer}</td>
        </tr>
    )
    
    return <>
    <table>
        <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Writer</th>
        </tr>
        {articleList}
    </table>
    </>
}