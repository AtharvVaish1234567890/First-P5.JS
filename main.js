function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(589, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 46, 20);

    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(589, 440, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 435, 460, 20);

    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 440, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 435, 460, 20);
}