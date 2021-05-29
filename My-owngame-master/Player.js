class Player{
  constructor(){
    this.index = null;
    this.name = null;
    this.score = null;
    this.lifetime = 100;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      score:this.score,
      lifetime:this.lifetime,
      distance:this.distance

    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getlifeTime() {
    database.ref('lifeTime').on("value",(data)=>{
      this.lifetime = data.val();
   })
  }

 static updatelifeTime(lifetime) {
    database.ref('/').update({
      lifeTime:lifetime
    })
  }

}
