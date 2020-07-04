const { I } = inject();
const selfAnalysisPage = require("../pages/selfAnalysisPage");
const personalPitchPage = require("../pages/personalPitchPage");

Given("the user has browsed to the selfanalysis page", () => {
	I.amOnPage(selfAnalysisPage.url);
});

Given("the user has clicked on edit pitch button using webUI", () => {
	personalPitchPage.clickEditPersonalPitch();
});

Given("the pitch textfield has appeared in the webUI", () => {
	I.seeElement(personalPitchPage.fields.editPitchText);
});

When("the user submits a personal pitch {string}", (pitch) => {
  personalPitchPage.addPitchText(pitch);
  personalPitchPage.clickSubmit();
});

Then("the personal pitch field should show the text {string}", (text) => {
	I.see(text,personalPitchPage.fields.pitchText);
});
