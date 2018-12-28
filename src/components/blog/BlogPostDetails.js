import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const BlogPostDetails = (props) => {
  const { blogpost, auth } = props;

  if (!auth.uid) {
    return <Redirect to="/signin" />
  }

  if (blogpost) {
    return (
      <div>
        <div className="container section blogpost-container">
          <div className="card z-depth-0 blogpost-details">
            <h2 className="card-title center blogpost-title">{ blogpost.title }</h2>
            <p>{ blogpost.content }</p>
          </div>
          <div className="card-action grey-text text-darken-3 blogpost-posted">
            <div>Posted by { blogpost.authorFirstName } { blogpost.authorLastName }</div>
            <div>{ moment(blogpost.createdAt.toDate()).calendar() }</div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        <p>Loading blogpost...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;
  const blogposts = state.firestore.data.blogposts;
  const blogpost = blogposts ? blogposts[id] : null;

  return {
    blogpost: blogpost,
    auth: state.firebase.auth
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogposts'}
  ])
)(BlogPostDetails)