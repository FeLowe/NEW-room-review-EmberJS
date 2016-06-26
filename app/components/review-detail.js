import Ember from 'ember';

export default Ember.Component.extend({

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
