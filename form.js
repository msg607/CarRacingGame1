class Form{
    constructor(){

    }

display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(500,150);
    var input = createInput("name");
    input.position(500,250);
    var button = createButton('play');
    button.position(650,300);
    var greeting = createElement('h3');
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        greeting.html("Hello"+name);
        greeting.position(130,160);
        playerCount += 1
        player.update(name);
        player.updateCount(playerCount);
    });    
}
}