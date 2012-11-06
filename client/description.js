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

  Template.description.events({
    'click .show_edit' : function () {
      Session.set("show_edit_desc", true);
    }
  });

  Template.description.events({
    'click .editSubmit' : function () {
      var desc = $('.addDescription').val();
      if (desc != null) {
	Tasks.update(this._id, {$set: {description: desc}});
      }
      Session.set("show_edit_desc", false);
    }
  });

  Template.description.events({
    'click .editCancel' : function () {
      console.log("halla");
      $('.addDescription').val("");
      Session.set("show_edit_desc", false);
    }
  });

  Template.description.events({
      'click .hideDesc' : function () {
	Session.set("task_in_desc", null);
	Session.set("show_edit_desc", false);
      }
  });
}
