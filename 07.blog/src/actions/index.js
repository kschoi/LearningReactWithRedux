import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPostsAndUsers = () => async dispatch => {
  console.log("about to fetch posts");
  await dispatch(fetchPosts());
  console.log("fetched posts!");
};

// Bad approach!!!!
// Error: Actions must be plain objects. Use custom middleware for async actions.
// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     }
// };

// with promise
// export const fetchPosts = () => {
//     const promise = jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: promise
//     }
// };

// with redux-thunk
// export const fetchPosts = () => {
// 	return async (dispatch, getState) => {
// 		const response = await jsonPlaceholder.get('/posts');

// 		dispatch({
// 			type: 'FETCH_POSTS',
// 			payload: response
// 		});
// 	}
// };
// =>
export const fetchPosts = () => async dispatch => {
  const { data } = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: data
  });
};

// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

// export const fetchUser = function(id) {
//   return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
//   });
// };

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};