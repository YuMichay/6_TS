export class Editor {
  text: string = "";

  getSelection(): string {
    return this.text;
  }

  deleteSelection(): void {
    this.text = "";
  }

  replaceSelection(text: string): void {
    this.text = text;
  }
}