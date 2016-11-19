import React, { Component } from 'react';
import { Layout, Content } from 'react-mdl';
import Header from '../header';
import Navigation from '../navigation';
import Footer from '../footer';
import styles from './page.css';


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
      <Layout fixedHeader>
        <Header path={this.props.path} />
        <Navigation isDrawer path={this.props.path} />
        <Content className={styles.content}>
          {
            React.Children.map(this.props.children, c => (
              React.cloneElement(c, { path: this.props.path })
            ))
          }
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default Page;
