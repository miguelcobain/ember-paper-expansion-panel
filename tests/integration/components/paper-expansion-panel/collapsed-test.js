import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-expansion-panel/collapsed', 'Integration | Component | paper expansion panel/collapsed', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-expansion-panel/collapsed}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-expansion-panel/collapsed}}
      template block text
    {{/paper-expansion-panel/collapsed}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
