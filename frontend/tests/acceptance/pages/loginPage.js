const { I } = inject();

module.exports = {
  url: "/login",
  fields: {
    email:
      '//label[contains(text(),"email")]/parent::div/div/input[contains(@class, "MuiInputBase-input")]',
    password:
      '//label[contains(text(),"password")]/parent::div/div/input[contains(@class, "MuiInputBase-input")]',
  },
  buttons: {
    login: "Login",
  },
  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
  },
  text: {
    error: "//form/p[@class='makeStyles-error-5']",
  },
  fillEmail(email) {
    I.waitForVisible(this.fields.email);
    I.fillField(this.fields.email, email);
  },
  fillPassword(password) {
    I.waitForVisible(this.fields.password);
    I.fillField(this.fields.password, password);
  },
  clickLogin() {
    I.click(this.buttons.login);
  },
};
