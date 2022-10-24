import { Given, When, Then } from "@wdio/cucumber-framework";
import { MainPage } from "./../pageobjects/main.page";

let mainPage = new MainPage();

Given(/^Instance de enviroment$/, async () => {
  await mainPage.acceptAlert();
});

Given(/^I create a quick note (.*)$/, async (note: string) => {
  await mainPage.createQuickNote(note);
});

Then(/^The note is created$/, async () => {
  await expect(mainPage.createdNote).toBePresent();
});
