import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const BlogPostDetails = (props) => {
  const { blogpost } = props;
  if (blogpost) {
    return (
      <div>
        <div className="container section blogpost-details">
          <div className="card z-depth-0">
            <span className="card-title">{ blogpost.title }</span>
            <p>{ blogpost.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { blogpost.authorFirstName } { blogpost.authorLastName }</div>
            <div>Date</div>
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
    blogpost: blogpost
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogposts'}
  ])
)(BlogPostDetails)