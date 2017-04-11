import Ember from 'ember';
import layout from '../../../templates/components/paper-expansion-panel/expanded/header';
const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'md-expansion-panel-header',

  click() {
    this.sendAction('onClose');
  }
});
