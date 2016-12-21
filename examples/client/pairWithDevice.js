var Remote = require('../../lib/client/Remote');

var remote = new Remote('192.168.88.214');

remote
    .pair()
    .then(
        function () {
            console.log('success!');
        },
        function (err) {
            console.log('failure', err);
        }
    )
    .catch(console.error);
