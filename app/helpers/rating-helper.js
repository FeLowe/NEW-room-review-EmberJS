import Ember from 'ember';

export function ratingHelper(params) {
  var ratings = params[0].get('rating');

  if (ratings === 5){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>'+ '<span class="glyphicon glyphicon-star"></span>');

  } else if (ratings >= 4){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>');

  } else if (ratings >= 3){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>');

  } else if (ratings === 2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>' + '<span class="glyphicon glyphicon-star"></span>');

  } else if (ratings === 1){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  }
}
  export default Ember.Helper.helper(ratingHelper);
