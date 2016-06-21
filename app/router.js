import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  // this.route('review');
  this.route('review', {path: '/review/:review_id'});
  // this.route('room');
  this.route('room', {path: '/room/:room_id'});
});

export default Router;
