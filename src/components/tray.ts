
import { Exponent, ImagePanel, Panel } from "@repcomm/exponent-ts";

export class TrayItem<T> extends Panel {
  private image: ImagePanel;
  private label: Exponent;

  private userData: T;

  constructor () {
    super();

    this.addClasses("tray-item");

    this.image = new ImagePanel()
    .addClasses("tray-item-image")
    .mount(this);

    this.label = new Exponent()
    .make("span")
    .addClasses("exponent", "tray-item-label", "no-select")
    .mount(this);
  }
  setLabel (txt: string): this {
    this.label.setTextContent(txt);
    return this;
  }
  setImage (url: string): this {
    this.image.setImage(url);
    return this;
  }
  getUserData(): T {
    return this.userData;
  }
  setUserData (userData: T): this {
    this.userData = userData;
    return this;
  }
  hasUserData (): boolean {
    if (this.userData) return true;
    return false;
  }
}

export class Tray<T> extends Panel {
  private items: Set<TrayItem<T>>;
  constructor () {
    super();
    this.addClasses("tray");

    this.items = new Set<TrayItem<T>>();
  }
  addItem (item: TrayItem<T>): this {
    if (this.hasItem(item)) throw `Tray already has item ${item}, cannot add again`;
    item.mount(this);
    this.items.add(item);
    return this;
  }
  hasItem (item: TrayItem<T>): boolean {
    return this.items.has(item);
  }
  removeItem (item: TrayItem<T>): this {
    if (!this.hasItem(item)) throw `Item '${item}' was not found in tray, could not remove`;
    item.unmount();
    this.items.delete(item);
    return this;
  }
  createItem (): TrayItem<T> {
    let result = new TrayItem<T>();
    this.addItem(result);
    return result;
  }
}
