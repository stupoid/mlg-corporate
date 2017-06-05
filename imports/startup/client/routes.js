import '../../ui/layouts/body/body.js';
import '../../ui/layouts/blank/blank.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/admin/admin.js';
import '../../ui/pages/companies/companies.js';
import '../../ui/pages/not-found/not-found.js';

Router.plugin('ensureSignedIn');

Router.configure({
  layoutTemplate: 'appBody',
  onBeforeAction() {
    this.next();
  }
});

Router.route('/', {
  name: 'appHome',
});

Router.route('/admin', {
  name: 'appAdmin',
});

Router.route('/companies', {
  name: 'adminCompanies',
  // waitOn() {
  //   return Meteor.subscribe('companies.all');
  // },
});
