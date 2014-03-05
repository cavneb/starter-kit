emq.globalize();

setResolver(Ember.DefaultResolver.extend({
  testSubjects: {
    'component:pretty-color': App.PrettyColorComponent,
    'component:template-less': App.TemplateLessComponent,
    'route:index': App.IndexRoute
  },
  resolve: function(fullName) {
    return this.testSubjects[fullName] || this._super.apply(this, arguments);
  }
}).create());

Function.prototype.compile = function() {
  var template = this.toString().split('\n').slice(1,-1).join('\n') + '\n';
  return Ember.Handlebars.compile(template);
}

function lookupComponent(id) {
  return Ember.View.views[id];
}

function buildComponent(test, props, template) {
  props = props || {};
  var component = test.subject(Ember.merge({
    template: template.compile()
  }, props));
  test.append();
  return component;
}

function createView(template, context){
  if (!context) { context = {}; }

  var View = Ember.View.extend({
    controller: context,
    template: Ember.Handlebars.compile(template)
  });

  return View.create();
}

function append(view){
  Ember.run(function(){
    view.appendTo('#qunit-fixture');
  });
}
