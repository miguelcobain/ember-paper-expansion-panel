# ember-paper-expansion-panel [![Build Status](https://travis-ci.org/miguelcobain/ember-paper-expansion-panel.svg?branch=master)](https://travis-ci.org/miguelcobain/ember-paper-expansion-panel) [![Ember Observer Score](http://emberobserver.com/badges/ember-paper-expansion-panel.svg)](http://emberobserver.com/addons/ember-paper-expansion-panel)

This is an [ember-paper](https://github.com/miguelcobain/ember-paper) addon that provides an implementation of [material expansion panels](https://material.io/guidelines/components/expansion-panels.html).

## Usage

An example usage:

```hbs
<PaperExpansionPanel as |Panel|>
  <Panel.collapsed>
    <div class="md-panel-title">
      Title
      {{@item}}
    </div>
    <div class="md-panel-summary">
      Summary
    </div>
    <PaperIcon @icon="keyboard_arrow_down" />
  </Panel.collapsed>
  <Panel.expanded as |Expanded|>
    <Expanded.header>
      <div class="md-panel-title">
        Expanded title
      </div>
      <div class="md-panel-summary">
        Expanded summary
      </div>
      <PaperIcon @icon="keyboard_arrow_up" />
    </Expanded.header>
    <Expanded.content>
      Content
    </Expanded.content>
    <Expanded.footer>
      <PaperButton @onClick={{action Panel.collapse}}>
        Cancel
      </PaperButton>
      <PaperButton @primary={{true}} @onClick={{action Panel.collapse}}>
        Save
      </PaperButton>
    </Expanded.footer>
  </Panel.expanded>
</PaperExpansionPanel>
```

## Demo

You can see how this addon looks like at https://miguelcobain.github.io/ember-paper-expansion-panel/

## Installation

```bash
ember install ember-paper-expansion-panel
```

Don't forget to import your styles in your `app.scss` **after** importing ember paper styles:

```scss
@import "ember-paper";
@import "ember-paper-expansion-panel";
```

## API

### `{{#paper-expansion-panel as |panel|}}`

- `expanded` - defaults to `false` - this toggles the expansion panel between expanded and collapsed modes.
- `onExpandedChange` - an action that is sent when a the panel is expanded or collapsed. You get two arguments, a boolean with the current state of `expanded` and the event object

This component yields a hash that contains:
- `collapsed` and `expanded` components
- a `collapse` action you can use to collapse the panel (e.g use it with paper-button's onClick)
- an `isExpanded` boolean that tells you the current state of the panel

### `{{#panel.collapsed}}`

Use this component to render what shows up in the collapsed state.
Its API is just like a `{{#paper-item}}`. It also yields a `controls` hash.


### `{{#panel.expanded as |expanded|}}`

This component yields a hash that contains the `header`, `content` and `footer` components.

### `{{#expanded.header}}`

Use this component to render what goes into the expanded header state.
Again, this component will behave like `{{#paper-item}}`. It also yields a `controls` hash.

### `{{#expanded.content}}`

Use this component to render what goes inside the expanded content area.

### `{{#expanded.footer}}`

Use this component to render what goes inside the expanded footer area.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

