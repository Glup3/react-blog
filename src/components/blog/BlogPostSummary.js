import React from 'react';
import moment from 'moment';

const BlogPostSummary = ({blogpost}) => {
  return (
    <div className="card-z-depth-0 blogpost-summary">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title">{blogpost.title}</h5>
        <div>
        <p>Posted by {blogpost.authorFirstName} {blogpost.authorLastName}</p>
        <p className="grey-text text-darken-3">{ moment(blogpost.createdAt.toDate()).calendar() }</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPostSummary