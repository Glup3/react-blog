const initState= {
  blogs: [
    // {id: '1', title: 't1', content: 'blah1'},
    // {id: '2', title: 't2', content: 'blah2'},
    // {id: '3', title: 't3', content: 'blah3'},
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