if (Meteor.isClient) {
  Template.editTask.events({
    'click .editSubmit' : function () {
      var desc = $('.addDescription'+this._id).val();
      console.log(desc);
      Tasks.update(this._id, {$set: {description: desc}});
      Session.set("show_edit_desc", false);
    }
  });

  Template.editTask.events({
    'click .editCancel' : function () {
      $('.addDescription'+this._id).val("");
      Session.set("show_edit_desc", false);
    }
  });
}
