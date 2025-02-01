import { Command } from "./Command";
import { CommandHistory, CopyCommand, CutCommand, PasteCommand, Undo } from "./Commands";
import { Editor } from "./Receiver";

export class Application {
  clipboard: string;
  editors: Editor[] = [];
  activeEditor: Editor;
  history: CommandHistory;

  constructor() {
    this.history = new CommandHistory();
  }

  createUI() {
    const copy = () => this.executeCommand(new CopyCommand(this, this.activeEditor));
    // copyButton.addEventListener('click', copy);

    const cut = () => this.executeCommand(new CutCommand(this, this.activeEditor));
    // cutButton.addEventListener('click', cut);

    const paste = () => this.executeCommand(new PasteCommand(this, this.activeEditor));
    // pasteButton.addEventListener('click', paste);

    const undo = () => this.executeCommand(new Undo(this, this.activeEditor));
    // undoButton.addEventListener('click', undo);
  }

  executeCommand(command: Command): void {
    if (command.execute()) {
      this.history.push(command);
    }
  }

  undo(): void {
    const command = this.history.pop();
    if (command !== null) {
      command.undo();
    }
  }
}