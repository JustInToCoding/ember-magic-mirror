import Object from 'ember-object';
import RSVP from 'rsvp';

export default Object.extend({
  /**
   * Extacts session information from authentication response
   *
   * @public
   * @param {object} authentication - hash containing response payload
   * @return {Promise}
   */
  open(authentication) {
    debugger;
    return RSVP.resolve({
      provider: authentication.provider,
      uid: authentication.uid,
      currentUser: authentication[authentication.provider]
    });
  }
});