import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  type: DS.attr(),
  city: DS.attr(),
  address: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', { async: true })
});
