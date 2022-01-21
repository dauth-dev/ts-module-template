import theAnswer from "../node_modules/the-answer/dist/the-answer.es.js";
import Part1 from "./parts/Part1.js";
import Part2 from "./parts/Part2.js";

export class App {
  public static Run(): void {
    console.log("Hallo " + theAnswer);

    Part1();
    Part2();
  }

  public static BodyElement: HTMLElement | null =
    document.querySelector<HTMLElement>("body");
}
