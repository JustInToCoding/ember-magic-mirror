import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  actions: {
    signIn(provider) {
      this.get('session').authenticate('authenticator:torii', provider).then(() => {
        // Session set
        // TODO: Get user data
      });
    },
    signOut() {
      debugger;
      this.get('session').invalidate();
    }
  }
});