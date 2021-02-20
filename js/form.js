class Form{

    constructor() {
        this.title = createElement("h1");
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.resetButton = createButton("RESET");
        this.greeting = createElement("h3"); 
    }


    hide() {
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display() {
       
        this.title.html("Car Racing Game!")
        this.title.position(width/2 - 100,50);
        this.input.position(width/2 - 100,250);
        this.button.position(width/2 - 100,300);

        this.resetButton.position(width - 100, 100);
      

        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " +player.name+ ", please wait for other players to join.")
            this.greeting.position(width/2 - 100, 100);
             
        });

        this.resetButton.mousePressed(() =>{
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0);
        });



    }

}