Tasks = new Meteor.Collection("tasks");
States = new Meteor.Collection("states");

if (Meteor.isClient) {
  Template.states.states = function () {
    return States.find({},{sort: {position: 1}});
  };

  Template.addTask.text = function () {
    return "Add a new task.";
  };

  Template.tasks.tasks = function () {
    console.log(this);
    return Tasks.find({position: this.position});
  };

  Template.tasks.done_checkbox = function () {
    return this.done ? 'checked="checked"' : '';
  };

  Template.tasks.events({
    'click .check' : function () {
      Tasks.update(this._id, {$inc: {position: 1}});
    }
  });

  Template.addTask.events({
    'click .addTaskSubmit' : function () {
      var inp = $('.addTaskName').val();
      $('.addTaskName').val("");
      Tasks.insert({name: inp, done: false, position: 1});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (States.find().count() == 0) {
    	States.insert({name: "Backlog", position: 1});
    	States.insert({name: "WIP", position: 2});
    	States.insert({name: "Finished", position: 3});
    }
  });
}
