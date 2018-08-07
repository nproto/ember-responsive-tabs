import EmberObject from '@ember/object';
import ComponentChildMixin from 'ember-responsive-tabs/mixins/component-child';
import { module, test } from 'qunit';

module('Unit | Mixin | component child');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentChildObject = EmberObject.extend(ComponentChildMixin);
  let subject = ComponentChildObject.create();
  assert.ok(subject);
});
