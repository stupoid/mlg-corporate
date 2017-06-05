import './sidebar.html';

Template.sidebar.onCreated(function sidebarOnCreated() {
});

Template.sidebar.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  // isAdmin() {
  //   console.log(Roles.userIsInRole(Meteor.user(), 'super-admin'));
  //   return Roles.userIsInRole(Meteor.user(), 'super-admin');
  // },
});

Template.sidebar.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
