import Ember from 'ember';

export function roomPopularity(roomInput) {
  var roomReviwed = roomInput[2];

  if (roomReviwed .get('reviews').get('length') >=3 ){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-pencil"></span>');
  }
}
export default Ember.Helper.helper(roomPopularity);
