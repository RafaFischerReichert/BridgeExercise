import Token from "../utils/Token";
import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole {
  constructor(){
    this.configureGame();
    console.log("XBox pronto!")
  }
  configureGame(): void {
    console.log(`Xbox iniciado, autenticação: ${this.authToken().token}`);
  }
  authToken(): Token {
    return new Token();
  }
}
