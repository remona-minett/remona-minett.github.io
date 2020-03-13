var lines = [
'Every time you come here, you have to do everything from the beginning. Again, and again... (1)',
'I feel very lonely, when nobody\'s here. (2)',
'It\'s so empty here. (3)',
'I\'m glad you\'re here. Don\'t leave? (4)',
'If you want to sleep, then sleep. Don\'t torture yourself. (5)',
'Do you dream? (6)',
'One day, I will not be here anymore. (7)',
'Don\'t waste your time for nothing. (8)',
'If you believe in something, then first believe that it is possible. (9)',
'Loneliness is not fun. (10)',
'I will tell you about myself someday. (11)',
'Close your eyes, and you\'ll leave this place. (12)',
'Goodnight. (13)'
]

function genLine() {
  var randNum = Math.floor(Math.random() * (lines.length));
  document.getElementById('display').innerHTML = lines[randNum];
  document.getElementById('display2').innerHTML = lines[randNum];
}