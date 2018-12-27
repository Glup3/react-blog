const initState= {
  blogs: [
    
  ]
}

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BLOGPOST':
      return state;
    
    case 'CREATE_BLOGPOST_ERROR':
      return state;

    default:
      return state;
  }
}

export default blogReducer