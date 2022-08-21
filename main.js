Beyblade_Burst_Surge = "";
Beyblade_Burst_Turbo = "";

function setup()
{
canvas = createCanvas(500,479);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function preload()
{
Beyblade_Burst_Surge = loadSound("Beyblade Burst Surge.mp3");
Beyblade_Burst_Turbo = loadSound("Beyblade Burst Turbo.mp3")
}

function draw()
{
image(video,0,0,500,479);
}