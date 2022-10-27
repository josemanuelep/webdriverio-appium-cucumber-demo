import { faker } from "@faker-js/faker";

class Memo {
  private title: string;
  private note: string;
  private category: string;

  constructor(title: string, category: string) {
    this.title = title;
    this.category = category;
    this.note = faker.lorem.paragraph();
  }

  get titleInput() {
    return $("#detail_title");
  }

  get noteDetailInput() {
    return $("#detail_content");
  }

  get categoryButton() {
    return $("#detail_top_category_tv");
  }

  get categoryOptionButton() {
    return $("//android.widget.TextView[@text='" + this.category.trim + "']");
  }

  get saveButton() {
    return $("#exit_edit");
  }

  get dialogPromp() {
    return $("#guid_dialog_card_view");
  }

 async closeDialog() {
    const alert = await this.dialogPromp;
    let isDisplayed = await alert.isExisting();
    if (isDisplayed) driver.closeWindow();
    ;
  }

  async createNote() {
    await this.closeDialog();
    await (await this.titleInput).waitForEnabled();
    await this.titleInput.addValue(this.title);
    await this.noteDetailInput.addValue(this.note);
    await this.categoryButton.click();
    await this.categoryOptionButton.click();
    await this.saveButton.click();
  }
}

export { Memo };
