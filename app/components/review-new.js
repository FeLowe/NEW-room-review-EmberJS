import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    showReviewForm() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var reviewInput = {
        user: this.get('user'),
        date: this.get('date'),
        description: this.get('description'),
        room: this.get('room')
      };
      debugger;
      this.set('addNewReview', false);
      this.sendAction('saveReviewInsideRoomCp', reviewInput);
    }
  }
});
