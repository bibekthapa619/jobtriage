const { I } = inject();

module.exports = {
  menuOptions: {
    dashboard: '//nav/ul/li//span[contains(text(),"Dashboard")]',
    selfAnalysis: '//nav/ul/li//span[contains(text(),"Self Analysis")]',
    account: '//nav/ul/li//span[contains(text(),"Account")]',
    logout: '//nav/ul/li//span[contains(text(),"Logout")]',
  },
  clickDashboard() {
    I.waitForVisible(this.menuOptions.dashboard, 5);
    I.click(this.menuOptions.dashboard);
  },
  clickSelfAnalysis() {
    I.waitForVisible(this.menuOptions.selfAnalysis, 5);
    I.click(this.menuOptions.selfAnalysis);
  },
  clickAccount() {
    I.waitForVisible(this.menuOptions.account, 5);
    I.click(this.menuOptions.account);
  },
  clickLogout() {
    I.waitForVisible(this.menuOptions.logout, 5);
    I.click(this.menuOptions.logout);
  },
};
