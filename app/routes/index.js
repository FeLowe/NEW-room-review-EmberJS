import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rooms: this.store.findAll('room'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveRoomInIndexRoute(roomInput) {
      var newRoom = this.store.createRecord('room', roomInput);
      newRoom.save();
      this.transitionTo('index');
    },
    updateRoomInIndexRoute(roomClickedOn, updateRoomInput) {
      Object.keys(updateRoomInput).forEach(function(key) {
        if(updateRoomInput[key]!==undefined) {
          roomClickedOn.set(key, updateRoomInput[key]);
        }
      });
      roomClickedOn.save();
      this.transitionTo('index');
    },
    destroyReviewInIndexRoute(currentReview) {
      currentReview.destroyRecord();
      this.transitionTo('room');
    },

  }
});
