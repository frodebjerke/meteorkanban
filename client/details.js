if (Meteor.isClient) {


    Template.details.tasks = function () {
        return Tasks.find();
    };

    Template.details.hide_edit = function () {
        return (this.description == null || Session.equals("show_edit_desc", true) ) ? "" : "hide";
    };

    Template.details.not_hiding_edit = function () {
        return (this.description == null || Session.equals("show_edit_desc", true) ) ? "hide" : "";
    };

    Template.details.events({
        'click .show_edit':function () {
            Session.set("show_edit_desc", true);
        }
    });

    Template.details.events({
        'click .delete' : function () {
            Tasks.remove(this._id);
        }
    })

}
