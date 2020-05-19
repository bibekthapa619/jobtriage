const { I } = inject();
const loginPage = require("../pages/loginPage");
const dashboard = require("../pages/dashboardPage");
const signupPage = require("../pages/signupPage");

Given("the user has browsed to the homepage", () => I.amOnPage("/"));

When(
  "the user signs up with name {string}, email {string} password {string} and confirmation password {string} using the webUI",
  (name, email, password, confirmationPassword) => {
    signupPage.signUp(name, email, password, confirmationPassword);
  }
);

When("the user browses to the login page", () => I.amOnPage(loginPage.url));

When(
  "the user logs in with email {string} and password {string} using the webUI",
  (email, password) => {
    loginPage.login(email, password);
  }
);

Then("user should be redirected to the dashboard page", () =>
  I.seeElement(dashboard.dashboardContainer)
);

Given("the user has browsed to the login page", () => {
  I.amOnPage(loginPage.url);
});

Then("the user should be redirected to the dashboard page", () => {
  I.amOnPage(dashboard.url);
});

When("user logs in with following credentials:", (table) => {
  email = table.rows[0].cells[1].value;
  password = table.rows[1].cells[1].value;
  loginPage.login(email, password);
});

Then("an error message {string} should be displayed", (msg) => {
  I.seeElement(loginPage.text.error);
  I.see(msg, loginPage.text.error);
});

Then('the user should stay on the same page', () => {
  loginPage.amOnThisPage();
});
