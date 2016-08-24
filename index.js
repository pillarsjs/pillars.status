var project = require('../pillars/index').configure({
  debug: true,
  renderReload: true
});

project.services.get('http').configure({timeout:8000,port:3000}).start();

project.routes.insert(new Route({
  path:'/',
}, function(gw){
  gw.render('./status.jade');
}));