'use strict';

var Posts = React.createClass({
  getInitialState: function() {
    return {posts: []};
  },
  loadPostsFromServer: function() {
    $.ajax({
      url: 'http://localhost:9292/api/blog_posts',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({posts: data});
      }.bind(this),
      error: function(xhr, status, error) {
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadPostsFromServer();
  },
  render: function() {
    var posts = [];
    this.state.posts.forEach(function(post) {
      posts.push(<span><Post content={post.html} /><hr/></span>);
    });
    return (
      <div>{posts}</div>
    );
  }
});

React.render(
  <Posts/>,
  document.getElementById('all-posts')
);
