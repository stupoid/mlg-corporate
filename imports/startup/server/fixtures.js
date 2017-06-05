// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    console.log("First start up, admin:password as super-admin added");
    const userId = Accounts.createUser({ 'username': 'admin', 'password': 'password' });
    Roles.addUsersToRoles(userId, 'super-admin', Roles.GLOBAL_GROUP);
  }

  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
});
