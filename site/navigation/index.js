import React from 'react';
import classnames from 'classnames';
import { Navigation, Drawer, HeaderRow } from 'react-mdl';
import styles from './navigation.css';

const LINKS = [{
  text: 'Portfolio',
  route: '/',
}, {
  text: 'Blog',
  route: '/blog',
}, {
  text: 'About',
  route: '/about',
}, {
  text: 'Contact',
  route: '/contact',
},
];

const SiteNavigation = (props) => {
  const activeRoute = props.path;

  const navClasses = classnames({
    [styles.nav]: !props.isDrawer,
  });

  const renderNav = () => (
    <Navigation className={navClasses}>
      {
             LINKS.map((l) => {
               const linkClasses = classnames({
                 [styles.link]: !props.isDrawer,
                 [styles.active]: (l.route === '/') ?
                                  !props.isDrawer && (activeRoute === l.route) :
                                  !props.isDrawer && activeRoute.match(new RegExp(l.route)),
               });
               return (
                 <a
                   className={linkClasses}
                   key={l.route}
                   href={l.route}
                 >
                   {l.text}
                 </a>
               );
             })
           }
    </Navigation>
    );


  if (props.isDrawer) {
    return (
      <Drawer>
        {renderNav()}
      </Drawer>
    );
  }
  return (
    <HeaderRow className={styles.root}>
      {renderNav()}
    </HeaderRow>
  );
};

SiteNavigation.propTypes = {
  isDrawer: React.PropTypes.bool,
  path: React.PropTypes.string,
};

export default SiteNavigation;
