var RemoteFinder = require('../../lib/client/RemoteFinder');
var finder = new RemoteFinder();

finder.on('found', function(Remote) {
  console.log('Found new Remote:', Remote.ipAddress);
});

// With a timeout of 5 seconds
finder.startSearching(5);
