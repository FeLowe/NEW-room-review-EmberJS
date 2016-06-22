import Ember from 'ember';

export function ratingHelper(params) {
  // var ratings = params[0];
  // debugger;
  var reviewRating;
  if (params === 5){
    reviewRating = '*****';
    // return '<span class="glyphicon glyphicon-star"></span>';
  // } else if (ratings >= 4){
  //   return '****';
    // return '<span class="glyphicon glyphicon-star"></span>';
  // } else if (ratings >= 3){
  //   return '***';
    // return '<span class="glyphicon glyphicon-star"></span>';
  } else if (params === 2){
    reviewRating = '**';
    // return '<span class="glyphicon glyphicon-star"></span>';
  // }else if (ratings >= 1){
  //   return '*';
    // return '<span class="glyphicon glyphicon-star"></span>';
  }
  return reviewRating;
}
export default Ember.Helper.helper(ratingHelper);
