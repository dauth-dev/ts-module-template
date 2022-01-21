import theAnswer from "../../node_modules/the-answer/dist/the-answer.es.js";
import { App } from "../App.js";

export default () => {
  const part1Div = document.createElement("div");

  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const content = document.createTextNode(`the Answer is: ${theAnswer}`);

  h1.appendChild(content);
  header.appendChild(h1);
  part1Div.appendChild(header);

  App.BodyElement?.appendChild(part1Div);
};
