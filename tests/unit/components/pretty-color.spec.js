moduleForComponent('pretty-color', 'PrettyColorComponent');

var template = function() {/*
  {{pretty-color color=name}}
*/}

test('applies color by name', function() {
  expect(2);
  var component = buildComponent(this, { name: 'green' }, template);
  ok(component.get('name') === 'green');
  ok(component.$().attr('style') === 'color: green;')
});