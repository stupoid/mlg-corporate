import './companies.html';
import { Companies } from '/imports/api/companies/companies.js';

Template.adminCompanies.onCreated(function () {
  Meteor.subscribe('companies.all');
});
