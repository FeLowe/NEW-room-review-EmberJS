import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  user: DS.attr(),
  description: DS.attr(),
  date: DS.attr(),
  room: DS.belongsTo('room', { async: true }),
  rating: DS.attr()
});
