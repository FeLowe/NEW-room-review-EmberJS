import Ember from 'ember';

export default Ember.Service.extend({
  reviews: [],

  add(review) {
    debugger;
    this.get('reviews').pushObject(review);
  },
  remove(review) {
  this.get('reviews').removeObject(review);
  }
});
