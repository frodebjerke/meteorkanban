if (Meteor.isClient) {
  Template.description.show = function () {
    console.log("YOLO");

    return Session.equals("task_in_desc", this._id) ? "" : 'hidden="hidden"';
  };

  Template.description.tasks = function () {
    return Tasks.find();
  }
}
