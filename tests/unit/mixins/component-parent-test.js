import EmberObject from '@ember/object';
import ComponentParentMixin from 'ember-responsive-tabs/mixins/component-parent';
import { module, test } from 'qunit';

module('Unit | Mixin | component parent');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentParentObject = EmberObject.extend(ComponentParentMixin);
  let subject = ComponentParentObject.create();
  assert.ok(subject);
});
