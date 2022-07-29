import IConsole from "./consoles/interfaces/IConsole";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./playSessions/AdvancedPlay";
import Play from "./playSessions/Play";

function startPlaying(gameConsole: IConsole) {
  console.log("Carregando...");
  const play = new Play(gameConsole);
  play.playing();
  play.result();
  console.log();
}
function startAdvancedPlay(gameConsole: IConsole) {
  console.log("Carregando...");
  const play = new AdvancedPlay(gameConsole);
  play.playing();
  play.challenge();
  play.result();
  console.log();
}
startPlaying(new PlayStation());
startAdvancedPlay(new Xbox());
