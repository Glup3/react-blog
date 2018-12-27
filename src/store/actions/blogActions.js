export const createBlogPost = (project) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_PROJECT', project });
  }
}