import Ember from 'ember';

export default Ember.Component.extend({
  updateReviewForm: false,
  actions: {
    updateReviewForm() {
      this.set('updateReviewForm', true);
    },
    updateReview(reviewClickedOn) {
      var updateReviewInput = {
        user: this.get('userUpdate'),
        date: this.get('dateUpdate'),
        description: this.get('descriptionUpdate'),
        rating: parseInt(this.get('rating'))
      };
      this.set('updateReviewForm', false);
      this.sendAction('updateReviewCp', reviewClickedOn, updateReviewInput);
    }
  }
});
