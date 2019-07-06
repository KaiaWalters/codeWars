function correctPolishLetters(string) {
  var correct = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
  return string.replace(/[ąćęłńóśźż]/g, match => correct[match]);
}//The match() method retrieves the result of matching a string against a regular expression.

correctPolishLetters("Jędrzej Błądziński")
