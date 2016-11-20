import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import FontFaceObserver from 'fontfaceobserver';
import 'react-mdl/extra/material';
import 'react-mdl/extra/css/material.green-blue.min.css';
import './shared/colors.css';
import Page from './page';
import Portfolio from './portfolio';

const getProperPageComponent = (path) => {
  switch (path) {
    case '/':
      return Portfolio;
    default:
      return Portfolio;
  }
};

const getHTMLForPage = (path) => {
  const InnerComponent = getProperPageComponent(path);
  return ReactDOMServer.renderToString(
    <Page path={path}>
      <InnerComponent />
    </Page>,
  );
};

const getTemplate = (path, query = {}, assets = {}) => {
  const template = `<!doctype html>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <style>
        .fonts-loaded body {
          font-family: Roboto, Verdana, sans-serif;
        }
      </style>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="Clay Diffrient Software Solutions, a web software development shop." />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css" />
      <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <title>Clay Diffrient</title>
      <link href="/${assets.styles}" rel="stylesheet" />
      <script type="text/javascript">
         if (window.sessionStorage.getItem('fonts-loaded')) {
           document.documentElement.classList.add('fonts-loaded');
         }
      </script>
    </head>
    <body>
      <div id="main">${getHTMLForPage(path)}</div>
      <script src="/${assets.main}"></script>
    </body>
  </html>`;

  return template;
};

// Client render (optional):
if (typeof document !== 'undefined') {
  const font = new FontFaceObserver('Roboto');
  font.load().then(() => {
    window.document.documentElement.classList.add('fonts-loaded');
    window.sessionStorage.setItem('fonts-loaded', true);
  }).catch(() => (
    window.sessionStorage.setItem('fonts-loaded', false)
  ));
  const path = window.location.pathname;
  const Component = getProperPageComponent(path);
  ReactDOM.render(
    <Page path={path}>
      <Component />
    </Page>
    , document.getElementById('main'));
}

module.exports = function render (locals, callback) {
  const assetKeys = Object.keys(locals.webpackStats.compilation.assets);
  const assets = {};
  assetKeys.forEach((ak) => {
    if (ak.endsWith('.css')) {
      assets.styles = ak;
    } else if (ak.endsWith('.js')) {
      assets.main = ak;
    }
  });

  callback(null, getTemplate(locals.path, {}, assets));
};
