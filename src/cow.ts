import { say as cowsay } from "cowsay-browser";

export class Cow {
  public say(message: string) {
    return cowsay({ text: message })
  }
}