class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.rank = null;
        this.score=0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
    rankingSystem(){
        var carsatendref = database.ref('carsatend');
        carsatendref.on("value",(data)=>{
          this.rank = data.val();
        })
      }
      static Rupdate(rank){
        database.ref('/').update({
          carsatend: rank
        });
      }

    
}
