var RemoteFinder = require('../../lib/client/RemoteFinder');
var Remote = require('../../lib/client/Remote');

var FOUND_EVENT = 'found';

var hostName = 'Apple-TV.local.';

var finder = new RemoteFinder();

var foundRemote = function(remote) {
  // We are only looking for one
  if (remote.host === hostName) {
    console.log('Found new Remote:', remote.host);
    console.log('Pairing with ' + hostName);
    finder.stopSearching();
    finder.removeAllListeners(FOUND_EVENT);
    console.log('Your Pairing Pincode is: ' + remote.getPinCode());
    remote.pair(240).then(function(guid) {
      console.log('Successfully Paired with ' + hostName);
      console.log('GUID is ' + guid);
      finder = null;
      return remote.login(guid);
    }, function(msg) {
      console.log('Pairing Failed!',msg);
    }).catch(console.error)
    .then(function(sessionId) {
      console.log('Successfully Logged In (sessionId=' + sessionId + ')');
    });
  }
};

finder.on(FOUND_EVENT, foundRemote);

// With a timeout of 5 seconds
finder.startSearching(5);
