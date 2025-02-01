class EventManager {
  private listeners: { [key: string]: Function[] } = {};

  subscribe(eventType: string, listener: Function): void {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(listener);
  }

  unsubscribe(eventType: string, listener: Function): void {
    if (!this.listeners[eventType]) return;
    this.listeners[eventType] = this.listeners[eventType].filter((elem) => elem !== listener);
  }

  notify(eventType: string, data: string): void {
    if (!this.listeners[eventType]) return;
    this.listeners[eventType].forEach((listener) => listener(data));
  }
}

export class Editor {
  public events: EventManager;
  file: File;

  constructor() {
    this.events = new EventManager();
  }

  openFile(path: BlobPart[]): void {
    this.file = new File(path, this.file.name);
    this.events.notify('open', this.file.name);
  }

  saveFile(): void {
    this.events.notify('save', this.file.name);
  }
}