import Ember from 'ember';

export default Ember.Component.extend({
  updateReviewForm: false,
  actions: {
    updateReviewForm() {
      this.set('updateReviewForm', true);
    },
    updateReview(reviewClickedOn) {
      var updateReviewInput = {
        date: this.get('dateUpdate'),
        description: this.get('descriptionUpdate'),
        rating: parseInt(this.get('rating')),
        room: this.get('room'),
        user: this.get('userUpdate')
      };
      this.set('updateReviewForm', false);
      this.sendAction('update', reviewClickedOn, updateReviewInput);
    },
    selectRating(selection){
      if (selection) {
        this.set('rating', selection);
      }
    },
  }
});
