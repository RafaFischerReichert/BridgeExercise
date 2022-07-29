import Token from "../../utils/Token";

export default interface Console {
  configureGame(): void;
  authToken(): Token;
}
