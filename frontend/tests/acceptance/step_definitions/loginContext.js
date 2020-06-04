const { I } = inject();
const loginPage = require("../pages/loginPage");
const dashboard = require("../pages/dashboardPage");
const globals = require("../helpers/globals.js");
const userAPI = require("../helpers/api/user");

Given(
  "the user has signed up with name {string}, email {string} password {string}",
  async (name, email, password) => {
    await userAPI.register(name, email, password);
    globals.users.push({ email: email, password: password });
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

When("the user logs in with the following credentials:", (table) => {
  let tableData = {};
  table.parse().raw().forEach(function(data) { tableData[data[0]] = data[1] });
  email = tableData.email;
  password = tableData.password;
  loginPage.login(email, password);
});

Then("an error message {string} should be displayed", (message) => {
  I.seeElement(loginPage.text.error);
  I.see(message, loginPage.text.error);
});

Then("the user should stay on the login page", () => {
  loginPage.amOnThisPage();
});

After(() => {
  globals.users.forEach(async (user) => {
    await userAPI.delete(user.email, user.password);
  });
  globals.users = [];
});
