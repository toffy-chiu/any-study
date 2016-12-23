var words=require('./default_words');
var idiom=require('./default_idiom');
var proverb=require('./default_proverb');
var english=require('./default_english');

module.exports=words.concat(idiom).concat(proverb).concat(english);