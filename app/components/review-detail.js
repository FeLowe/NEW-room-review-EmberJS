import Ember from 'ember';

export default Ember.Component.extend({

  fullAddress: Ember.computed('room.address', 'room.city', function() {
      return this.get('room.address') + ', ' + this.get('room.city');
      debugger;
    }),

  sortBy: ['ranting:asc'],
  sortedReviews: Ember.computed.sort('room.reviews', 'sortBy'),

  actions: {
    deleteReview(currentReview) {
      if (confirm('Are you sure you want to delete this review?')) {
        this.sendAction('destroyReviewCp', currentReview);
        }
      }
    }
});
