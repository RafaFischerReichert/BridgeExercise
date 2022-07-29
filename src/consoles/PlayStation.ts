import Token from "../utils/Token";
import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole {
  constructor(){
    this.configureGame();
    console.log("PlayStation pronto!")
  }
  configureGame(): void {
    console.log(
      `PlayStation iniciado, autenticação: ${this.authToken().token}`
    );
  }
  authToken(): Token {
    return new Token();
  }
}
