import { Editor } from "./Receiver";
import { Application } from "./Invoker";

export abstract class Command {
  protected app: Application;
  protected editor: Editor;
  protected backup: string;

  constructor(app: Application, editor: Editor) {
    this.app = app;
    this.editor = editor;
  }

  saveBackup(): void {
    this.backup = this.editor.text;
  }

  undo(): void {
    this.editor.text = this.backup;
  }

  abstract execute(): boolean;
}