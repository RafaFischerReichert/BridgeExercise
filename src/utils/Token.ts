export default class Token {
  private _token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5OTgxMzEyMTUiLCJuYW1lIjoiUmFmYWVsIEZpc2NoZXIgUmVpY2hlcnQiLCJpYXQiOjE1MTYyMzkwMjJ9.Ikezg3EQMMgRuMgINfORfdTscslgT6rteTSEvYTzhj8";

  get token(): string {
    return this._token;
  }
}
