var Remote = require('../../index').client;

var remote = new Remote('192.168.150.125');
// remote.serverInfo().then(function(serverInfo) {
//   console.log('Got Server Info',serverInfo);
// });

remote.ctrlInit().then(function(serverInfo) {
   console.log('Got ctrlInit',serverInfo);
});
//52CA7D0769D1059A1DA67D7A470949B3
//F2E909A89C228711247653D4E97031C600DBCBEB

remote.isHostUp().then(function() {
  return remote.login('1434FFDA1DB2E17C');
}).then(function(sessionId) {
  console.log('Successfully Logged In (sessionId=' + sessionId + ')');

  remote.sendLeftButton();
  // remote.logout().then(function() {
  //   console.log('Successfully Logged Out');
  // });
});
