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
