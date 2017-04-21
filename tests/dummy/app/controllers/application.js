import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({
  items: [
    1, 2, 3, 4, 5
  ],

  actions: {
    alert() {
      this.set('dialogOpen', true);
    }
  }
});