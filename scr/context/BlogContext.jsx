import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogPost': 
      return action.payload; 
    case 'edit_blogPost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id 
          ? action.payload
          : blogPost
      })
    case 'delete_blogPost':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    default:
      return state;
  }
}

const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: 'get_blogPost', payload: response.data })
  }
}

const addBlogPost = dispatch => {
  return async (title, content, callBack) => {
    await jsonServer.post('/blogposts', {title, content})
    if (callBack) {
      callBack();
    }
  }
}

const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogPost', payload: id})
  }
}

const editBlogPost = dispatch => {
  return async (id, title, content, callBack) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content})
    dispatch({ type: 'edit_blogPost', payload: { id, title, content }});
    if (callBack) {
      callBack();
    }
  }
}

export const { Context, Provider } = createDataContext( 
  blogReducer, 
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
)