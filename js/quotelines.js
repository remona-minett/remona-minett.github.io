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
'Goodnight. (13)',
'Everything that lives is designed to end. (14)',
'The more of a fool people take you for, the more you\'ll learn of their true nature. (15)',
'A future is not given to you. It is something you must take for yourself. (16)',
'The time I was able to spend with you, it was like memories of pur light... (17)',
'It always ends like this. (18)',
'I\'m not quite sure what it means to mourn, or if we even have a soul to concern ourselves with. (19)',
'Why do I desire the touch of something that no longer exists? (20)',
'Being alive is pretty much a constant stream of embarassment. (21)',
'Life is all about the struggle within the never ending spiral of life and death. (22)',
'It doesn\'t matter. None of this matters. Isn\'t that hilarious? Doesn\'t it make you laugh? (23)',
'Even if it\'s pointless, we still have to do it. (24)'
]

function genLine() {
  var randNum = Math.floor(Math.random() * (lines.length));
  document.getElementById('display').innerHTML = lines[randNum];
  document.getElementById('display2').innerHTML = lines[randNum];
}
