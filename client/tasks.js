Tasks = new Meteor.Collection("tasks");

if (Meteor.isClient) {

    Template.tasks.tasks = function () {
        return Tasks.find({state: this._id}, {sort:{priority:1}});
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

    Template.tasks.showDetails = function () {
        return Session.equals("Details"+this._id, true) ? "" : "hide";
    };

    Template.tasks.events({

        'click .toggleShowDetails':function () {
            Session.set("Details" + this._id, Session.get("Details" + this._id) == true ? false : true);
        }
    });
}

