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
        $('#submit-message').text('Successfully published!');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.postUrl, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
        <div>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div id="post-content-editable"/>
            <input id="publish-post" className="btn btn-primary" type="submit" value="Publish" />
          </form>
          <div id="submit-message"></div>
      </div>
    );
  }
});

React.render(
  <PostForm postUrl="http://localhost:9292/api/blog_posts" />,
  document.getElementById('new-post')
);

var uploadImageToServer = function(alloyEditor) {
  var endpointToUploadImages = "http://localhost:9292/api/images/";
  var mediaEndpoint = "http://localhost:9292/media/";


  alloyEditor.get('nativeEditor').on('imageAdd', function(event) {
    var imgElement = getImgElement(event);

    $.ajax({
      url: endpointToUploadImages,
      dataType: 'json',
      type: 'POST',
      data: {'encoded_image': getEncodedImageFromSrc(imgElement),
             'image_type': getImageTypeFromSrc(imgElement)},
      success: function(createdFile) {
        imgElement['$'].src = mediaEndpoint + createdFile.name
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(endpointToUploadImages, status, err.toString());
      }.bind(this)
    });
  });
};

var getImgElement = function(event) {
  return event.data.el;
};

var getEncodedImageFromSrc = function(imgElement) {
    return imgElement['$']['src'].split(',')[1];
};

var getImageTypeFromSrc = function(imgElement) {
  return imgElement['$']['src'].split(',')[0].split(/[:/;]+/)[2];
};

var alloyEditor = AlloyEditor.editable('post-content-editable');
uploadImageToServer(alloyEditor);
