var Client = require('instagram-private-api').V1;
var device = new Client.Device('someuser');
var storage = new Client.CookieFileStorage(__dirname + '/cookies/someuser.json');

// And go for login
Client.Session.create(device, storage, 'AND.RWH', 'ada123')
    .then(function(session) {
        // Now you have a session, we can follow / unfollow, anything...
        // And we want to follow Instagram official profile
	console.log(session)
        return [session, Client.Account.searchForUser(session, 'oabramovich')]   
    })
    .spread(function(session, account) {
        return Client.Relationship.create(session, account.id);
    })
    .then(function(relationship) {
        console.log(relationship.params)
        // {followedBy: ... , following: ... }
        // Yey, you just followed @instagram
    })
