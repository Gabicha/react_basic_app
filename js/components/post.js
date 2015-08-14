'use strict';

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data:data});
      }.bind(this),
      error: function(xhr, status, error) {
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    });
  },
  loadPostFromServer: function() {
    $.ajax({
      url: 'http://localhost:9292/api/blogPosts',
      dataType: 'json',
      cache: false,
      success: function(data) {
        $('#lastPostContent').html(data.html);
      }.bind(this),
      error: function(xhr, status, error) {
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        console.log('success', data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handlePostSubmit: function() {
    $.ajax({
      url: this.props.postUrl,
      dataType: 'json',
      type: 'POST',
      data: {'html':$('#contentEditable').html()},
      success: function() {
        alert('Published succesfully!!');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.postUrl, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data:[]};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    this.loadPostFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <PostForm onPostSubmit={this.handlePostSubmit}/>
      </div>
    );
  }
});

React.render(
  <CommentBox url="http://localhost:9292/api/comments"
  postUrl="http://localhost:9292/api/blogPosts"/>,
  document.getElementById('content')
);
