const { I } = inject();
const selfAnalysisPage = require("../pages/selfAnalysisPage");
const personalPitchPage = require("../pages/personalPitchPage");

Given("the user has browsed to the self-analysis page", () => {
	I.amOnPage(selfAnalysisPage.url);
});

Given("the user has opened pitch edit form using the webUI", () => {
	personalPitchPage.clickEditPersonalPitch();
	I.seeElement(personalPitchPage.fields.editPitchText);
});

When("the user submits a personal pitch with text {string}", (text) => {
	personalPitchPage.addPitchText(text);
	personalPitchPage.clickSubmit();
});

Then(
	"the personal pitch with the text {string} should be visible on the webUI",
	(text) => {
		I.see(text, personalPitchPage.fields.pitchText);
	}
);
