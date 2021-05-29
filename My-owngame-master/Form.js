class Form{

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.story = createElement('h2');
    this.story1 = createElement('h3');
    this.story2 = createElement('h3');
    this.story3 = createElement('h3');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.Instructions = createElement('h2');
    this.Instruction1 = createElement('h3');
    this.Instruction2 = createElement('h3');

  }

  hidden(){
    this.Instructions.hide();
    this.Instruction1.hide();
    this.Instruction2.hide();
    this.story.hide();
    this.story1.hide();
    this.story2.hide();
    this.story3.hide();
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("MY OWN GAME");
    this.title.position(displayWidth/2 - 50, 0);
    this.title.style('color', 'yellow');
  

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.input.style('width', '200px');
    this.input.style('height', '20px');
    this.input.style('background', 'skyblue');
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button.style('background', 'lightpink');
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welome " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4 - 100);
      this.greeting.style('color', 'orange');
     this.story.html("Story");
    this.story.position(displayWidth/2 - 200, displayHeight/4 - 40);
    this.story.style('color', 'orange');
  this.story1.html("You have to save the earth from aliens.");
   this.story1.position(displayWidth/2 - 330, displayHeight/4);
   this.story1.style('color', 'orange');
   this.story2.html("They have aldready attaked our planet you have to stop them from destroying life in our planet.");
   this.story2.position(displayWidth/2 - 330, displayHeight/4 +25 );
   this.story2.style('color', 'orange');
  this.story3.html("We belive in you.");
  this.story3.position(displayWidth/2 - 330, displayHeight/4 + 50);
  this.story3.style('color', 'orange');
  

  this.Instructions.html("Instructions And Rules");
  this.Instructions.position(displayWidth/2 - 200, displayHeight/4 + 100);
  this. Instructions.style('color', 'orange');
     this.Instruction1.html("1.Use arrow keys to move");
 this.Instruction1.position(displayWidth/2 - 330, displayHeight/4 + 130);
 this. Instruction1.style('color', 'orange');
 this.Instruction2.html("2.If your score is 1000.You can proceed to Level-2.");
 this.Instruction2.position(displayWidth/2 - 330, displayHeight/4 + 155 );
this. Instruction2.style('color', 'orange');


    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      database.ref('/').update({
        players:null
      })
    });

  }
}

