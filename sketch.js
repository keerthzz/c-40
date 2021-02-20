
var database;
var gameState = 0;
var playerCount, form, player, game;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1pic, car2pic, car3pic, car4pic;
var trackpic;


function preload() {
    car1pic = loadImage("images/car1.png");
    car2pic = loadImage("images/car2.png");
    car3pic = loadImage("images/car3.png");
    car4pic = loadImage("images/car4.png");
    trackpic = loadImage("images/track.jpg");

}


function setup(){
    createCanvas(displayWidth-40,displayHeight-300);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
 


}


function draw(){
    background("white");
    if (playerCount == 4) {
        game.update(1);
    }
    if (gameState == 1) {
        clear();
        game.play();
    }

    if (gameState == 2) {
        game.end();
    }   
}