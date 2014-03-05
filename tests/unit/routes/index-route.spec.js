moduleFor('route:index', 'IndexRoute');

test('it exists', function() {
  ok(this.subject() instanceof App.IndexRoute);
});

test("#model", function(){
  deepEqual(this.subject().model(), ['red', 'yellow', 'blue']);
});