import Ember from 'ember';

export default Ember.Component.extend({
  readLater: Ember.inject.service(),

  actions: {
    removeFromReadLater(review) {
      this.get('readLater').remove(review);
    }
  }
});
