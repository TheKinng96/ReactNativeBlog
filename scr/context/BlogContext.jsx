import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogPost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id 
          ? action.payload
          : blogPost
      })
    case 'add_blogPost': 
      return [
        ...state, 
        { 
          id: Math.floor(Math.random() * 9999), 
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete_blogPost':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    default:
      return state;
  }
}

const addBlogPost = dispatch => {
  return (title, content, callBack) => {
    dispatch({ type: 'add_blogPost', payload: {title, content}});
    if (callBack) {
      callBack();
    }
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogPost', payload: id})
  }
}

const editBlogPost = dispatch => {
  return (id, title, content, callBack) => {
    dispatch({ type: 'edit_blogPost', payload: { id, title, content }});
    if (callBack) {
      callBack();
    }
  }
}

export const { Context, Provider } = createDataContext( 
  blogReducer, 
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{title: 'TEST POST', content:'TEST CONTENT', id: 1}]
)