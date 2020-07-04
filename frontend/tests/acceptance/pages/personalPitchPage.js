const { I } = inject();

module.exports = {
	buttons: {
		editPersonalPitch:
			'//h6[contains(text(),"Personal Pitch")]/parent::div//span[contains(@class,"MuiIconButton-label")]',
		cancel:
			'//div[contains(@class,"makeStyles-pitchContent")]//span[contains(text(),"Cancel")]/parent::button',
		submit:
			'//div[contains(@class,"makeStyles-pitchContent")]//span[contains(text(),"Submit")]/parent::button',
	},
	fields: {
		pitchText:
			'//h6[contains(text(),"Personal Pitch")]/parent::div//div[contains(@class,"makeStyles-contentDiv")]',
		editPitchText:
			'//h6[contains(text(),"Personal Pitch")]/parent::div//div[contains(@class,"ql-editor")]',
	},
	clickEditPersonalPitch() {
		I.waitForVisible(this.buttons.editPersonalPitch);
		I.click(this.buttons.editPersonalPitch);
	},
	clickCancel() {
		I.waitForVisible(this.buttons.cancel);
		I.click(this.buttons.cancel);
	},
	clickSubmit() {
		I.waitForVisible(this.buttons.submit);
		I.click(this.buttons.submit);
  },
  addPitchText(text)
  {
    I.waitForVisible(this.fields.editPitchText);
    I.fillField(this.fields.editPitchText,text)
  }
};
