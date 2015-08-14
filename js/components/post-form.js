'use strict';

var PostForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
      url: this.props.postUrl,
      dataType: 'json',
      type: 'POST',
      data: {'html':$('#post-content-editable').html()},
      success: function() {
        alert('Published succesfully!!');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.postUrl, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <form className="postForm form-group" onSubmit={this.handleSubmit}>
        <div id="post-content-editable"/>
        <input className="btn btn-primary" type="submit" value="Publish" />
      </form>
    );
  }
});

React.render(
  <PostForm postUrl="http://localhost:9292/api/blogPosts" />,
  document.getElementById('content')
);

AlloyEditor.editable('post-content-editable');
