const { I } = inject();
const loginPage = require("../pages/loginPage");
const dashboard = require("../pages/dashboardPage");
const signupPage = require("../pages/signupPage");
const globals = require("../helpers/globals.js");
const user = require("../helpers/api/user");

Given(
  "the user has signed up with name {string}, email {string} password {string}",
  (name, email, password) => {
    user.register(name, email, password);
    globals.users.push(email);
  }
);

Given("the user has browsed to the homepage", () => I.amOnPage("/"));

When("the user browses to the login page", () => I.amOnPage(loginPage.url));

When(
  "the user logs in with email {string} and password {string} using the webUI",
  (email, password) => {
    loginPage.login(email, password);
  }
);

Then("the user should be redirected to the dashboard page", () =>
  I.seeElement(dashboard.dashboardContainer)
);

Given("the user has browsed to the login page", () => {
  I.amOnPage(loginPage.url);
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

Then("the user should stay on the login page", () => {
  loginPage.amOnThisPage();
});

After(() => {
  console.log(globals.users);
  globals.users.forEach(async (element) => {
    user.delete(element);
  });
  globals.users = [];
});
