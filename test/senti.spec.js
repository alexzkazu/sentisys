var expect = require("chai").expect;

var message = "";
var positiveList = [];
var negativeList = [];
var positiveNum = 0;
var negativeNum = 0;

//set data to variables
describe("set data to variables", function() {

  beforeEach(function() {

   });

  it("sets string to message", function() {
    message = "I am feeling so happy right now. Wonderful! I sometimes feel sad though. Today is 2/1/15.";

    expect(message).to.equal("I am feeling so happy right now. Wonderful! I sometimes feel sad though. Today is 2/1/15.");
  });

  it("sets array to positiveList", function() {
    positiveList = ["good","happy","wonderful","love"];

    expect(positiveList).to.deep.equal(["good","happy","wonderful","love"]);
  });

  it("sets array to negativeList", function() {
    negativeList = ["sad","depressed","hate","disgust"];

    expect(negativeList).to.deep.equal(["sad","depressed","hate","disgust"]);
  });

});

//take the strings and break it down
describe("break down message", function() {

	//lower case all characters
  it("lowercase all characters", function() {
    message = message.toLowerCase();

    expect(message).to.equal("i am feeling so happy right now. wonderful! i sometimes feel sad though. today is 2/1/15.");
  });

  	//take out punctuations, numbers and save to an array
  it("strip the punctuations, numbers, and symbols", function() {
    message = message.replace(/[0-9'";:!@,.\/?\\-]/g, '');

    expect(message).to.equal("i am feeling so happy right now wonderful i sometimes feel sad though today is ");
  });

  	//split the strings into array of items
  it("split words into arrays", function() {
  	message = message.split(" ");

    expect(message).to.deep.equal(["i","am","feeling","so","happy","right","now","wonderful","i","sometimes","feel","sad","though","today","is",""]);
  });

});

//compare words in the string against dictionary
describe("compare words in the string against sentiment dictionary list", function() {

  	//loop through message and compare each against positiveList
  it("loop through positiveList and increment positiveNum", function() {

	for (var j=0; j<positiveList.length; j++){
		if (message.indexOf(positiveList[j]) != -1){
			positiveNum++;
		}
	}

	expect(positiveNum).to.be.at.least(0);

  });

  	//loop through message and compare each against negativeList 
  it("loop through negativeList and increment negativeNum", function() {

	for (var k=0; k<negativeList.length; k++){
		if (message.indexOf(negativeList[k]) != -1){
			negativeNum++;
		}
	}

	expect(negativeNum).to.be.at.least(0);

  });

});

//compare words in the string against dictionary
describe("should calculate sentiment of the string", function() {

it("calculateSentiment fn", function() {

	function calculateSentiment (pos,neg){
		var total = pos + neg;
		var posPercent = (pos/total)*100;
		var negPercent = (neg/total)*100;
		return {pos: posPercent, neg: negPercent};
	}

	console.log(calculateSentiment(positiveNum,negativeNum));
	expect(calculateSentiment(positiveNum,negativeNum)).to.be.deep.equal({ pos: 66.66666666666666, neg: 33.33333333333333});

});

});