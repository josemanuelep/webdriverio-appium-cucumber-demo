import { Given, When, Then } from "@wdio/cucumber-framework";
import { Memo } from "../pageobjects/memo.page";
import { MainPage } from "./../pageobjects/main.page";

let mainPage = new MainPage();
let memo: Memo;

When("I create a quick note {stringß}", async (note: string) => {
  await mainPage.createQuickNote(note);
});

Then("The note is created", async () => {
  await expect(mainPage.createdNote).toBePresent();
  await mainPage.deleteLastCreatedNote();
});

Given("I open note page", async () => {
  await MainPage.openCreateNotepage();
});

Given("I create a note", async (table) => {
  let note = table.rowsHash();
  memo = new Memo(note.tile, note.category);
  memo.createNote();
});
