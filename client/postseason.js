Template.postseason.onCreated(function() {
  this.autorun(() => {
  });
});

Template.postseason.helpers({
  'ale': function() {
    return Standings.find({league: "American", division: "East"}, {
      transform: function(item){
        item.avg = (item.wins/(item.wins+item.losses));

        var top = Standings.find({league: "American", division: "East"}, {sort: {
          wins: -1,
          losses: 1
        }}).fetch()[0];

        if (top.name == item.name) {
          item.elimination = "-";
        } else {
          item.elimination = 163 - top.wins - item.losses;

          if (item.elimination <= 0) {
            item.elimination = "E";
          }
        }

        return item;
      },
      sort: {
        wins: -1,
        losses: 1
      }
    });
  },
  'alc': function() {
    return Standings.find({league: "American", division: "Central"}, {
      transform: function(item){
        item.avg = (item.wins/(item.wins+item.losses));

        var top = Standings.find({league: "American", division: "Central"}, {sort: {
          wins: -1,
          losses: 1
        }}).fetch()[0];

        if (top.name == item.name) {
          item.elimination = "-";
        } else {
          item.elimination = 163 - top.wins - item.losses;

          if (item.elimination <= 0) {
            item.elimination = "E";
          }
        }

        return item;
      },
      sort: {
        wins: -1,
        losses: 1
      }
    });
  },
  'alw': function() {
    return Standings.find({league: "American", division: "West"}, {
      transform: function(item){
        item.avg = (item.wins/(item.wins+item.losses));

        var top = Standings.find({league: "American", division: "West"}, {sort: {
          wins: -1,
          losses: 1
        }}).fetch()[0];

        if (top.name == item.name) {
          item.elimination = "-";
        } else {
          item.elimination = 163 - top.wins - item.losses;

          if (item.elimination <= 0) {
            item.elimination = "E";
          }
        }

        return item;
      },
      sort: {
        wins: -1,
        losses: 1
      }
    });
  },
  'nlc': function() {
    return Standings.find({league: "National", division: "Central"}, {
      transform: function(item){
        item.avg = (item.wins/(item.wins+item.losses));

        var top = Standings.find({league: "National", division: "Central"}, {sort: {
          wins: -1,
          losses: 1
        }}).fetch()[0];

        if (top.name == item.name) {
          item.elimination = "-";
        } else {
          item.elimination = 163 - top.wins - item.losses;

          if (item.elimination <= 0) {
            item.elimination = "E";
          }
        }

        return item;
      },
      sort: {
        wins: -1,
        losses: 1
      }
    });
  },
  'nlw': function() {
    return Standings.find({league: "National", division: "West"}, {
      transform: function(item){
        item.avg = (item.wins/(item.wins+item.losses));

        var top = Standings.find({league: "National", division: "West"}, {sort: {
          wins: -1,
          losses: 1
        }}).fetch()[0];

        if (top.name == item.name) {
          item.elimination = "-";
        } else {
          item.elimination = 163 - top.wins - item.losses;

          if (item.elimination <= 0) {
            item.elimination = "E";
          }
        }

        return item;
      },
      sort: {
        wins: -1,
        losses: 1
      }
    });
  },
  'alecount': function() {
    return Standings.find().count();
  },
  'avg': function() {
    return this.avg.toFixed(3).toString().substr(1);
  }
});
