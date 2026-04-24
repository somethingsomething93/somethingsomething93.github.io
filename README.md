<html lang="en">
<head>
<meta charset="UTF-8">
<title>Forge</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, sans-serif;
}

body {
  background: #0b141c;
  color: #c7d5e0;
  overflow: hidden;
}

.app {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, #0f1b24, #0a141c);
  border-right: 1px solid #1f2f3a;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 18px;
  color: #66c0f4;
}

.search {
  padding: 8px 10px;
  border-radius: 6px;
  border: none;
  background: #1b2838;
  color: #c7d5e0;
  margin-bottom: 10px;
}


.games {
  flex: 1;
  overflow-y: auto;
}

.game {
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.game:hover {
  background: #1f3a4a;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.topbar {
  height: 50px;
  background: #0f1b24;
  border-bottom: 1px solid #1f2f3a;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
}

.viewer {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, #0b141c, #050a0f);
  position: relative;
}


iframe {
  width: 90%;
  height: 90%;
  border: none;
  border-radius: 8px;
  display: none;
  background: black;
}

.game-info {
  position: absolute;
  top: 80px;
  left: 80px;
  background: #16202a;
  padding: 25px;
  border-radius: 8px;
  max-width: 300px;
}

#playBtn {
  background: linear-gradient(to bottom, #6ee16e, #3caa3c);
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  font-weight: bold;
  color: black;
  border-radius: 6px;
  cursor: pointer;
}

.hidden {
  display: none;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;
}
</style>
</head>

<body>

<canvas id="bg"></canvas>

<div class="app">
  
  <div class="sidebar">
    <div class="title">Library</div>
    <input class="search" placeholder="Search..." onkeyup="searchGames(this.value)">
    
<div class="games">

<div class="game" onclick="selectGame('1','Tile merging puzzle where reaching 1 wins.','https://www.eduwing.it.com/filestorage/gd/1/index.html')">1</div>

<div class="game" onclick="selectGame('2048','Classic number merging puzzle.','https://www.eduwing.it.com/filestorage/gd/2048/index.html')">2048</div>

<div class="game" onclick="selectGame('3D Space Cadet Pinball','Classic Windows pinball game.','https://emupedia.net/emupedia-game-space-cadet-pinball/')">3D Space Cadet Pinball</div>

<div class="game" onclick="selectGame('Angry Birds','Physics-Based puzzle.','https://harshulmoon.github.io/iframes/angrybirds.html')">Angry Birds</div>

<div class="game" onclick="selectGame('ARC','Ragdoll Archer','https://harshulmoon.github.io/iframes/ragdollarcher.html')">ARC</div>

<div class="game" onclick="selectGame('Balatro','Roguelike poker deckbuilder.','https://www.eduwing.it.com/filestorage/gd/balatro/index.html')">Balatro</div>

<div class="game" onclick="selectGame('Baldis Basics Plus','Weird horror math game.','https://www.eduwing.it.com/filestorage/gn/467.html')">Baldis Basics Plus</div>

<div class="game" onclick="selectGame('Bloodmoney','Action-packed shooting game.','https://www.eduwing.it.com/filestorage/gd/bloodmoney/index.html')">Bloodmoney</div>

<div class="game" onclick="selectGame('Bomberdude','Bomberman-style arcade game.','https://cojmar.github.io/bomberman/')">Bomberdude</div>

<div class="game" onclick="selectGame('Brotato','Arena-shooter roguelite','https://www.eduwing.it.com/filestorage/gn/723.html')">Brotato</div>

<div class="game" onclick="selectGame('Burgers And Frights','Creepy biking horror game.','https://raccziszy.github.io/games1/play/bf/')">Burgers And Frights</div>

<div class="game" onclick="selectGame('Cookie Clicker','Incremental clicking game.','https://www.eduwing.it.com/filestorage/gd/cookie-clicker/index.html')">Cookie Clicker</div>

<div class="game" onclick="selectGame('Cod Zombies','First-Person Zombie Shooter','https://www.eduwing.it.com/filestorage/gd/nzp/index.html')">Cod Zombies</div>

<div class="game" onclick="selectGame('Crossy Road','Endless road-crossing arcade.','https://www.eduwing.it.com/filestorage/gd/grassycrossyroad/index.html')">Crossy Road</div>

<div class="game" onclick="selectGame('Cubefield','Avoid obstacles in a 3D field.','https://www.eduwing.it.com/filestorage/gd/cubefield/index.html')">Cubefield</div>

<div class="game" onclick="selectGame('Delia The Traveling Witch','2D action-adventure platformer.','https://www.eduwing.it.com/filestorage/gd/kaimatten-delia-the-traveling-witch/web/index.html')">Delia The Traveling Witch</div>

<div class="game" onclick="selectGame('Deltatraveler','Deltarune-style RPG fangame.','https://www.eduwing.it.com/filestorage/gd/deltatraveler/index.html')">Deltatraveler</div>

<div class="game" onclick="selectGame('Deltarune','Episodic RPG.','https://jesus.churchinhuntsville.org/resources/semag/deltarune/index.html')">Deltarune</div>

<div class="game" onclick="selectGame('Dino','Chrome offline dinosaur runner.','https://www.eduwing.it.com/filestorage/gd/chrome-dino/index.html')">Dino</div>

<div class="game" onclick="selectGame('Do NOT Take This Cat Home','Short creepy story game.','https://www.eduwing.it.com/filestorage/gd/donottakethiscathome/index.html')">Do NOT Take This Cat Home</div>

<div class="game" onclick="selectGame('Doge Miner','Mine dogecoin for fun.','https://www.eduwing.it.com/filestorage/gn/511.html')">Doge Miner</div>

<div class="game" onclick="selectGame('Elevator Hitch','Strange surreal experience.','https://jesus.churchinhuntsville.org/resources/semag/elevatorhitch/index.html')">Elevator Hitch</div>

<div class="game" onclick="selectGame('FNAF Collection','Collection of FNAF games','https://emupedia.net/emupedia-game-fnaf/')">FNAF Collection</div>

<div class="game" onclick="selectGame('Flappy Bird','Tap to fly through pipes.','https://www.eduwing.it.com/filestorage/gd/flappybird/index.html')">Flappy Bird</div>

<div class="game" onclick="selectGame('Fruit Ninja','Slice fruit, avoid bombs.','https://www.eduwing.it.com/filestorage/gd/fruit-ninja/index.html')">Fruit Ninja</div>

<div class="game" onclick="selectGame('Gobdun','A 3D grid-based dungeon-crawling RPG.','https://ubg98.github.io/Gobdun/')">Gobdun</div>

<div class="game" onclick="selectGame('Granny 1','Escape the house quietly.','https://www.eduwing.it.com/filestorage/gd/granny-1/index.html')">Granny 1</div>

<div class="game" onclick="selectGame('Granny 2','Even harder escape horror.','https://www.eduwing.it.com/filestorage/gd/granny-2/index.html')">Granny 2</div>

<div class="game" onclick="selectGame('HexGL','Futuristic racing game.','https://www.eduwing.it.com/filestorage/gd/hexgl/index.html')">HexGL</div>

<div class="game" onclick="selectGame('Hollow Knight','Metroidvania adventure.','https://www.eduwing.it.com/filestorage/gd/hollow-knight/index.html')">Hollow Knight</div>

<div class="game" onclick="selectGame('Idle Breakout','Breakout idle game.','https://www.eduwing.it.com/filestorage/gd/idlebreakout/index.html')">Idle Breakout</div>

<div class="game" onclick="selectGame('In stars and time','Time looping, turn-based RPG.','https://www.eduwing.it.com/filestorage/gn/667.html')">In stars and time</div>

<div class="game" onclick="selectGame('Jazz Jackrabbit','Classic platformer shooter.','https://emupedia.net/emupedia-game-jazz2/')">Jazz Jackrabbit</div>

<div class="game" onclick="selectGame('Lemmings','A Puzzle-Strategy Game','https://emupedia.net/emupedia-game-lemmings1/?version=1&difficulty=1&level=1&speed=1&cheat=false')">Lemmings</div>

<div class="game" onclick="selectGame('Lemmings','A Puzzle Strategy Game','emupedia.net/emupedia-game-lemmings1/?version=1&difficulty=1&level=1&speed=1&cheat=true')">Lemmings (with cheats)</div>

<div class="game" onclick="selectGame('Level Devil','Troll platformer game.','https://www.eduwing.it.com/filestorage/gd/level-devil/index.html')">Level Devil</div>

<div class="game" onclick="selectGame('Minesweeper Plus','Classic minesweeper.','https://www.eduwing.it.com/filestorage/gd/undertale/index.html')">Minesweeper Plus</div>

<div class="game" onclick="selectGame('N-Gon','Physics-based action game.','https://www.eduwing.it.com/filestorage/gn/180.html')">N-Gon</div>

<div class="game" onclick="selectGame('OMORI','Psychological RPG.','https://www.eduwing.it.com/filestorage/gd/omori/index.html')">OMORI</div>

<div class="game" onclick="selectGame('Oneshot (LEGACY)','Story Based RPG','https://harshulsilverspoon.github.io/oneshotthing/')">Oneshot (LEGACY)</div>

<div class="game" onclick="selectGame('OPERIUS','High speed arcade inspired shooter.','https://harshulmoon.github.io/iframes/operius.html')">OPERIUS</div>

<div class="game" onclick="selectGame('osu!','Rhythm clicking game.','https://www.eduwing.it.com/filestorage/gd/osu/index.html')">osu!</div>

<div class="game" onclick="selectGame('OVO','Precision platformer.','https://www.eduwing.it.com/filestorage/gd/ovo/index.html')">OVO</div>

<div class="game" onclick="selectGame('Particle clicker','A popular, educational incremental (idle) game developed during the 2014 CERN Webfest that simulates running a particle physics lab.','https://harshulsilverspoon.github.io/particle-clicker/')">Particle Clicker</div>

<div class="game" onclick="selectGame('Pizza Tower','A fast-paced 2D platformer.','https://harshulmoon.github.io/iframes/pizzatower.html')">Pizza Tower</div>

<div class="game" onclick="selectGame('Showgun Showdown','A turn-based, 1D tactical roguelike.','https://harshulsilverspoon.github.io/shogun.html/')">Showgun Showdown</div>

<div class="game" onclick="selectGame('Side Effects','A tense, turn-based psychological horror game often described as medical roulette where players act as test subjects in a twisted pharmaceutical trial.','https://www.eduwing.it.com/filestorage/gn/318.html')">Side Effects</div>

<div class="game" onclick="selectGame('Stardew Valley','An open-ended, indie farming simulation role-playing game where you inherit your grandfathers old farm, restoring it from ruin into a thriving homestead.','https://www.eduwing.it.com/filestorage/gn/789.html')">Stardew Valley</div>

<div class="game" onclick="selectGame('Spelunky','A critically acclaimed 2D roguelike platformer where players explore randomly generated, destructible caves filled with traps, enemies, and treasure.','https://emupedia.net/emupedia-game-spelunky-classic/')">Spelunky</div>

<div class="game" onclick="selectGame('Yume Nikki','Surreal exploration game.','https://emupedia.net/emupedia-game-yume-nikki/')">Yume Nikki</div>

<div class="game" onclick="selectGame('Undertale','A Japanese style, story-driven RPG.','https://www.eduwing.it.com/filestorage/gd/undertale/index.html')">Undertale</div>

<div class="game" onclick="selectGame('Untitled Goose Game','A game about being a goose causing mayhem.','https://www.eduwing.it.com/filestorage/gn/718.html')">Untitled Goose Game</div>

<div class="game" onclick="selectGame('USURPER GHOUL','Indie puzzle RPG.','https://www.eduwing.it.com/filestorage/gd/evandahm-usurper-ghoul/web/index.html')">USURPER GHOUL</div>

<div class="game" onclick="selectGame('Vampire Survivors','Low-cost bullet heaven roguelite game where you control a character who automatically attacks hordes of monsters for 30 minutes.','https://www.eduwing.it.com/filestorage/gd/poncle-vampire-survivors/index.html')">Vampire Survivors</div>

<div class="game" onclick="selectGame('Yume Nikki','Surreal exploration game.','https://emupedia.net/emupedia-game-yume-nikki/')">Yume Nikki</div>


  </div>
  </div>


  <div class="main">

  <div class="topbar">
      <div>Forge Launcher</div>
      <div onclick="goFullscreen()" style="cursor:pointer;">Fullscreen</div>
    </div>

  <div class="viewer">

  <div id="gameInfo" class="hidden game-info">
        <h2 id="gameTitle"></h2>
        <button id="playBtn">PLAY</button>
        <p id="gameDesc"></p>
      </div>

  <iframe id="frame"></iframe>

   </div>

  </div>

</div>

<script>
let currentGameURL = "";

function selectGame(name, desc, url){
  document.getElementById("gameTitle").textContent = name;
  document.getElementById("gameDesc").textContent = desc;
  currentGameURL = url;
  document.getElementById("gameInfo").classList.remove("hidden");
}

document.getElementById("playBtn").onclick = function(){
  loadGame(currentGameURL);
  document.getElementById("gameInfo").classList.add("hidden");
};

function loadGame(url){
  let f = document.getElementById("frame");
  f.style.display = "block";
  f.src = url;
}

function goFullscreen(){
  let f = document.getElementById("frame");
  if(f.requestFullscreen) f.requestFullscreen();
}

function searchGames(q){
  document.querySelectorAll(".game").forEach(g=>{
    g.style.display = g.innerText.toLowerCase().includes(q.toLowerCase()) ? "block":"none";
  });
}
</script>

</body>
</html>
