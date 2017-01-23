// your code here!
function analyzer(text) {
    var trimmedText = $.trim(text);
    var sentences = [];
    trimmedText = trimmedText.replace(/[,\/#!$%\^&\*;:{}=\-_`~()]/g," "); //Removed all punctuation but periods
    sentences = trimmedText.split('.');
    //console.log(sentences);
    //console.log(trimmedText);
    trimmedText = trimmedText.replace(/[.]/g,""); //Needed "[]" in .replace for it to work
    //console.log(trimmedText);
    var words = trimmedText.split(' '); //For average word length
    //console.log(words);
    var unique = [];
    words.forEach(function(word){
        if(!unique.includes(word)) {
            unique.push(word);
        }
    });
    //Count all words
    var averageWordCounter = 0;
    words.forEach(function(word) {
        averageWordCounter += word.length;
    })
    averageWordCounter = averageWordCounter / words.length;
    
    var averageSentenceCounter = 0; //Average # of words in sentences
    sentences = sentences.filter(String); //Take out empty elements that occur after periods
    //console.log(sentences);
    sentences.forEach(function(sentence) {
        sentence = sentence.trim(); //For spaces that occur after periods
        averageSentenceCounter += sentence.split(' ').length;
        //console.log(averageSentenceCounter);
    })
    averageSentenceCounter = averageSentenceCounter / (sentences.length);

    return {
        wordCount: words.length, //@TODO
        uniqueWordCount: unique.length,
        averageWordLength: averageWordCounter,
        averageSentenceLength: averageSentenceCounter,
    }
}

$(document).ready(function(){
    $('form').on('submit', function(event) {
        // body...
        event.preventDefault();
        //console.log('test'); 
        var userText = $('#user-text').val();
        var data = analyzer(userText);
        $('#word-count + dd').text(data.wordCount);
        $('#unique-word-count + dd').text(data.uniqueWordCount);
        $('#average-word-length + dd').text(data.averageWordLength);
        $('#average-sentence-length + dd').text(data.averageSentenceLength);        
        $('dl').removeClass('hidden');
    });
});

/* On submit {
    var magic = analyzer(mytext);
    var wordCount = magic.key();
    ...
    $('#wordCount').text(wordCount);
    $('#wordCount').text(wordCount);
    $('#wordCount').text(wordCount);
    $('#wordCount').text(wordCount);

    */