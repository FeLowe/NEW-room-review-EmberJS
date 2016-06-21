import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rooms: this.store.findAll('room'),
      reviews: this.store.findAll('review')
    });
  },
   actions: {
     saveReviewInsideRoomRoute(reviewInput) {
       var newReview = this.store.createRecord('review', reviewInput);
       var room = reviewInput.room;
       room.get('reviews').addObject(newReview);
       newReview.save().then(function() {
         return room.save();
         debugger;
       });
       this.transitionTo('room', reviewInput.room);
     },
     destroyAnswerRoute(currentReview) {
       currentReview.destroyRecord();
       this.transitionTo('room');
  },
}
  // saveReviewInsideReviewRoute(reviewInput) {
  //     var newReview = this.store.createRecord('review', reviewInput);
  //     var room = reviewInput.room;
  //     room.get('reviews').addObject(newReview);
  //     newReview.save().then(function() {
  //       return room.save();
  //     });
  //     this.transitionTo('review', reviewInput.room);
  //   },
});
