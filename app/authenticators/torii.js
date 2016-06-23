import Torii from 'ember-simple-auth/authenticators/torii';
import service from 'ember-service/inject';

export default Torii.extend({
  torii: service(),
  authenticate(options) {
    return this._super(options).then((data) => {
      console.log(data);
    });
  }
});