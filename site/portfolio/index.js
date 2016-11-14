import React from 'react';
import PROJECTS from './data';
import styles from './portfolio.css';

const Portfolio = () => (
  <div className={`mdl-grid ${styles.root}`}>
    {
      PROJECTS.map(p => (
        <div className="mdl-cell mdl-card mdl-shadow--4dp">
          <div className="mdl-card__media">
            <img className={styles.image} src={p.imageUrl} alt="" />
          </div>
          <div className={`mdl-card__title ${styles.cardTitle}`}>
            <h2 className="mdl-card__title-text">{p.title}</h2>
          </div>
          <div className="mdl-card__supporting-text">{p.text}</div>
          <div className="mdl-card__actions mdl-card--border">
            <a
              className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
              href="portfolio-example01.html"
            >
              Read more
            </a>
          </div>
        </div>
      ))
    }
  </div>
);

export default Portfolio;
