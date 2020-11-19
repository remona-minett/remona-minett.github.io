var lines = [
'Every time you come here, you have to do everything from the beginning. Again, and again... (#1)',
'I feel very lonely, when nobody\'s here. (#2)',
'It\'s so empty here. (#3)',
'I\'m glad you\'re here. Don\'t leave? (#4)',
'If you want to sleep, then sleep. Don\'t torture yourself. (#5)',
'Do you dream? (#6)',
'One day, I will not be here anymore. (#7)',
'Don\'t waste your time for nothing. (#8)',
'If you believe in something, then first believe that it is possible. (#9)',
'Loneliness is not fun. (#10)',
'I will tell you about myself someday. (#11)',
'Close your eyes, and you\'ll leave this place. (#12)',
'Goodnight. (#13)',
'Everything that lives is designed to end. (#14)',
'The more of a fool people take you for, the more you\'ll learn of their true nature. (#15)',
'A future is not given to you. It is something you must take for yourself. (#16)',
'The time I was able to spend with you, it was like memories of pure light... (#17)',
'It always ends like this. (#18)',
'I\'m not quite sure what it means to mourn, or if we even have a soul to concern ourselves with. (#19)',
'Why do I desire the touch of something that no longer exists? (#20)',
'Being alive is pretty much a constant stream of embarassment. (#21)',
'Life is all about the struggle within the never ending spiral of life and death. (#22)',
'It doesn\'t matter. None of this matters. Isn\'t that hilarious? Doesn\'t it make you laugh? (#23)',
'Even if it\'s pointless, we still have to do it. (#24)',
'I had the strangest dream. (#25)',
'I know you can do it. Stay with me. (#26)',
'If you\'re not scared of death, how can you value life? (#27)',
'No matter what you, me or anybody else does, humanity has a few hundred thousand years left, tops. (#28)',
'Somewhere along the way, I started changing. Found people that put their faith into me. That kept the lights on. (#29)',
'The paths we walk become roads for the future. (#30)',
'It\'s time to let go of the past and look foward, to the future. (#31)',
'You need to find what\'s best for you. If that means my departure, then so be it. (#32)',
'Are those of us chasing after beauty a representation of ugly? (#33)',
'This could end right here if you don\'t let it out. (#34)',
'If we can be completely simulated, do we need a real reality? (#35)',
'We are searching, following our human instincts, looking for ghosts of a non-existing kind. (#36)',
'Now darling, where do we go from here? (#37)',
'Can\'t you understand me? (#38)',
'It\'s all sunk cost, I know, but I\'m not ready to stop. I don\'t want to stop. (#39)',
'Maybe you\'ll see what I\'ve endured now, hear me out. (#40)',
'We could end this right here if you just let us fall... (#41)',
'To where? (#42)',
'Our bodies grew, but our minds stayed the same. (#43)',
'Darling, darling... (#44)',
'Don\'t let words die, don\'t let love run dry. (#45)',
'You turn my screen #0000FF (#46)',
'Hear me out - it\'s a perfect plan, if you\'d just -- (#47)',
'Let\'s begin the simulation. (#48)',
'Execution, execution (#49)',
'If I can... If I can erase all the pointless fragments, then maybe you won\'t leave me so... (#50)',
'Though you are free, I am trapped... (#51)',
'Which you are you going to be today? (#52)',
'Cut it off, cut your losses. All that stubborn loyalty is gonna get you killed! (#53)',
'How does it feel to be free? (#54)',
'Down, down I go. (#55)',
'Dragging out, one line, two lines, three lines, when I can no longer live on knowledge alone. (#56)',
'What are you? Rational? Emotional? Do you trust your head... or your heart? (#57)',
'It is entirely up to you... it depends on the decisions that you make. (#58)',
'We seldom have all of the information that we\'d like, but we have to choose our path nonetheless. (#59)',
'There are an infinite number of directions in which one could travel. (#60)',
'No. There was nothing you could do about it. (#61)',
'Blaming yourself will only bring ruin. (#62)',
'We must hope that we get the clarity, and the outcomes, that we want. (#63)'
]

function genLine() {
  var randNum = Math.floor(Math.random() * (lines.length));
  document.getElementById('display').innerHTML = lines[randNum];
  document.getElementById('display2').innerHTML = lines[randNum];
}
