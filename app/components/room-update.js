import Ember from 'ember';

export default Ember.Component.extend({
  updateRoomForm: false,
  actions: {
    updateRoomForm() {
      this.set('updateRoomForm', true);
    },
    updateRoom(roomClickedOn) {
      var updateRoomInput = {
        type: this.get('typeUpdate'),
        city: this.get('cityUpdate'),
        address: this.get('addressUpdate'),
        image: this.get('imageUpdate')
      };
      this.set('updateRoomForm', false);
      this.sendAction('updateRoomCp', roomClickedOn, updateRoomInput);
    }
  }
});
