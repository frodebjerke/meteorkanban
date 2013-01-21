if (Meteor.isClient) {

    Template.addTask.text = function () {
        return "Add a new task to "+this.name+".";
    };

    Template.addTask.events({
        'keypress .addTaskName, blur .addTaskName':function (event, template) {
            if (EventHelpers.eventIsBlurOrKeypressEnter(event)) {

                if (template.find("input[class=addTaskName]").value != "") {
                    Tasks.insert({name:template.find("input[class=addTaskName]").value, done:false, state:this._id, priority:2, position: 1});
                    $(".addTaskName").val("");
                }
            }
        }
    });
}

