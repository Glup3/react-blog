import React from 'react';

const BlogPostSummary = ({blogpost}) => {
  return (
    <div className="card-z-depth-0 blogpost-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{blogpost.title}</span>
        <p>Posted by Phu</p>
        <p className="grey-text">Date</p>
      </div>
    </div>
  )
}

export default BlogPostSummary