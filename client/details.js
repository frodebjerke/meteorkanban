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
        },

        'click .delete' : function () {
            Tasks.remove(this._id);
        },

        'click .increase':function () {
            Tasks.update(this._id, {$inc:{priority:-1}});
        },

        'click .decrease':function () {
            Tasks.update(this._id, {$inc:{priority:1}});
        },

        'click .moveLeft':function () {
            Tasks.update(this._id, {$inc:{position:-1}});
        },

        'click .moveRight':function () {
            Tasks.update(this._id, {$inc:{position:1}});
        }
    })

}
