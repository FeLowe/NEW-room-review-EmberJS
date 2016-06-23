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
        user: this.get('user'),
        date: this.get('date'),
        description: this.get('description'),
        room: this.get('room'),
        rating: parseInt(this.get('rating'))
        // rating: parseInt(this.get('one')),
        // rating: parseInt(this.get('two')),
        // rating: parseInt(this.get('tree')),
        // rating: parseInt(this.get('four')),
        // rating: parseInt(this.get('five'))
      };
      // debugger;
      this.set('addNewReview', false);
      this.sendAction('saveReviewInsideRoomCp', reviewInput);
    }
  }
});
