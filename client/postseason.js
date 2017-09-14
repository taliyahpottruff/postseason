Template.postseason.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('teams');
  });
});

Template.postseason.helpers({
  'ale': function() {
    return Teams.find({});
  },
  'alecount': function() {
    console.log(Teams.find().fetch());
    return Teams.find({}).count();
  }
});
