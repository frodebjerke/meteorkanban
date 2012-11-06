if (Meteor.isClient) {
  
  Template.description.show = function () {
    return Session.equals("task_in_desc", this._id) ? "" : "hide";
  };

  Template.description.tasks = function () {
    return Tasks.find();
  };

  Template.description.events({
      'click .hideDesc' : function () {
	Session.set("task_in_desc", null);
      }
  });
}
