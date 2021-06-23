var canvas;
var music;
var box1, box2, box3, box4
var edge
var sound


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box1 = createSprite(50,580,200,30)
    box1.shapeColor = rgb(81, 160, 213);

    box2 = createSprite(270,580,200,30)
    box2.shapeColor = rgb(255, 174, 66);

    box3 = createSprite(500,580,200,30)
    box3.shapeColor = rgb(165,42,42);

    box4 = createSprite(720,580,200,30)
    box4.shapeColor = rgb(34,139,34);

    ball = createSprite(random(20,750),200, 40,40);
    ball.shapeColor = rgb(255, 255, 255)
    ball.velocityX = 5;
    ball.velocityY = 10;



    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge=createEdgeSprites();
    ball.bounceOff(edge);

      if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = rgb(81, 160, 213);
        music.play();
      
    }

    if(box2.isTouching(ball) && ball.bounceOff(box2)){
        ball.shapeColor = rgb(255, 174, 66);
        music.stop();
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = rgb(165,42,42);
        music.stop();
      

    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = rgb(34,139,34);
        music.stop();
    }



    //add condition to check if box touching surface and make it box
    drawSprites();
}
