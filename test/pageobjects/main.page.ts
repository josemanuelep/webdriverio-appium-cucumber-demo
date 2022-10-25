class MainPage {
  note: string;

  get quickNoteInput() {
    return $("#quick_edit");
  }

  get accepButton() {
    return $("#save");
  }

  get pageTitle() {
    return $("#toolbar_title");
  }

  get createddNote() {
    return $("//android.widget.TextView[@text='" + this.note + "']");
  }

  get deleteButton() {
    return $("//android.widget.TextView[@text='Trash']");
  }
  get confirmDeleteButton(){
    return $("#btn_ok");
  }

  async deleteLastCreatedNote() {
    const lastNote = await this.createddNote;
    await driver.touchAction({
      action: "longPress",
      element: lastNote,
    });
    await (await this.deleteButton).click();
    await (await this.confirmDeleteButton).click();
  }

  async acceptAlert() {
    const alert = await $("//android.widget.TextView[@text='NO THANKS']");
    let isDisplayed = await alert.isDisplayed();
    if (isDisplayed) alert.click();
  }

  async createQuickNote(givenNote: string) {
    this.note = givenNote;
    await this.acceptAlert();
    await (await this.quickNoteInput).addValue(this.note);
    await (await this.quickNoteInput).click();
    await (await this.accepButton).click();
  }
}

export { MainPage };
