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
        <p>
          As you know by now my name is Clay Diffrient, but you probably want to know
          a bit more than that since you've made your way to this page.  Let me give you
          some details.
        </p>
        <p>
          I figure I can summarize a lot about me in a table so that's what I've done.
        </p>
        <table>
          <tbody>
            <tr>
              <th scope="row">Profession</th>
              <td>Software Engineer (front-end mostly)</td>
            </tr>
            <tr>
              <th scope="row">Family</th>
              <td>Married, Father of 2 sons.</td>
            </tr>
            <tr>
              <th scope="row">Politics</th>
              <td>Libertarian-leaning independent</td>
            </tr>
          </tbody>
        </table>
      </CardText>
    </Cell>
  </Grid>
);

export default About;
