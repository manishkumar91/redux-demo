import React from 'react'
import { connect } from 'react-redux';
import {addArticleAction} from '../actions/articleAction'


const ReduxStateComponent = (props) => {
    const {articles, dispatch} = props;
    const addNewArticle = () => {
      const newArticle = {
        name: 'TypeScript tutorial for beginners',
        id: articles.length + 1,
      };
      dispatch(addArticleAction(newArticle))
    };

    return (
        <div>
          <h1>Redux State Component</h1>
          <ul>
            {articles.map(e => <li key={e.id} >{e.name}</li>)}
          </ul>
          <button onClick={addNewArticle}>Add new Article</button>
        </div>
    )
}

//It is used to bind redux state with local component props
const mapStateToProps = state => {
  return {articles : state.articles};
};

export default connect(
  mapStateToProps
)(ReduxStateComponent);
  