import { StashAppPage } from './app.po';

describe('stash-app App', () => {
  let page: StashAppPage;

  beforeEach(() => {
    page = new StashAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
