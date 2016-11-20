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
import PROJECTS from './data';
import styles from './portfolio.css';

const Portfolio = () => (
  <Grid className={styles.root}>
    <Cell col={12} component={Card} shadow={2}>
      <CardTitle>
        Welcome
      </CardTitle>
      <CardText>
        <p>My name is Clay Diffrient.  I'm a software engineer based out of Utah.  I specialize mostly in front-end web development, but
        I have experience doing a little bit of everything.  My goal is to provide solutions that represent my clients and are customized
         to their needs.</p>

        <p>Please checkout my portfolio of recent work below and take a look around at the other sections.</p>
      </CardText>
    </Cell>
    {
      PROJECTS.map(p => (
        <Cell shadow={2} component={Card}>
          <CardMedia>
            <img className={styles.image} src={p.imageUrl} alt="" />
          </CardMedia>
          <CardTitle className={styles.cardTitle}>
            {p.title}
          </CardTitle>
          <CardText>
            {p.text}
          </CardText>
          <CardActions border>
            <Button
              colored
              ripple
              accent
              href={p.pageLink}
            >
                Read More
              </Button>
          </CardActions>
        </Cell>
      ))
    }
  </Grid>
);

export default Portfolio;
