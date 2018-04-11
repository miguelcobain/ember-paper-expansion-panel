import Controller from '@ember/controller';

export default Controller.extend({
  items: Object.freeze([
    1, 2, 3, 4, 5
  ]),

  actions: {
    alert() {
      this.set('dialogOpen', true);
    }
  }
});
