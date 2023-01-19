let f = 0.0;
let num;
let space;
let frame = 0;

function setup() {
  createCanvas(600, 600);
  num = 6;
  space = width / num;
}

function draw() {
  background(32,32,32,8);
  
  stroke(240);
  strokeWeight(0.5);
  for(let i = 0 ; i < 1000; i++){
    point(random(width), random(height));
  }
  
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
      
      push();
      
      translate(space/2 + i * space, space/2 +  j * space);
      
      drawAShape(i + 1 ,j + 1);
      
      pop();
    }
  }
  
  f+= 0.01;
}

function drawAShape(i,j) {
  
  beginShape();
  
  for (let k = 0; k < 10; k++) {
    vertex(noise( k * i, j + f) * space  - space/2, noise( i, j *k + f ) * space - space/2);
  }
  
  noStroke();
  fill(random(120,150),random(120,150),random(120,150));
  
  circle(i,j,20);
  
  push();
  
  rotate( frame * 0.05);
  translate( 50, 0 );
  stroke (200, 200, 200);
  strokeWeight(1);
  line(0, 0, 30, 30);
  
  frame++;
  
  pop();
  
  endShape();
  
}