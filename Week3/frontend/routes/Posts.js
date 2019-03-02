import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

    handleSubmit(event) {
        event.preventDefault()
        let data = {
            item: this.state.posts
        }
    
    console.log(data);
    this.componentDidMount () {
    fetch('http://localhost:8080/todo')
      .then(response => response.json())
      .then(posts => (this.setState({posts})))
      .catch(function(err) {
          console.log(err)
      });
    }
  } 
  logChange(e) {
      this.setState({[e.target.name]: e.target.value});
  }


  render() {
    return (<div className = "container todo-list">
      My ToDo List
      <ul>
        {this.state.posts.map(post => 
        <li>
          {post.body}
        </li>
        )}
      </ul>
    </div>);
  }
}

export default Posts;