var lines = [
'Test 1',
'Test 2',
'Test 3',
'Test 4'
]

function genLine() {
  var randNum = Math.floor(Math.random() * (lines.length));
  document.getElementById('display').innerHTML = lines[randNum];
}