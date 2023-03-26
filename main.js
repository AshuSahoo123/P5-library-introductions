function preload() {
    img = loadImage("https://static.vecteezy.com/system/resources/thumbnails/006/450/051/small/gradient-red-blue-purple-abstract-background-you-can-use-this-background-for-your-content-like-as-video-game-qoute-promotion-template-presentation-education-sports-card-banner-website-etc-free-vector.jpg");
}

function setup() {
    canvas = createCanvas(750, 750);
    canvas.position(110, 250);
}

function draw() {
    image(img, 200, 200, 300, 300);
    fill("turquoise");
  stroke("lime");
  strokeWeight(2);
    circle(50, 50, 50);
    circle(50, 700, 50);
    circle(700, 50, 50);
    circle(700, 700, 50);
    fill("RED");
    stroke("blue")
    rect(50, 45, 650, 10);
    rect(50, 695, 650, 10);
    rect(50, 45, 10, 650);
    rect(695, 45, 10, 650);
}

function take_snapshot() {
    save("student_name.png");
}