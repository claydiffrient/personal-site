#!/usr/bin/env node

const { echo, exec } = require('shelljs');
const moment = require('moment');

function createDeployTag (target) {
  const date = moment().format('YYYY-MM-DD');
  const dateTagRegex = new RegExp(`${target}-${date}\\.(\\d{1,2})`);
  let tags = exec('git tag', { silent: true }).stdout;
  tags = tags.split('\n');
  const tagsTodayNumbers = tags.filter(tag => tag.match(dateTagRegex))
                              .map(tag => parseInt(tag.split('.')[1], 10))
                              .sort((a, b) => a - b);
  let newTag = `${target}-${date}.`;
  if (tagsTodayNumbers.length) {
    newTag += (tagsTodayNumbers[tagsTodayNumbers.length - 1] + 1);
  } else {
    newTag += '1';
  }

  echo(`New tag will be: ${newTag}`);

  if (exec(`git tag ${newTag}`).code !== 0) {
    echo('--> Git tag creation failed');
  } else {
    echo(`--> Git tag ${newTag} created successfully`);
    exec('git push --tags');
  }
}

if (exec('git push dokku next:master').code === 0) {
  createDeployTag('web');
} else {
  echo('--> Deploy failed, try again later');
}
