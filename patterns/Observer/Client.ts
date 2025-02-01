import { EmailAlertsListener, LogginListener } from "./ConcreteSubscribers";
import { Editor } from "./Publisher";

class Application {
  config(): void {
    const editor = new Editor();

    const logger = new LogginListener("/path/to/log.txt", "Someone has opened file: %s");
    editor.events.subscribe("open", logger.update);

    const emailAlerts = new EmailAlertsListener("admin@example.com", "Someone has changed the file: %s");
    editor.events.subscribe("save", emailAlerts.update);
  }
}