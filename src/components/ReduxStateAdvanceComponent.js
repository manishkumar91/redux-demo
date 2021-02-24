import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addArticleAction } from '../actions/articleAction';

const ReduxStateAdvanceComponent = () => {
    const articles = useSelector((state) => state.articles)
    const dispatch = useDispatch();
    const addNewArticle = () => {
        const newArticle = {
          name: 'TypeScript tutorial for beginners',
          id: articles.length + 1,
        };
        dispatch(addArticleAction(newArticle))
      };
  
      return (
          <div>
            <h1>Redux State Advance Component</h1>
            <ul>
              {articles.map(e => <li key={e.id} >{e.name}</li>)}
            </ul>
            <button onClick={addNewArticle}>Add new Article</button>
          </div>
      )
}

export default ReduxStateAdvanceComponent
