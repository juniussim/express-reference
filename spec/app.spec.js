require('../app');

var request = require("request");
var base_url = "http://localhost:7000/"
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

// function check200(err, response, body) {
//   expect(response.statusCode).toBe(200);
//   done();
// }


describe("Express Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url,
        function(err, response, body) {
          expect(response.statusCode).toBe(200);
          expect(body).toBe("Hello world with MVC Structure");
          done();
        }
      );
    });
  });

  describe("GET /about", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'about',
        function(err, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        }
      );
    });
  });

  describe("GET /contact", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'contact',
        function(err, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        }
      );
    });
  });
});
