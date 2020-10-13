// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by show-gemba-ondemmand-collection.js.
import { name as packageName } from "meteor/show-gemba-ondemmand-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('show-gemba-ondemmand-collection - example', function (test) {
  test.equal(packageName, "show-gemba-ondemmand-collection");
});
