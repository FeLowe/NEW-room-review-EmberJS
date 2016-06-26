import Ember from 'ember';

export default Ember.Component.extend({
  readLater: Ember.inject.service(),

  actions: {
    addToReadLater(review) {
      this.get('readLater').add(review);
    }
  }
});
