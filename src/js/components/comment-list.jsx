'use strict';

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment key={comment.key} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );

  }
});
