var expect = require("chai").expect;

var message = "";

//set strings to variables
describe("set strings", function() {

  beforeEach(function() {

   });

  it("sets var to be strings", function() {
    message = "I am feeling so happy right now. Wonderful! I sometimes feel sad though. Today is 2/1/15.";

    expect(message).to.equal("I am feeling so happy right now. Wonderful! I sometimes feel sad though. Today is 2/1/15.");
  });

});

//take the strings and break it down
describe("break down the string", function() {

	//lower case all characters
  it("lowercase the characters", function() {
    message = message.toLowerCase();

    expect(message).to.equal("i am feeling so happy right now. wonderful! i sometimes feel sad though. today is 2/1/15.");
  });

  	//take out punctuations, numbers and save to an array
  it("strip the punctuations, numbers, and symbols", function() {
    message = message.replace(/[0-9'";:!@,.\/?\\-]/g, '');

    expect(message).to.equal("i am feeling so happy right now wonderful i sometimes feel sad though today is ");
  });

  	//split the strings into array of items
  it("splits the strings", function() {
  	message = message.split(" ");

    expect(message).to.deep.equal(["i","am","feeling","so","happy","right","now","wonderful","i","sometimes","feel","sad","though","today","is",""]);
  });

});