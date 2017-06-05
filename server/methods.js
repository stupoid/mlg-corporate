Meteor.methods({
  // 'login'(email, password) {
  //   return null;
  // },
  'find_by_username'(username) {
    const user = Accounts.findUserByUsername(username);
    return user;
  },
});
