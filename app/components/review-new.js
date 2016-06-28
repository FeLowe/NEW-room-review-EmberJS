import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    showReviewForm() {
      this.set('addNewReview', true);
    },
    selectRating(selection){
      if (selection) {
        this.set('rating', selection);
      }
    },
    saveReview() {
      var reviewInput = {
        date: this.get('date'),
        description: this.get('description'),
        rating: parseInt(this.get('rating')),
        room: this.get('room'),
        user: this.get('user')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReviewInsideRoomCp', reviewInput);
    }
  }
});
