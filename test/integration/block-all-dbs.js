var expect = require('expect.js');
var hoodie_server = require('../../');
var http = require('http');

var config = {
  www_port: 5051,
  admin_port: 5061,
  admin_password: '12345'
};

describe('block _all_dbs', function () {

  before(function (done) {
    hoodie_server.start(config, done);
  });

  // TODO: I guess we should kill the server once we are done with the tests
  //after(function (done) {});

  it('should 404 on /_api/_all_dbs', function (done) {
    http.get({
      host: '127.0.0.1',
      port: config.www_port,
      method: 'get',
      path: '/_api/_all_dbs',
    }, function (res) {
      expect(res.statusCode).to.be(404);
      done();
    });
  });
});
