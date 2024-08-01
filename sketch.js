let x, y;        // Ball's position
let xSpeed, ySpeed; // Ball's speed
let diameter = 50; // Ball's diameter

function setup() {
  createCanvas(600, 400);
  x = width / 2;       // Start at the center of the canvas
  y = height / 2;
  xSpeed = random(2, 5); // Random initial speed
  ySpeed = random(2, 5);
}

function draw() {
  background(220);
  
  // Draw the ball
  ellipse(x, y, diameter, diameter);
  
  // Move the ball
  x += xSpeed;
  y += ySpeed;
  
  // Bounce off the walls
  if (x > width - diameter / 2 || x < diameter / 2) {
    xSpeed *= -1;
  }
  if (y > height - diameter / 2 || y < diameter / 2) {
    ySpeed *= -1;
  }
}