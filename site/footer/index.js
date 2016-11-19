import React from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

const SiteFooter = () => (
  <Footer size="mini">
    <FooterSection type="left" logo="© 2016 Clay Diffrient" />
    <FooterSection type="right">
      <FooterLinkList>
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
        <a href="https://github.com/claydiffrient" className="mdl-button mdl-js-button mdl-button--icon">
          <i className="fa fa-github" />
        </a>
        <a href="https://linkedin.com/in/claydiffrient" className="mdl-button mdl-js-button mdl-button--icon">
          <i className="fa fa-linkedin" />
        </a>
        <a href="https://twitter.com/claydiffrient" className="mdl-button mdl-js-button mdl-button--icon">
          <i className="fa fa-twitter" />
        </a>
        <a href="https://facebook.com/clay.diffrient" className="mdl-button mdl-js-button mdl-button--icon">
          <i className="fa fa-facebook-official" />
        </a>
        <a href="https://plus.google.com/+ClayDiffrient" className="mdl-button mdl-js-button mdl-button--icon">
          <i className="fa fa-google-plus" />
        </a>
        <a href="https://medium.com/@claydiffrient" className="mdl-button mdl-js-button mdl-button--icon">
          <i className="fa fa-medium" />
        </a>
      </FooterLinkList>
    </FooterSection>
  </Footer>
);

export default SiteFooter;
