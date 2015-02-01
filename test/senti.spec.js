var expect = require("chai").expect;

describe("strings", function() {

  beforeEach(function() {

   });

	var positive = "";
	var negative = "";
  it("sets positive and negative to be strings", function() {
    positive = "I am feeling so happy right now. Wonderful!"
    negative = "I am feeling so sad right now. Depressed."

    expect(positive).to.equal("I am feeling so happy right now. Wonderful!");
    expect(negative).to.equal("I am feeling so sad right now. Depressed.");
  });

  it("sets positive and negative to be strings2", function() {

    expect(positive).to.equal("I am feeling so happy right now. Wonderful!");
    expect(negative).to.equal("I am feeling so sad right now. Depressed.");
  });

});
