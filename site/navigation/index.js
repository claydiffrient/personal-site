import React from 'react';
import classnames from 'classnames';
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

const Navigation = (props) => {
  const activeRoute = props.path;

  const rootClasses = classnames({
    'mdl-layout__header-row': !props.isDrawer,
    'mdl-layout--large-screen-only': !props.isDrawer,
    [styles.root]: !props.isDrawer,
    'mdl-layout__drawer': props.isDrawer,
    'mdl-layout--small-screen-only': props.isDrawer,
  });

  const navClasses = classnames({
    'mdl-navigation': true,
    'mdl-typography--body-1-force-preferred-font': true,
    [styles.nav]: !props.isDrawer,
  });


  return (
    <div className={rootClasses}>
      <nav className={navClasses}>
        {
            LINKS.map((l) => {
              const linkClasses = classnames({
                'mdl-navigation__link': true,
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
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  isDrawer: React.PropTypes.bool,
  path: React.PropTypes.string,
};

export default Navigation;
