import { Player } from './Player';
import { Progress } from './Progress';
import { Sound } from './Sound';
import { Video } from './Video';

class GameFacade {
  private player: Player;
  private progress: Progress;
  private sound: Sound;
  private video: Video;

  constructor(playerName: string) {
    this.player = new Player(playerName);
    this.progress = new Progress();
    this.sound = new Sound();
    this.video = new Video();
  }

  startGame() {
    this.player.createPlayer();
    this.sound.turnOn();
    this.video.turnOn();
  }

  pauseGame() {
    this.sound.turnOff();
    this.video.turnOff();
  }

  stopGame() {
    this.progress.saveProgress(this.player);
    this.sound.turnOff();
    this.video.turnOff();
  }
}