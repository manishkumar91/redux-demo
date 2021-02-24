import {ADD_ARTICLE} from '../constants/articleConstants'

// function addArticleAction(data) {
//     return {type: ADD_ARTICLE, payload: data}
// }

//It will also not work for asynchronous functions.
// function addArticleAction(data) {
//     setTimeout(() => {
//         return {type: ADD_ARTICLE, payload: data}
//     }, 2000);
// }

//For asynchronous function we need to return data in this format.
function addArticleAction(data) {
   return function (dispatch) {
    //asynchronous operations must be performed here inside this returned function.
    setTimeout(() => {
        //And we should return data as argument to dispatch() function.
      return dispatch({
        type: ADD_ARTICLE,
        payload: data,
      });
    }, 2000);
  };
}


export {
    addArticleAction
}