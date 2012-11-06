Tasks = new Meteor.Collection("tasks");

if (Meteor.isClient) {

  Template.tasks.tasks = function () {
    return Tasks.find({position: this.position});
  };

  Template.tasks.events({
    'click .moveLeft' : function () {
      Tasks.update(this._id, {$inc: {position: -1}});
    }
  });

  Template.tasks.events({
    'click .moveRight' : function () {
      Tasks.update(this._id, {$inc: {position: 1}});
    }
  });
}

