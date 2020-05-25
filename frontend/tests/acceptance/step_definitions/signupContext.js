const { I } = inject();
const axios = require("axios");
const signupPage = require("../pages/signupPage");
const globals = require("../helpers/globals.js");
const constants = require("../../constants");

Given(
  "the user has signed up with name {string}, email {string} password {string}",
  (name, email, password) => {
    console.log("background")
    axios
      .post(`${constants.apiUrl}/auth/register`, { name, email, password })
      .then((res) => {
        console.log("Response:", res);
      })
      .catch((e) => {
        // console.log(e);
      });
      globals.users.push(email);
  }
);

When("the user browses to the signup page using the webUI", () =>
  I.amOnPage(signupPage.url)
);

Then(
  "the user should be able to login with email {string} and password {string}",
  async (email, password) => {
    try {
      await axios.post(`${constants.apiUrl}/auth/login/`, { email, password });
    } catch (error) {
      throw new Error(`Cannot login user with email ${email}
     Status code: ${error.response.status}
     Stauts: ${error.response.statusText}`);
    }
  }
);
