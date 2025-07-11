import { LitElement } from "lit";
import { property } from "lit/decorators.js";

export class MyElement extends LitElement {
  @property()
  accessor name = "";
}
