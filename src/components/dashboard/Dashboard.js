import React, { Component } from 'react';
import Notifications from './Notifications';
import BlogPostList from '../blog/BlogPostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {

    const { blogposts, auth, notifications } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />
    }

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <BlogPostList blogposts={blogposts}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogposts: state.firestore.ordered.blogposts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogposts', limit: 5, orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  ])
)(Dashboard)