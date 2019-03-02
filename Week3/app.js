import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch('http://localhost:8080/todo')
      .then(response => response.json())
      .then(posts => (this.setState({posts})))
  } 

  render() {
    return (<div>
      Hello World
      <ul>
        {this.state.posts.map(post => }
        <li>
          {post.body}
        </li>
      </ul>
    </div>);
  }
}

ReactDOM.render(
  <Posts />,
  mountNode
);