import Ember from 'ember';
import layout from '../templates/components/paper-expansion-panel';
const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'md-expansion-panel',
  attributeBindings: ['tabindex'],
  classNameBindings: ['isExpanded:md-open:md-close'],
  tabindex: 0,

  shouldRegister: false,

  expand() {
    this.set('isExpanded', true);
    this.sendAction('onExpandedChange', true);
  },

  collapse() {
    this.set('isExpanded', false);
    this.sendAction('onExpandedChange', false);
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
