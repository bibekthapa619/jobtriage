const { I } = inject();
const signupPage = require("../pages/signupPage");
const globals = require("../helpers/globals.js");
const user = require("../helpers/api/user");

When(
  "the user signs up with name {string}, email {string} password {string} and confirmation password {string} using the webUI",
  (name, email, password, confirmationPassword) => {
    signupPage.signUp(name, email, password, confirmationPassword);
    globals.users.push(email);
  }
);

When("the user browses to the signup page using the webUI", () =>
  I.amOnPage(signupPage.url)
);

Then(
  "the user should be able to login with email {string} and password {string}",
  (email, password) => {
    user.login(email, password);
  }
);
