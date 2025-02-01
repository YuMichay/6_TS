export class Player {
  playerName: string;

  constructor(playerName: string) {
    this.playerName = playerName;
  }

  getPlayerName() {
    return this.playerName;
  }

  createPlayer() {
    console.log(`Player ${this.getPlayerName()} is created`);
  }
}