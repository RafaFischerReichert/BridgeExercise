import IConsole from "../consoles/interfaces/IConsole";
import IPlay from "./interfaces/IPlay";

export default class Play implements IPlay {
  constructor(private gameConsole: IConsole) {}
  playing(): void {
    console.log("Iniciando Jogo.");
  }
  result(): void {
    console.log("****** Jogando ******");
  }
}
