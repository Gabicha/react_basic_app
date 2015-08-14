'use strict';

var Menu = React.createClass({
  render: function() {
    return (
      <div className="blog-masthead">
        <div className="container">
          <nav className="blog-nav">
            <a className="blog-nav-item active" href="#">Inicio</a>
            <a className="blog-nav-item" href="#">Todos los posts</a>
            <a className="blog-nav-item" href="#">Como postear?</a>
            <a className="blog-nav-item" href="#">Acerca del sitio</a>
          </nav>
        </div>
      </div>
    )
  }
});

React.render(
  <Menu/>,
  document.getElementById('menu')
);
