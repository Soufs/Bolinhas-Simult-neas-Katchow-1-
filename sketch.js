var ball;
var ballPos, database, pos;

function setup(){
    database = firebase.database();
    console.log(database);

    createCanvas(500,500);
    

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballPos = database.ref('ball/position');
    ballPos.on("value", readPosition);
}

function draw(){
    background("white");
   
if(pos !== undefined){

    //MOVIMENTAÇÃO
    if(keyDown("DOWN_ARROW")){
        writePosition(0, 3);
    }
    else if(keyDown("UP_ARROW")){
        writePosition(0, -3);
    }
    else if(keyDown("RIGHT_ARROW")){
        writePosition(3, 0);
    }
    else if(keyDown("LEFT_ARROW")){
        writePosition(-3, 0);
    }
}

    drawSprites();
}

function writePosition(x, y){
    database.ref('ball/position').set({
        'x':pos.x + x, 'y':pos.y + y
    });

}

function readPosition(data){
    pos = data.val();
    console.log(pos.x);
    ball.x = pos.x;
    ball.y = pos.y;
}
