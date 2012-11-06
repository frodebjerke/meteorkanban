if (Meteor.isClient) {
  
  Template.description.show = function () {
    return Session.equals("task_in_desc", this._id) ? "" : 'hidden="hidden"';
  };

  Template.description.tasks = function () {
    return Tasks.find();
  };

  Template.description.events({
      'click .hideDesc' : function () {
	console.log("desc event");
	Session.set("task_in_desc", null);
      }
  });
}
