import React from 'react';
import styles from './header.css';
import Navigation from '../navigation';

const Header = props => (
  <header className={`mdl-layout__header mdl-layout__header--waterfall ${styles.header}`}>
    <div className={`mdl-layout__header-row ${styles.logoRow}`}>
      <span className="mdl-layout__title">
        <div className={styles.logo}>
          <span className={styles.srOnly}>Clay Diffrient's Logo</span>
        </div>
        <span className={`mdl-layout__title ${styles.title}`}>Clay Diffrient</span>
      </span>
    </div>
    <Navigation path={props.path} />
  </header>
);

Header.propTypes = {
  path: React.PropTypes.string,
};

export default Header;
