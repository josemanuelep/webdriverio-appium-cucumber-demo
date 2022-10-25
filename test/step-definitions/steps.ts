import { Given, When, Then } from "@wdio/cucumber-framework";
import { MainPage } from "./../pageobjects/main.page";

let mainPage = new MainPage();

When(/^I create a quick note (.*)$/, async (note: string) => {
  await mainPage.createQuickNote(note);
});

Then(/^The note is created$/, async () => {
  await expect(mainPage.createddNote).toBePresent();
  await mainPage.deleteLastCreatedNote();
});
