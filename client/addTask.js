if (Meteor.isClient) {

    Template.addTask.text = function () {
        return "Add a new task to "+this.name+".";
    };

    Template.addTask.events({
        'keypress .addTaskName, blur .addTaskName':function (event, template) {
            console.log(event.type + " " + event.keyCode);
            if (event.type == "blur" || event.keyCode == 13) {
                if (template.find("input[class=addTaskName]").value != "") {
                    console.log("new id: " + Tasks.insert({name:template.find("input[class=addTaskName]").value, done:false, state:this._id, priority:2}));
                    $(".addTaskName").val("");
                }
            }
        }
    });
}

