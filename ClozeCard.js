//This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;

//The constructor should accept two arguments: text and cloze.

//The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

//The constructed object should have a partial property that contains only the partial text.

//The constructed object should have a fullText property that contains only the full text.

//The constructor should throw or log an error when the cloze deletion does not appear in the input text.

//Use prototypes to attach these methods, wherever possible.

module.exports = ClozeCard;

function ClozeCard(fullText, cloze) {
	this.fullText = fullText;
	this.cloze= cloze;
	this.partial = fullText.replace(cloze,"...");
	
}

ClozeCard.prototype.print = function() {
	console.log("Text: " + this.fulltext);
	console.log("Cloze: " + this.cloze);
	console.log("Partial: " + this.partial);
};

//set up parital as a prototype
//is the cloze inside the full
//

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);




