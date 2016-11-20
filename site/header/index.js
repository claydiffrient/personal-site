import React from 'react';
import { Header, HeaderRow } from 'react-mdl';
import styles from './header.css';
import Navigation from '../navigation';


const SiteHeader = props => (
  <Header className={styles.header} waterfall hideTop>
    <HeaderRow className={styles.logoRow}>
      <span className="mdl-layout__title">
        <div className={styles.logo}>
          <span className="srOnly">Clay Diffrient's Logo</span>
        </div>
        <span className={`mdl-layout__title ${styles.title}`}>Clay Diffrient</span>
      </span>
    </HeaderRow>
    <Navigation path={props.path} />
  </Header>

);

SiteHeader.propTypes = {
  path: React.PropTypes.string,
};

export default SiteHeader;
