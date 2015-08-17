'use strict';

var Menu = React.createClass({
  selectMenu: function(event) {
    this.setState({activeMenu: event.target.id});
  },
  getInitialState: function() {
    return {
      activeMenu: 'home'
    };
  },
  render: function() {
    return (
      <div className="blog-masthead">
        <div className="container">
          <nav className="blog-nav">
            <a id="home" className={this.state.activeMenu == 'home' ? "active blog-nav-item" : "blog-nav-item"}
               href="#" onClick={this.selectMenu}>
              Inicio
            </a>
            <a id="about" className={this.state.activeMenu == 'about' ? "active blog-nav-item" : "blog-nav-item"}
               href="#" onClick={this.selectMenu}>
              Acerca del sito
            </a>
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
