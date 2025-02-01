import { Command } from "./Command";

export class CopyCommand extends Command {
  execute(): boolean {
    this.app.clipboard = this.editor.getSelection();
    return false;
  }
}

export class CutCommand extends Command {
  execute(): boolean {
    this.saveBackup();
    this.app.clipboard = this.editor.getSelection();
    this.editor.deleteSelection();
    return true;
  }
}

export class PasteCommand extends Command {
  execute(): boolean {
    this.saveBackup();
    this.editor.replaceSelection(this.app.clipboard);
    return true;
  }
}

export class Undo extends Command {
  execute(): boolean {
    this.app.undo();
    return false;
  }
}

export class CommandHistory {
  private history: Command[] = [];

  push(command: Command): void {
    this.history.push(command);
  }

  pop(): Command | null {
    return this.history.pop() || null;
  }
}