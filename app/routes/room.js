import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('room', params.room_id);
  },
  actions: {
    saveReviewInsideRoomRoute(reviewInput) {
      var newReview = this.store.createRecord('review', reviewInput);
      var room  = reviewInput.room;
      room.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return room.save();
      });
      this.transitionTo('room', reviewInput.room);
    },

    updateReviewInsideRoomRoute(reviewClickedOn, updateReviewInput) {
      Object.keys(updateReviewInput).forEach(function(key) {
        if(updateReviewInput[key]!==undefined) {
          reviewClickedOn.set(key, updateReviewInput[key]);
        }
      });
      reviewClickedOn.save();
      this.transitionTo('room');
    },

    destroyReviewInsideRoomRoute(room){
      var review_deletions = room.get('reviews').map(function(review){
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function(){
        return room.destroyRecord();
      });
      debugger;
      this.transitionTo('room');
    }
  }
});
