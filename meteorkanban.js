if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteorkanban.";
  };

  Template.hello.events({
    'submit form' : function (event) {
		console.log(event);	
	}
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
