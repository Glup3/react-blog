export const createBlogPost = (blogpost) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;

    firestore.collection('blogposts').add({
      ...blogpost,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorID,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BLOGPOST', blogpost });
    }).catch((err) => {
      dispatch({ type: 'CREATE_BLOGPOST_ERROR', err });
    })
  }
}