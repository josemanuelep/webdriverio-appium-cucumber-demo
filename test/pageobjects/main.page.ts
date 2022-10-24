import * as EC from "wdio-wait-for";

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

  get createdNote() {
    return $("#card_layout");
  }

  async acceptAlert() {
    const alert = await $("//android.widget.TextView[@text='NO THANKS']");
    if (alert.isDisplayed) alert.click();
  }

  async createQuickNote(givenNote: string) {
    this.note = givenNote;
    await (await this.quickNoteInput).addValue(this.note);
    await (await this.quickNoteInput).click();
    await (await this.accepButton).click();
  }
}

export { MainPage };
