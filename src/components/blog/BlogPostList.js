import React from 'react';
import BlogPostSummary from './BlogPostSummary';
import { Link } from 'react-router-dom';

const BlogPostList = ({blogposts}) => {
  return (
    <div className="blogpost-list section">
      { blogposts && blogposts.map(blogpost => {
        return (
          <Link to={"/blog/" + blogpost.id} key={blogpost.id}>
            <BlogPostSummary blogpost={blogpost} />
          </Link>
        )
      })}
    </div>
  )
}

export default BlogPostList