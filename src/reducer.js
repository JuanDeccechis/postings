import { types } from './actions'

const initialState = {
    posts: null,
  };

export default function postings(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_POSTS_REQUEST:
        return {
            ...state,
            posts: null,
            fetching:true
        }
    case types.LOAD_POSTS_SUCCESS:
        return {
            ...state,
            posts: action.posts,
            fetching:false
        }
    case types.LOAD_POSTS_FAILURE:
        return {
            ...state,
            fetching:false
        }
    default:
      return state
  }
}