import Ember from 'ember';

export function roomPopularity(room) {
  var room = room[0];
  if (room.get('reviews').get('length') >=3 ){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}
export default Ember.Helper.helper(roomPopularity);
