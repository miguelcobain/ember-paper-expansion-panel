import Component from '@ember/component';
import layout from '../templates/components/paper-expansion-panel';

export default Component.extend({
  layout,
  tagName: 'md-expansion-panel',
  classNameBindings: ['expanded:md-open:md-close'],

  expanded: false,

  expand() {
    this.set('expanded', true);
    if (this.get('onExpandedChange')) {
      this.get('onExpandedChange')(true);
    }
  },

  collapse() {
    this.set('expanded', false);
    if (this.get('onExpandedChange')) {
      this.get('onExpandedChange')(false);
    }
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
