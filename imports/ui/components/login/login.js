import './login.html';

Template.login.onCreated(function loginOnCreated() {
  this.error = new ReactiveVar("");
});

Template.login.helpers({
  error() {
    return Template.instance().error.get();
  },
});

Template.login.events({
  'submit #loginForm'(event, instance) {
    event.preventDefault();

    const target = event.target;
    const email = target.loginInputEmail.value;
    const password = target.loginInputPassword.value;

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        instance.error.set(error.reason);
      } else {
        instance.error.set("");
        target.reset();
      }
    });
  },
});
