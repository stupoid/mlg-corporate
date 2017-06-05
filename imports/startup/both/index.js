// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

AccountsTemplates.configure({
  forbidClientAccountCreation: true,
  showForgotPasswordLink: true
});

AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'App.login',
    layoutTemplate: 'blank',
});

AccountsTemplates.configureRoute('ensureSignedIn', {
    template: 'App.login',
    layoutTemplate: 'blank',
});
