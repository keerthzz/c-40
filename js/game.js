class Game{

    constructor() {     
    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data) {
            gameState = data.val();
        })
    }

    update(state) {
        database.ref("/").update({
            gameState: state
        })
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        car1 = createSprite(width/5,height*3/4);
        car2 = createSprite(width*2/5,height*3/4);
        car3 = createSprite(width*3/5,height*3/4);
        car4 = createSprite(width*4/5,height*3/4);

        car1.addImage(car1pic);
        car2.addImage(car2pic);
        car3.addImage(car3pic);
        car4.addImage(car4pic);

        cars= [car1,car2,car3,car4];


    }

    play() {
        form.hide();
        textSize(19);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();

        player.getCarsAtEnd();

    

        if (allPlayers !== undefined) {

            background("teal");
            image(trackpic,0,-4*displayHeight,displayWidth,5*displayHeight);

            var index = 0;
            var x = 200;
            var y;

            for (var plr in allPlayers) {
                 index++
                 x = x+210;
                 y = displayHeight - allPlayers[plr].distance;
                 console.log(cars[index-1]);
                 cars[index-1].x = x;
                 cars[index-1].y = y;
                 if (index === player.index) {
                   //  cars[index-1].shapeColor = "red";
                   strokeWeight(5);
                   stroke("magenta");
                   fill("red");
                   ellipse(cars[index-1].x,cars[index-1].y,60,60);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                    
                 }

                } 

        }
        if (keyDown(UP_ARROW) && player.index != null) {
            player.distance += 50;
            player.update()
        }

        if (player.distance>= 4450 ) {
           gameState = 2;   
           player.rank++ ;
           Player.updateCarsAtEnd(player.rank);        
        }
        drawSprites();
    }

    end() {
    console.log(player.rank)
    
    background("teal");
    
    drawSprites();
    textSize(50);
    fill("white");
    text("You ranked "+ player.rank, 300, camera.position.y-100);
    
    }

}