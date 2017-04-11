import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-expansion-panel/expanded/content', 'Integration | Component | paper expansion panel/expanded/content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-expansion-panel/expanded/content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-expansion-panel/expanded/content}}
      template block text
    {{/paper-expansion-panel/expanded/content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
