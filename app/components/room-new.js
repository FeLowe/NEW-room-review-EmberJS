import Ember from 'ember';

export default Ember.Component.extend({
  addNewRoom: false,
  actions: {
    showRoomForm() {
      this.set('addNewRoom', true);
    },
    saveRoom() {
      var roomInput = {
        type: this.get('type'),
        city: this.get('city'),
        address: this.get('address'),
        image: this.get('image')
      };
      this.set('addNewQuestion', false);

      this.sendAction('saveRoomInputCp', roomInput);
    }
  }

});
