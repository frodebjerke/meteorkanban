States = new Meteor.Collection("states");

if (Meteor.isClient) {
  Template.states.states = function () {
    return States.find({},{sort: {position: 1}});
  };
}
