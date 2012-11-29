var count = 0;

function addTaskLOL(e, stateId) {

    console.log("hello");
    if ((e.type == "keydown" && e.keyCode == 13) || e.type == "blur") {
        if (getAddTaskName() != "") {
            Tasks.insert({name:getAddTaskName(), done:false, state:stateId, priority:2});
            Session.set("AddTask" + this._id, false);
            $('.addTaskName').val("");
            console.log($('.addTaskName').val());
        }
    }
};

if (Meteor.isClient) {

    Template.addTask.text = function () {
        return "Add a new task to.";
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

