class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(500, 100);
        this.input.position(500, 170);
        this.button.position(550, 200);
        this.button.mousePressed(()=>{ 
        this.input.hide();
        this.button.hide();
        var name = this.input.value();
        playerCount+=1;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + name )
        this.greeting.position(130, 160) });
    }
}