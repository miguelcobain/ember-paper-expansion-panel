import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { find, click, keyEvent } from 'ember-native-dom-helpers';

module('Integration | Component | paper expansion panel', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the collapsed state', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#paper-expansion-panel as |panel|}}
        {{#panel.collapsed}}
          collapsed content
        {{/panel.collapsed}}
      {{/paper-expansion-panel}}
    `);

    assert.equal(find('.md-button').textContent.trim(), 'collapsed content');
  });

  test('it renders the expanded state when button is clicked', async function(assert) {
    assert.expect(3);

    await render(hbs`
      {{#paper-expansion-panel as |panel|}}
        {{#panel.collapsed}}
          collapsed content
        {{/panel.collapsed}}

        {{#panel.expanded as |expanded|}}
          {{#expanded.header}}
            expanded header
          {{/expanded.header}}

          {{#expanded.content}}
            expanded content
          {{/expanded.content}}

          {{#expanded.footer}}
            expanded footer
          {{/expanded.footer}}

        {{/panel.expanded}}
      {{/paper-expansion-panel}}
    `);

    await click('button.md-button');

    assert.equal(find('md-list-item').textContent.trim(), 'collapsed content');
    assert.equal(find('md-expansion-panel-content').textContent.trim(), 'expanded content');
    assert.equal(find('md-expansion-panel-footer').textContent.trim(), 'expanded footer');
  });

  test('it renders the expanded state when expanded=true', async function(assert) {
    assert.expect(3);

    await render(hbs`
      {{#paper-expansion-panel expanded=true as |panel|}}
        {{#panel.collapsed}}
          collapsed content
        {{/panel.collapsed}}

        {{#panel.expanded as |expanded|}}
          {{#expanded.header}}
            expanded header
          {{/expanded.header}}

          {{#expanded.content}}
            expanded content
          {{/expanded.content}}

          {{#expanded.footer}}
            expanded footer
          {{/expanded.footer}}

        {{/panel.expanded}}
      {{/paper-expansion-panel}}
    `);

    assert.equal(find('md-list-item').textContent.trim(), 'collapsed content');
    assert.equal(find('md-expansion-panel-content').textContent.trim(), 'expanded content');
    assert.equal(find('md-expansion-panel-footer').textContent.trim(), 'expanded footer');
  });

  test('toggling expanded toggles states', async function(assert) {
    assert.expect(4);

    await render(hbs`
      {{#paper-expansion-panel expanded=expanded as |panel|}}
        {{#panel.collapsed}}
          collapsed content
        {{/panel.collapsed}}

        {{#panel.expanded as |expanded|}}
          {{#expanded.header}}
            expanded header
          {{/expanded.header}}

          {{#expanded.content}}
            expanded content
          {{/expanded.content}}

          {{#expanded.footer}}
            expanded footer
          {{/expanded.footer}}

        {{/panel.expanded}}
      {{/paper-expansion-panel}}
    `);

    assert.equal(find('.md-button').textContent.trim(), 'collapsed content');

    this.set('expanded', true);

    assert.equal(find('md-list-item').textContent.trim(), 'collapsed content');
    assert.equal(find('md-expansion-panel-content').textContent.trim(), 'expanded content');
    assert.equal(find('md-expansion-panel-footer').textContent.trim(), 'expanded footer');
  });

  test('yielded expand/collapse actions work', async function(assert) {
    assert.expect(3);

    await render(hbs`
      {{#paper-expansion-panel as |panel|}}
        {{#panel.collapsed}}
          collapsed content
          <div class="expand" onclick={{action panel.expand}}></div>
        {{/panel.collapsed}}

        {{#panel.expanded as |expanded|}}
          {{#expanded.header}}
            expanded header
          {{/expanded.header}}

          {{#expanded.content}}
            expanded content
            <div class="collapse" onclick={{action panel.collapse}}></div>
          {{/expanded.content}}

          {{#expanded.footer}}
            expanded footer
          {{/expanded.footer}}

        {{/panel.expanded}}
      {{/paper-expansion-panel}}
    `);

    assert.ok(find('md-expansion-panel').classList.contains('md-close'));

    await click('.expand');
    assert.ok(find('md-expansion-panel').classList.contains('md-open'));

    await click('.collapse');
    assert.ok(find('md-expansion-panel').classList.contains('md-close'));
  });

  test('onExpandedChange is sent on expand/collapse', async function(assert) {
    assert.expect(2);

    this.set('onExpandedChange', (state) => {
      assert.ok(state, 'action was sent with true');
    });

    await render(hbs`
      {{#paper-expansion-panel onExpandedChange=(action onExpandedChange) as |panel|}}
        {{#panel.collapsed}}
          collapsed content
        {{/panel.collapsed}}

        {{#panel.expanded as |expanded|}}
          {{#expanded.header}}
            expanded header
          {{/expanded.header}}

          {{#expanded.content}}
            expanded content
          {{/expanded.content}}

          {{#expanded.footer}}
            expanded footer
          {{/expanded.footer}}

        {{/panel.expanded}}
      {{/paper-expansion-panel}}
    `);

    await click('button.md-button');

    this.set('onExpandedChange', (state) => {
      assert.ok(state, 'action was sent with true');
    });

    await click('button.md-button');
  });

  test('pressing enter/escape expands/collapses', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#paper-expansion-panel as |panel|}}
        {{#panel.collapsed}}
          collapsed content
        {{/panel.collapsed}}

        {{#panel.expanded as |expanded|}}
          {{#expanded.header}}
            expanded header
          {{/expanded.header}}

          {{#expanded.content}}
            expanded content
          {{/expanded.content}}

          {{#expanded.footer}}
            expanded footer
          {{/expanded.footer}}

        {{/panel.expanded}}
      {{/paper-expansion-panel}}
    `);

    await keyEvent('.md-button', 'keydown', 13);
    assert.ok(find('md-expansion-panel').classList.contains('md-open'));

    await keyEvent('.md-button', 'keydown', 27);
    assert.ok(find('md-expansion-panel').classList.contains('md-close'));
  });
});
