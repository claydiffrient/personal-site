import React from 'react';

const Footer = () => (
  <footer className="mdl-mini-footer">
    <div className="mdl-mini-footer__left-section">
      <div className="mdl-logo">© 2016 Clay Diffrient</div>
    </div>
    <div className="mdl-mini-footer__right-section">
      <ul className="mdl-mini-footer__link-list">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.thumbtack.com/-Sandy-UT/service/2692684"
          >
            <img
              alt="Thumbtack Professional Link"
              src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/inline.svg"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/claydiffrient" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-github" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/claydiffrient" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/claydiffrient" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/clay.diffrient" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-facebook-official" />
          </a>
        </li>
        <li>
          <a href="https://plus.google.com/+ClayDiffrient" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-google-plus" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@claydiffrient" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="fa fa-medium" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
