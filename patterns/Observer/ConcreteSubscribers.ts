import { EventListener } from './Subscriber';

export class LogginListener implements EventListener {
  private logFilename: string;
  private message: string;

  constructor(logFilename: string, message: string) {
    this.logFilename = logFilename;
    this.message = message;
  }

  update(filename: string): void {
    console.log(`[LOG] ${this.message.replace("%s", filename)} (Logged to ${this.logFilename})`);
  }
}

export class EmailAlertsListener implements EventListener {
  private email: string;
  private message: string;

  constructor(email: string, message: string) {
    this.email = email;
    this.message = message;
  }

  update(filename: string): void {
    console.log(`[EMAIL to ${this.email}] ${this.message.replace("%s", filename)}`);
  }
}