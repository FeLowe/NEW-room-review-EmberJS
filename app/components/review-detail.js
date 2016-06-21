import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  deleteReview(currentReview) {
    if (confirm('Are you sure you want to delete this review?')) {
      this.sendAction('destroyReviewCp', currentReview);
    }
  }
}
});
