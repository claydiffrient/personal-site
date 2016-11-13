import React, { Component } from 'react';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';

class Page extends Component {

  static propTypes = {
    path: React.PropTypes.string,
    children: React.PropTypes.node,
  };

  componentDidMount () {
    // window.componentHandler.upgradeDom();
  }

  render () {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header path={this.props.path} />
        <Navigation isDrawer path={this.props.path} />
        <main className="mdl-layout__content">
          {
            React.Children.map(this.props.children, c => (
              React.cloneElement(c, { path: this.props.path })
            ))
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Page;
