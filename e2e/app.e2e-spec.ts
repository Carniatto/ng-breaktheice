import { AngularBreakTheIcePage } from './app.po';

describe('angular-break-the-ice App', () => {
  let page: AngularBreakTheIcePage;

  beforeEach(() => {
    page = new AngularBreakTheIcePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
