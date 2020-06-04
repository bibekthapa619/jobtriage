const { I } = inject();

module.exports = {
  url: "/signup",
  fields: {
    name: '//label[contains(text(),"Name")]/parent::div//input[contains(@class, "MuiInputBase-input")]',
    email: '//label[contains(text(),"Email")]/parent::div//input[contains(@class, "MuiInputBase-input")]',
    password: '//label[contains(text(),"Password")]/parent::div//input[contains(@class, "MuiInputBase-input")]',
    confirmPassword: '//label[contains(text(),"Confirm password")]/parent::div//input[contains(@class, "MuiInputBase-input")]',
  },
  text: {
    error: "//form/p[@class='makeStyles-error-155']",
  },
  async signUp(name, email, password, confirmPassword) {
    await I.waitForVisible(this.fields.name);
    await I.fillField(this.fields.name, name);
    await I.fillField(this.fields.email, email);
    await I.fillField(this.fields.password, password);
    await I.fillField(this.fields.confirmPassword, confirmPassword);
    await I.click("Sign Up");
  },
};
