import React, {useState, useEffect} from 'react'

const LocalStateComponent = () => {
    const [articles, setArticle] = useState([
        {id: 1, name: "React tutorial for beginners."},
        {id: 2, name: "Node js tutorial for beginners."}
    ])
    const addNewArticle = () => {
        const newArticle = {
            name: 'TypeScript tutorial for beginners',
            id: articles.length + 1,
        }
        setArticle([...articles, newArticle])
    }
    return (
        <div>
            <h1>Local State Component</h1>
            <ul>
                {articles.map(e => <li key={e.id}>{e.name}</li>)}
            </ul>
            <button onClick={addNewArticle}>Add new Article</button>
        </div>
    )
}

export default LocalStateComponent