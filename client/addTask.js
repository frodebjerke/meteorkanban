if (Meteor.isClient) {
  
  Template.addTask.text = function () {
    return "Add a new task.";
  };

  Template.addTask.events({
    'click .addTaskSubmit' : function () {
      var inp = $('.addTaskName').val();
      $('.addTaskName').val("");
      Tasks.insert({name: inp, done: false, position: 1, priority: "high"});
    }
  });
}

