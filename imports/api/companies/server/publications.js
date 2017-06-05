// All companies-related publications

import { Meteor } from 'meteor/meteor';
import { Companies } from '../companies.js';

Meteor.publish('companies.all', function () {
  console.log("finding all");
  return Companies.find();
});
