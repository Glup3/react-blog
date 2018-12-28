import React, { Component } from 'react';
import Notifications from './Notifications';
import BlogPostList from '../blog/BlogPostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {

    const { blogposts } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <BlogPostList blogposts={blogposts}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    blogposts: state.firestore.ordered.blogposts
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogposts' }
  ])
)(Dashboard)