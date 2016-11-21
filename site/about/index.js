import React from 'react';
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMedia,
  Button,
 } from 'react-mdl';
import styles from './about.css';

const About = () => (
  <Grid className={styles.root}>
    <Cell col={12} component={Card} shadow={2}>
      <CardTitle>
        <h1 className="mdl-card__title-text">About</h1>
      </CardTitle>
      <CardText>
        <p>My name is Clay Diffrient.  I'm a software engineer based out of Utah.  I specialize mostly in front-end web development, but
        I have experience doing a little bit of everything.  My goal is to provide solutions that represent my clients and are customized
         to their needs.</p>

        <p>Please checkout my portfolio of recent work below and take a look around at the other sections.</p>
      </CardText>
    </Cell>
  </Grid>
);

export default About;
