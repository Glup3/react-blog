import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBlogPost } from '../../store/actions/blogActions'
import { Redirect } from 'react-router-dom';

class CreateBlogPost extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    //TODO Validation
    if (this.state.title === "") {
      return;
    }

    if (this.state.content === "") {
      return;
    }

    this.props.createBlogPost(this.state);
    this.props.history.push("/");
  }

  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />
    }

    return (
      <div className="container my-form">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a new Blog Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" value={this.state.content} onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue waves-effect waves-purple">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createBlogPost: (blogPost) => dispatch(createBlogPost(blogPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlogPost)
