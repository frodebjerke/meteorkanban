
if (Meteor.isClient) {
  
  Template.description.show = function () {
    return Session.equals("task_in_desc", this._id) ? "" : "hide";
  };

  Template.description.tasks = function () {
    return Tasks.find();
  };

  Template.description.hide_edit = function () {
    return (this.description == null || Session.equals("show_edit_desc", true) ) ? "" : "hide";
  };

  Template.description.not_hiding_edit = function () {
    return (this.description == null || Session.equals("show_edit_desc", true) ) ? "hide" : "";
  };

  

  Template.description.events({
    'click .show_edit' : function () {
      Session.set("show_edit_desc", true);
    }
  });

  Template.description.events({
    'click .hideDesc' : function () {
	Session.set("task_in_desc", null);
	Session.set("show_edit_desc", false);
      }
  });
}
