var spin = function(text){

  var originalText = text;
  var matches = text.match(/\{[^\{\}]+\}/g);

  if(matches == null){
    return text;
  }

  for (var i = 0; i < matches.length; i++) {
    var possibilities = matches[i].replace('{', '').replace('}', '').split('|');
    var substitution = possibilities[Math.floor(Math.random()*possibilities.length)];
    text = text.replace(matches[i], substitution);
  }

    return spin(text);
}


module.exports = spin;
