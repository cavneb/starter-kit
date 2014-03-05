moduleForComponent('template-less', 'TemplateLessComponent');

test('renders without a template', function() {
  expect(1);
  var component = this.subject();
  ok(this.$().hasClass('look-ma-no-template'));
});