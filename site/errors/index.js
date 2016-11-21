import React from 'react';
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
 } from 'react-mdl';
import styles from './errors.css';

const ErrorPage = ({ title, message }) => (
  <Grid className={styles.root}>
    <Cell col={12} component={Card} shadow={2}>
      <CardTitle>{title}</CardTitle>
      <CardText>
        <p>{message}</p>
      </CardText>
    </Cell>
  </Grid>
);

ErrorPage.propTypes = {
  title: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
};

export const FourOhFour = () => (
  <ErrorPage
    title="Page Not Found"
    message="Looks like you were trying to find a page that doesn't exist. :("
  />
);

export const FiveHundred = () => (
  <ErrorPage
    title="Server Error"
    message="Something went horribly wrong, try again later"
  />
);
