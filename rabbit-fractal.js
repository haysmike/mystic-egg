var interval;
var index = 0;
var word = '';

var draw = function() {
  index++;
  if (index > word.length) {
    console.log('DONE! completed ' + (index + 1) + ' instructions');
    return;
  }
  
  if (word[index] == "0") {
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
var S = ['0','1'];

console.log('generating path...');
for (var i = 0; i < 27; i++) {
  word = S[0] + S[1]
  S[1] = S[0];
  S[0] = word;
}

console.log(word);
console.log('rendering...');
ctx.strokeStyle = '#ffffff';
ctx.translate(20,20);
ctx.moveTo(0,0);

// draw();
webkitRequestAnimationFrame(draw);

