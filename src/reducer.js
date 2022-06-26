import { types } from './actions'

const initialState = {
    posts: null,
    filteredPosts: null,
  };

export default function postings(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_POSTS_REQUEST:
        return {
            ...state,
            posts: null,
            filteredPosts: null,
            fetching:true
        }
    case types.LOAD_POSTS_SUCCESS:
        return {
            ...state,
            posts: action.posts,
            filteredPosts: action.posts,
            fetching:false
        }
    case types.LOAD_POSTS_FAILURE:
        return {
            ...state,
            fetching:false
        }
    case types.FILTER_POSTS_REQUEST:
        return {
            ...state,
            filteredPosts: null,
            fetching:true
        }
    case types.FILTER_POSTS_SUCCESS:
        return {
            ...state,
            filteredPosts: action.filteredPosts,
            fetching:false
        }
    case types.FILTER_POSTS_FAILURE:
        return {
            ...state,
            fetching:false
        }
    default:
      return state
  }
}