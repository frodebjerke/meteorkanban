Tasks = new Meteor.Collection("tasks");

if (Meteor.isClient) {

  Template.tasks.tasks = function () {
    return Tasks.find({position: this.position}, {sort: {priority: 1}});
  };

  Template.tasks.highlight = function () {
    return Session.equals("task_in_desc", this._id) ? "highlighted" : "";
  };

  Template.tasks.what_priority = function () {
    if (this.priority == 1) return "Critical";
    else if (this.priority == 2) return "High";
    else if (this.priority == 3) return "Low";
    return "";
  };

  Template.tasks.events({
    'click .increase' : function () {
      Tasks.update(this._id, {$inc: {priority: -1}});
    }
  });

  Template.tasks.events({
    'click .decrease' : function () {
      Tasks.update(this._id, {$inc: {priority: 1}});
    }
  });

  Template.tasks.events({
    'click .desc' : function () {
      console.log(this._id);
      Session.set("task_in_desc", this._id);
    }
  });
  
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

