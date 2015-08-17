'use strict';

var Post = React.createClass({
  render: function() {
    return (
      <div className="blog-post" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    );
  }
});
