import {ADD_ARTICLE} from '../constants/articleConstants'

const initialState = { 
    articles : [
        {id: 1, name: "React tutorial for beginners."},
        {id: 2, name: "Node js tutorial for beginners."}
    ], 
    //Just for testing purpose.Haven't used it anywhere.
    cart : {items :[], totalPrice: 0}
}

// function mainReducer(state = initialState, action) {
//     return state
// }

function mainReducer(state = initialState, action) {
    console.log(action,"ggggg");
    if (action.type === ADD_ARTICLE) {
        let articlesWithNewOne = {
            articles: [...state.articles, action.payload],
        }
        let obj = Object.assign({}, state, articlesWithNewOne);
        return obj;
    }
    return state;
}

// function mainReducer(state = initialState, action) {
//     if (action.type === ADD_ARTICLE) {
//       return Object.assign({}, state, {
//         articles: state.articles.concat(action.payload),
//       });
//     }
//     return state;
// }

export default mainReducer