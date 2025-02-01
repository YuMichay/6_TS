import { Application } from "./Invoker";
import { Editor } from "./Receiver";

const editor = new Editor();
const invoker = new Application();

invoker.createUI();
invoker.activeEditor = editor;