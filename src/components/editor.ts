
import { Grid, Panel } from "@repcomm/exponent-ts";

import { Tray } from "./tray";

export interface ComponentItem {

}

export class Editor extends Grid {
  private tray: Tray<ComponentItem>;

  private highlighter: Panel;

  constructor () {
    super();
    
    this.addClasses("editor");

    this.setStyleItem("grid-template-rows", "minmax(0, 1fr) minmax(0, 15fr)");
    this.setStyleItem("grid-template-columns", "minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr)");

    this.tray = new Tray();

    this.setCell(this.tray, 1, 2);

    this.tray.createItem()
    .setImage("resources/icons/panel.svg")
    .setLabel("Panel")
    .setUserData({
      test:"test"
    });

    this.tray.createItem()
    .setImage("resources/icons/imagepanel.svg")
    .setLabel("Image Panel")
    .setUserData({
      test:"test"
    });

    this.highlighter = new Panel()
    .setId("highlighter");

    this.setCell(this.highlighter, 2, 2);
  }

  getTray (): Tray<ComponentItem> {
    return this.tray;
  }
}
