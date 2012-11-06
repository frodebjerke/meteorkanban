States = new Meteor.Collection("states");

if (Meteor.isClient) {
  Template.states.states = function () {
    return States.find({},{sort: {position: 1}});
  };

  Template.states.state_width = function () {
    return Math.floor(12 / States.find().count());
  };
}
