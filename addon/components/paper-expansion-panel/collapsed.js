import Ember from 'ember';
import layout from '../../templates/components/paper-expansion-panel/collapsed';
const { Component, computed, run } = Ember;

export default Component.extend({
  layout,
  tagName: '',

  isHoveredOrOpen: computed.or('isHovered', 'menuOpen'),

  onMouseEnter() {
    this.set('isHovered', true);
    this.sendAction('onHoverChange', true);
  },

  onMouseLeave() {
    this.set('isHovered', false);
    this.sendAction('onHoverChange', false);
  },

  // we need to do this because ebd's onClose action
  // triggers before the component is destroyed
  onClose() {
    run.next(() => {
      if (!this.isDestroyed && !this.isDestroying) {
        this.set('menuOpen', false);
      }
    });
  }
});
