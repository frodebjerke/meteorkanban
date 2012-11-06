
States = new Meteor.Collection("states");
//Meteor.publish('states', function () {
//  return States.find();
//});

Tasks = new Meteor.Collection("tasks");
//Meteor.publish('tasks', function () {
//  return Tasks.find();
//});

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (States.find().count() == 0) {
    	States.insert({name: "Backlog", position: 1});
    	States.insert({name: "WIP", position: 2});
    	States.insert({name: "Finished", position: 3});
    }
  });
}
