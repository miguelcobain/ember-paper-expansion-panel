import Ember from 'ember';
import layout from '../templates/components/paper-expansion-panel';
const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'md-expansion-panel',
  attributeBindings: ['tabindex'],
  classNameBindings: ['isOpen:md-open:md-close'],
  tabindex: 0,

  expand() {
    this.set('isOpen', true);
  },

  collapse() {
    this.set('isOpen', false);
  },

  keyDown(ev) {
    switch (ev.keyCode) {
      case 13: // enter
        this.expand();
        break;
      case 27: // escape
        this.collapse();
        break;
    }
  }
});
