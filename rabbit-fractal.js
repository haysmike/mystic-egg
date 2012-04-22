var interval;
var index = 0;
var word = '';
console.log("MUFUCKA " + word.length);

var S = ['0','1'];

var generateFibonacciWord = function() {
  console.log('generating path...');
  word = S[0] + S[1]
  S[1] = S[0];
  S[0] = word;

  console.log(word);
}

var draw = function() {
  index++;
  if (index > word.length) {
    generateFibonacciWord();
  }
  
  if (word[index - 1] == "0") {
    if (index % 2 == 0) {
      ctx.rotate(Math.PI/2);
    } else {
      ctx.rotate(-Math.PI/2);
    }
  } // else {
    ctx.translate(0,2);
    ctx.lineTo(0,0);
    ctx.stroke();
  //}

  // setTimeout(draw, 75);
  webkitRequestAnimationFrame(draw);
}

console.log('this will totally be awesome');

var ctx = document.getElementById('canvas').getContext('2d');
console.log('rendering...');
ctx.strokeStyle = '#ffffff';
ctx.translate(20,20);
ctx.moveTo(0,0);

// draw();
webkitRequestAnimationFrame(draw);

