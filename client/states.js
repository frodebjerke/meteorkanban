States = new Meteor.Collection("states");

if (Meteor.isClient) {
    Template.states.states = function () {
        return States.find({}, {sort:{position:1}});
    };

    Template.states.state_width = function () {
        return Math.floor(12 / States.find().count());
    };

    Template.states.show_addTaskPlaceholder = function () {
        return Session.get("AddTask" + this._id) ? "hide" : "";
    };

    Template.states.show_addTask = function () {
        return Session.get("AddTask" + this._id) ? "" : "hide";
    };

    Template.states.events({
        'click .showAddTask':function () {
            Session.set("AddTask"+this._id, true);
            console.log(Session.get("AddTask"+this._id));
        }
    });
}
