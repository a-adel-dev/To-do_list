export class Tag {
  constructor(name, textColor, bgColor, app) {
    this.name = name;
    this.textColor = textColor;
    this.bgColor = bgColor;
    this.addToApp(app);
  }

  modifyName(newName) {
    this.name = newName;
  }

  addToApp(app) {
    app.createTag(this);
  }
}
