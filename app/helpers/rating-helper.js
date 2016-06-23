import Ember from 'ember';

export function ratingHelper(params) {
  var ratings = params[0].get('rating');

  if (ratings === 5){
    return '*****';
    // return '&#9733;&#9733;&#9733;&#9733;&#9733;'

  } else if (ratings >= 4){
    return '****';
    // return '&#9733;&#9733;&#9733;&#9733;'

  } else if (ratings >= 3){
    return '***';
    // return '&#9733;&#9733;&#9733;'

  } else if (ratings === 2){
    return '***'
    // return '&#9733;&#9733;'

  } else if (ratings === 1){
    return '*';
    // return '&#9733;'
  }
  export default Ember.Helper.helper(ratingHelper);
