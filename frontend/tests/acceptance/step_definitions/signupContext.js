const { I } = inject();
const signupPage = require("../pages/signupPage");
const globals = require("../helpers/globals.js");

When(
  "the user signs up with name {string}, email {string} password {string} and confirmation password {string} using the webUI",
  async (name, email, password, confirmationPassword) => {
    await signupPage.signUp(name, email, password, confirmationPassword);
    globals.users.push({ email: email, password: password });
  }
);

When("the user browses to the signup page using the webUI", () =>
  I.amOnPage(signupPage.url)
);
