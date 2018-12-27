export const createBlogPost = (blogpost) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    firestore.collection('blogposts').add({
      ...blogpost,
      authorFirstName: 'Phuc',
      authorLastName: 'Tran',
      authorId: 666,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BLOGPOST', blogpost });
    }).catch((err) => {
      dispatch({ type: 'CREATE_BLOGPOST_ERROR', err });
    })
  }
}