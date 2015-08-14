'use strict';

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment" id="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
      </div>
    );
  }
});
