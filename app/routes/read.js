import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    rooms: this.store.findAll('room'),
    reviews: this.store.findAll('review')
    });
  }
});
