function showEditDescription(taskId, description) {
    if (description == undefined || description == "") {
        return true;
    }
    else if (Session.equals("Edit"+taskId, true)) {
        return true;
    }
    else {
        return false;
    }
}

if (Meteor.isClient) {

    Template.details.edit_description = function () {
        return showEditDescription(this._id, this.description);
    };

    Template.details.not_edit_description = function () {
        return !showEditDescription(this._id, this.description);
    };

    Template.details.tasks = function () {
        return Tasks.find();
    };

    Template.details.events({

        'keypress .editDescription, blur .editDescription' : function (event, template) {
            if (EventHelpers.eventIsBlurOrKeypressEnter(event)) {
                console.log(template);
                console.log(template.find("textarea[id=editDescription"+this._id+"]"));
                var newDesc = template.find("textarea[id=editDescription"+this._id+"]").value;
                if (newDesc != undefined) {
                    Tasks.update(this._id, {$set: {description: newDesc}});
                    $(".addTaskName").val("");
                    Session.set("Edit"+this._id, false);
                }
            }
        },

        'click .toggle_edit':function () {
            Session.set("Edit"+this._id, Session.equals("Edit"+this._id, true) ? false : true);
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
